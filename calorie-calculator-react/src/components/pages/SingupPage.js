import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingupForm from '../forms/SingupForm';
import { singup } from '../../actions/singup';
import './SingupPage.scss';


class SingupPage extends React.Component {
  submit= (data) => this.props.singup(data)
                    .then(() => this.props.history.push('/dashboard'));

  render() {
    return(
      <div className="singUp">
        <h1>Sing Up for free</h1>
      <div className="singUpForm">
        <SingupForm submit={this.submit} />
      </div>
      </div>
    )
  }
}

SingupPage.propTypes = {
  singup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null,{ singup })(SingupPage);
