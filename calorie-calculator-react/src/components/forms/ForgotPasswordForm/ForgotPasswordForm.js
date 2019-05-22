import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../../messages/InlineError';
import PropTypes from 'prop-types';
import Validator from 'validator';
import "./ForgotPasswordForm.scss";

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: ""
      },
      loading: false,
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const errors = this.validate(this.state.data);
    this.setState({ errors })

    if (Object.keys(errors).length === 0) {
      this.setState({ loading : true})
      this.props.submit(this.state.data)
                .catch(err => {
                  this.setState({errors: err.response.data.errors, loading: false})
                })
    }
  }

validate = (data) => {
  const errors = {};
  if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
  return errors;
}

onChange = e =>
  this.setState({
    ...this.state,
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  render() {
    const { data, loading, errors } = this.state;
    return(
      <div>
        <Form onSubmit={this.onSubmit} loading={loading}>
          {!!errors.global && <Message negative>{errors.global}</Message>}
          <Form.Field error={!!errors.email}>
            <label className="forgotpass-label" htmlFor='email'>Email:</label>
            <input type='email'
                   id='email'
                   name='email'
                   value={data.email}
                   placeholder='Enter your email here'
                   onChange={this.onChange}
                  />
                  {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Button primary>Reset</Button>
        </Form>
      </div>
    )
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
