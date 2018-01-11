import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, savePosts, deletePost } from './Actions/PostActions';
import { getStates } from './Actions/StatesActions';
import { getCities } from './Actions/CitiesActions';
import { getAreas } from './Actions/AreasActions';
import { getUser, logout } from './Actions/UserActions';
import { Field, reduxForm, reset, formValueSelector } from 'redux-form';

class App extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getStates();
    this.props.getUser();
    if(this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.loading === false &&  nextProps.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }
  renderInputField = (field) => {
    return (
      <input type='text' {...field.input} placeholder={`Please enter ${field.label}`} />
    )
  }

  renderSelectField = (field) => {
    const { onChange } = field.input;
    return (
      <select  {...field.input} onChange={(e) => {
        const val = e.target.value;
         this.updateSelectOptions(field.label, val);
        onChange(val);
    }} >
       <option value='notSelected'> {`select your ${field.label}`} </option>
        {this.getOptionsForSelect(field.label)}
      </select>
    )
  }

  updateSelectOptions = (label, value) => {
     switch(label) {
       case 'state': this.props.getCities(value);
       break;
       case 'city': this.props.getAreas(this.props.stateSelected, value);
       break;
       default: return
     }
  }

  getOptionsForSelect = (label) => {
    let _options;
    switch (label) {
      case 'state':
        _options = this.props.states;
        break;
      case 'city' : 
        _options = this.props.cities;
        break;
      case 'area': 
        _options = this.props.areas;
        break;
      default:
        return
    }
    const options = 
      _.map(_options, (state, key) => {
        return (<option value={state}> {state} </option>)
      })
    return options;
  }

  onSubmit = (values) => {
    this.props.savePosts(values).then(this.props.dispatch(reset('NewPost')));
  }

  renderPosts = () => {
    return _.map(this.props.posts, (posts, key) => {
      return (
        <div key={key} >
          <h3> {posts.title} </h3>
          <h3> {posts.body} </h3>
          <h3> {posts.states} </h3>
          <h3> {posts.cities} </h3>
          <h3> {posts.areas} </h3>
          <button onClick={(e) => {this.props.deletePost(key)}}> X </button>
      </div>
      )
    })
  }

  signOut = () => {
    this.props.logout();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container'>
       <button onClick={this.signOut}> SignOut </button>
      <div className="App">
        {this.renderPosts()}
        <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name='title'
                className=''
                component={this.renderInputField}
                label='Title'
              />
              <Field
                name='body'
                className=''
                component={this.renderInputField}
                label='body'
              />
              <Field
                name='states'
                className=''
                component={this.renderSelectField}
                label='state'
              />
              <Field
                name='cities'
                className=''
                component={this.renderSelectField}
                label='city'
              />

              <Field
                name='areas'
                className=''
                component={this.renderSelectField}
                label='area'
              />
              <button type='submit'>Post </button>
        </form>
       </div>
      </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost',
  destroyOnUnmount: false
})(App);

const selector = formValueSelector('NewPost')

form = connect((state, ownProps) => ({
  posts: state.posts,
  states: state.states,
  cities: state.cities,
  areas: state.areas,
  user: state.user,
  stateSelected: selector(state, 'states')
}), { getPosts, savePosts, getStates, deletePost , getCities, getAreas, getUser , logout})(form);

export default form;

