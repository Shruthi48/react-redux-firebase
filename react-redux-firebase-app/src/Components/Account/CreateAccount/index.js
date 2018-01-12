import React , { Component } from 'react';
import SimpleBox from '../SimpleBox';
import InputField from '../InputField';
import FooterFormButton from '../FooterFormButtons';
import { createAccount, emailVerification } from '../../../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../ErrorAlert';
import { Icon, notification } from 'antd';

class CreateAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      };
    }
  
    isValid() {
      const { email, password, confirmPassword } = this.state;
  
      if (email === '' || password === '' || confirmPassword === '') {
        this.setState({
          error: 'Please enter in all fields'
        });
        return false;
      }
  
      if (password !== confirmPassword) {
        this.setState({
          error: 'Please make sure your passwords match'
        });
        return false;
      }
  
      return true;
    }

    sendNotification(title, message) {
        notification.open({
            message: title,
            description: message,
            style: {
              width: 600,
              marginLeft: 335 - 600,
            },
        });
    }
  
    submitAccount(event) {
      event.preventDefault();
      if (!this.isValid()) {
        return;
      }
      this.props.createAccount(this.state.email, this.state.password).then(() => {
        const user_created = 'User Created';
        const user_created_message = 'Please verify user by clicking on the verification link sent to your email';

        this.sendNotification(user_created, user_created_message);

        this.props.emailVerification().catch(err => {
          const verificationError = 'Unable to send verification email';
          this.sendNotification(verificationError, err.message);
        })
        this.props.history.replace('/');
        
      }).catch(err => {
        this.setState({
          error: err.message
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
          <form onSubmit={(event) => this.submitAccount(event)}>
            <InputField id="email" type="text" label="Email"
                        inputAction={(event) => this.setState({ email: event.target.value })}
                        style={this.state.error ? errStyle : null }
                        icon='mail'
            />
            <InputField id="password" type="password" label="Password"
                        inputAction={(event) => this.setState({ password: event.target.value })}
                        style={this.state.error ? errStyle : null }
                        icon='lock'
            />
            <InputField id="confirm-password" type="password" label="Confirm Password"
                        inputAction={(event) => this.setState({ confirmPassword: event.target.value })}
                        style={this.state.error ? errStyle : null }
                        icon='lock'
            />
            {this.state.error && <ErrorAlert>
              {this.state.error}
            </ErrorAlert>}
            <FooterFormButton submitLabel="Create Account" otherLabel="Go back" gotoLink="/Login" {...this.props}/>
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
  
  export default connect(null, { createAccount, emailVerification })(CreateAccount);