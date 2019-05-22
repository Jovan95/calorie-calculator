import React from 'react';
import LoginForm from '../../forms/LoginForm/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import Header from "../../common/Header/Header";
import logo from "../../../assets/logo.png";

class LoginPage extends React.Component  {

  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render () {
    return (
    <div className="login-page">
      <div className="login-section">
        <div className="login-content">
          <div className="logo-content">
            <img className="logoImg" src={ logo } alt= "logo"/>
            <div className="logo">CalorieCalculator</div>
          </div>
          <div className="login-title">Welcome Back!</div>
          <div className="login-form">
            <LoginForm submit={this.submit} />
            <Link to="/forgot_password">Forgot Password?</Link>
          </div>
        </div>
       <div className="overlay"></div>
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
