import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignupPage from './components/pages/SignupPage/SignupPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import ConfirmationPage from './components/pages/ConfirmationPage/ConfirmationPage';
import DashboardPage from './components/pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage/ResetPasswordPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from "prop-types";
import ForgotPasswordPage from './components/pages/ForgotPasswordPage/ForgotPasswordPage';

const App = ({ location }) =>
<div className="ui-container">
  <Route
    location={location}
    path="/"
    exact component={HomePage}
    />
  <Route
    location={location}
    path="/confirmation/:token"
    exact component={ConfirmationPage}
    />
  <GuestRoute
    location={location}
    path="/login"
    exact component={LoginPage}
    />
    <GuestRoute
    location={location}
    path="/forgot_password"
    exact component={ForgotPasswordPage}
    />
  <GuestRoute
    location={location}
    path="/reset_password/:token"
    exact component={ResetPasswordPage}
    />
  <GuestRoute
    location={location}
    path="/signup"
    exact component={SignupPage}
    />
  <UserRoute
    location={location}
    path="/dashboard"
    exact component={DashboardPage}
    />
    <UserRoute
      location={location}
      path="/profile/:userID"
      exact component={ProfilePage}
      />
</div>;

App.propTypes = {
  location:PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
