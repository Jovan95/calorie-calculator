import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

class LoginPage extends React.Component  {

  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render () {
    return (
      <div className="loginPage">
        <h1>Login page</h1>
      <div className="loginPageDiv">
        <LoginForm submit={this.submit} />
        <Link to="/forgot_password">Forgot Password?</Link>
      </div>
      </div>
    )
  }
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
