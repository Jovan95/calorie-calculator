import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../../actions/auth';
import './ForgotPasswordPage.scss';
import logo from "../../assets/logo.png";

class ForgotPasswordPage extends React.Component {
  state = {
    success: false
  };

  submit = data => this.props.resetPasswordRequest(data)
                .then(
                      () => this.setState({ success: true})
                     );

  render() {
    const { success } = this.state;
    return(
      <div className="forgotpass-page">
        {
          success ?
          <div className="forgotpass-section">
            <div className="logo-content">
              <img className="logoImg" src={ logo } alt= "logo"/>
              <div className="logo">CalorieCalculator</div>
            </div>
            <div className="forgotpass-div">
              <Message>Email has been sent.</Message>
            </div>
          </div>
           :
          <div className="forgotpass-section">
            <div className="forgotpass-content">
              <div className="logo-content">
                <img className="logoImg" src={ logo } alt= "logo"/>
                <div className="logo">CalorieCalculator</div>
              </div>
              <div className="forgotpass-form">
                <div className="forgotpass-title">In order to reset your password please enter your email</div>
                <ForgotPasswordForm submit={this.submit} />
              </div>
          </div>
            <div className="overlay"></div>
        </div>
        }
      </div>
    )
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}



export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
