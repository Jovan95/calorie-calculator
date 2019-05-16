import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/signup';
import './SignupPage.scss';
import Header from '../common/Header/Header';


class SignupPage extends React.Component {
  submit= (data) => this.props.signup(data)
                    .then(() => this.props.history.push('/dashboard'));

  render() {
    return(
    <div className="signup-page">
      <div className="signup-content">
        <div className="content">
          <Header />
          <div className="signup-title">Sign Up for free <br/>and start losing weight!</div>
          <div className="signup-form">
            <SignupForm submit={this.submit} />
          </div>
        </div>
        <div className="overlay"></div>
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
