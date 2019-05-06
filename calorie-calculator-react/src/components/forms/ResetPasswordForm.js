import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import InlineError from "../messages/InlineError";

class ResetPasswordForm extends React.Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      passwordConfirmation: ''
    },
    loading: false,
    errors: {}
  };

onChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name] : e.target.value }
  })


onSubmit = () => {
  const errors = this.validate(this.state.data);
  this.setState({ errors });

  if (Object.keys(errors).length === 0) {
    this.setState({loading: true})
    this.props
    .submit(this.state.data)
    .catch(err => {
      this.setState({errors: err.response.data.errors, loading: false})
      }
    );
  }
};

validate = data => {
  const errors = {};
  if (!data.password) errors.password = "Can't be blank!";
  if (data.password !== data.passwordConfirmation) errors.password = "Passwords have to match!";
  return errors;
}

  render() {
    const { loading, errors, data} = this.state;
    return(
      <div>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Form.Field errors={!!errors.password}>
            <label htmlFor="password">Choose your new password</label>
            <input
              id='password'
              type='password'
              name='password'
              value={data.password}
              onChange={this.onChange}
              placeholder="New password here"
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Form.Field errors={!!errors.password}>
            <label htmlFor="passwordConfirmation">Confirm your new password</label>
            <input
              id='passwordConfirmation'
              type='password'
              name='passwordConfirmation'
              value={data.passwordConfirmation}
              onChange={this.onChange}
              placeholder="password"
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button basic color='red'>Reset</Button>
        </Form>
      </div>
    )
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default ResetPasswordForm;
