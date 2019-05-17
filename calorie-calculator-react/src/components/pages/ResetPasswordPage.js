import React from 'react';
import { Message } from 'semantic-ui-react';
import { validateToken } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResetPasswordForm from '../forms/ResetPasswordForm';
import { resetPassword } from '../../actions/auth';
import './ResetPasswordPage.scss';
import logo from "../../assets/logo.png";

class ResetPasswordPage extends React.Component {
  state = {
    loading: true,
    success: false
  }

componentDidMount() {
  this.props.validateToken(this.props.match.params.token)
  .then(() => this.setState({loading: false, success: true}))
  .catch(() => this.setState({loading: false, success: false }))
}

submit = data => this.props.resetPassword(data)
                           .then(() => this.props.history.push("/login"))

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token;

    return(
      <div className="resetpass-page">
        {loading && !success && <div className="resetPassDiv"><Message>Validating your token</Message></div>}

        {
          !loading && success &&
          <div className="resetpass-section">
            <div className="resetpass-content">
              <div className="logo-content">
                <img className="logoImg" src={ logo } alt= "logo"/>
                <div className="logo">CalorieCalculator</div>
              </div>
              <div className="resetpass-form">
                <ResetPasswordForm submit={this.submit} token={token} />
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        }

        {!loading && !success && <div className="resetPassDiv"><Message negative>Invalid Token</Message></div>}
      </div>
    )
  }
}


ResetPasswordPage.propTypes = {
  validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  resetPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null,{ validateToken, resetPassword })(ResetPasswordPage);
