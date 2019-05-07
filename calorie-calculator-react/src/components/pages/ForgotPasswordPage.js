import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../../actions/auth';
import './ForgotPasswordPage.scss';

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
      <div className="forgotPass">
        {
          success ?<div className="forgotPassDiv"><Message>Email has been sent.</Message></div>
           :
          <div className="forgotPassDiv"><ForgotPasswordForm submit={this.submit} /></div>
        }
      </div>
    )
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
}



export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
