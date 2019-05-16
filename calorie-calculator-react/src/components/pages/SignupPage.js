import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/signup';
import './SignupPage.scss';


class SignupPage extends React.Component {
  submit= (data) => this.props.signup(data)
                    .then(() => this.props.history.push('/dashboard'));

  render() {
    return(
      <div className="singUp">
        <h1>Sign Up for free</h1>
      <div className="singUpForm">
        <SignupForm submit={this.submit} />
      </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null,{ signup })(SignupPage);
