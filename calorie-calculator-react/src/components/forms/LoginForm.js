import React from 'react';
import { Form,Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
    state = {
      data: {
        email: '',
        password: ''
      },
      loding: false,
      errors: {}
    };

    onChange = e =>
     this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value]}
      });

    onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({ errors });
    };

    validate = data => {
      const errors = {};
      if (!data.password) errors.password = "Can't be empty!";
      return errors;
    };

    render() {
      const { data } = this.state;
      return (
        <Form onSubmit = {this.onSubmit}>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@example/com'
              value={data.email}
              onChange={this.onChange}
              />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Email</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='password'
              value={data.password}
              onChange={this.onChange}
              />
          </Form.Field>
          <Button primary>Login</Button>
        </Form>
    )
  }
}

export default LoginForm;
