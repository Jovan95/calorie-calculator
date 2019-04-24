import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from "../messages/InlineError";

class SingupForm extends React.Component {
  state={
    data:{
      email: '',
      password:''
    },
    loading: false,
    errors: {}
  }

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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email!";
    if (!data.password) errors.password = "Can't be blank!";
    return errors;
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name] : e.target.value}
    })


  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  render() {
    const { data, loading, errors } = this.state;

    return (
      <Form loading={loading} onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@example.com'
            value={data.email}
            onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Create password'
            value={data.password}
            onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
        <Button primary>Sing Up</Button>
      </Form>
    );
  }
};

SingupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SingupForm;
