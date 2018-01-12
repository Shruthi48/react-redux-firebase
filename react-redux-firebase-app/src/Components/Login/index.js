import React , { Component } from 'react';
import SimpleBox from '../SimpleBox';
import InputField from '../InputField';
import FooterFormButton from '../FooterFormButtons';
import { login, getUser, googleLogin, facebookLogin } from '../../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../ErrorAlert';
import SocialMediaLogin from '../SocialMediaLogin';
import { Icon } from 'antd';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: ''
      };
    }
  
    componentWillMount() {
      this.props.getUser();
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.user.email !== undefined) {
        this.props.history.push('/');
      }
    }
  
    submitLogin(event) {
      event.preventDefault();
      this.props.login(this.state.email, this.state.password).catch(err => {
        this.setState({
          error: err
        });
      });
    }
  
    renderBody() {
      const errStyle = {
        borderColor: 'red'
      };
  
      return (
        <div className='login-container'>
        <Icon type='user' className='user-icon'/>
        <form onSubmit={event => { this.submitLogin(event);}}>
          <div>
          <SocialMediaLogin {...this.props} />
          <hr></hr>
            <InputField id="email" type="text" label="Email"
                        inputAction={(event) => this.setState({ email: event.target.value })}
                        style={this.state.error ? errStyle : null}
                        icon='mail'
            />
            <InputField id="password" type="password" label="Password"
                        inputAction={(event) => this.setState({ password: event.target.value })}
                        style={this.state.error ? errStyle : null}
                        icon='lock'
            />
            <div>
            <a href='#' onClick={() => {}}>
              <span > Forgot Password? </span>
            </a>
            </div>
            {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
            <FooterFormButton submitLabel="Sign in" otherLabel="Create Account"
                              gotoLink="/CreateAccount" {...this.props}
            />
            
          </div>

        </form>
        </div>
      );
    }
  
    render() {
      console.log('state..', this.state);
      return (
        <div>
          <SimpleBox title="Sign in" body={this.renderBody()}/>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return { user: state.user };
  }
  
  export default connect(mapStateToProps, { login, getUser, googleLogin, facebookLogin })(Login);