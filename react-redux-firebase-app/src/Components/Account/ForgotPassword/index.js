import React , { Component } from 'react';
import SimpleBox from '../SimpleBox';
import InputField from '../InputField';
import FooterFormButton from '../FooterFormButtons';
import { forgotPassword } from '../../../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../ErrorAlert';
import { Icon, notification } from 'antd';

class ForgotPassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        error: ''
      };
    }
  
    submitEmail(event) {
      event.preventDefault();
      
      this.props.forgotPassword(this.state.email).then(() => {
        notification.open({
            message: 'Please Reset your Password',
            description: 'An email has been sent to your provided email-id',
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
        });
        this.props.history.replace('/');
      }).catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  
    renderBody() {
      return (
        <div className='login-container'>
          <Icon type='user' className='user-icon'/>
          <form onSubmit={(event) => this.submitEmail(event)}>
            <InputField id="email" type="text" label="Email"
                        inputAction={(event) => this.setState({ email: event.target.value })}
                        icon='mail'
            />

            {this.state.error && <ErrorAlert>
              {this.state.error}
            </ErrorAlert>}
            <FooterFormButton submitLabel="Reset Password" otherLabel="Go back" gotoLink="/Login" {...this.props}/>
          </form>
        </div>
      );
    }
  
    render() {
      return (
        <SimpleBox body={this.renderBody()} title="Create Account"/>
      );
    }
  }
  
  export default connect(null, { forgotPassword })(ForgotPassword);