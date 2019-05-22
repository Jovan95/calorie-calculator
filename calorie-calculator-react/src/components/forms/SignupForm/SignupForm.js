import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from "../../messages/InlineError";
import "./SignupForm.scss"

class SignupForm extends React.Component {
  state={
    data:{
      email: '',
      password:'',
      name: '',
      lastName:'',
      gender:'',
      age: 0,
      height: 0,
      weight: 0
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
    if (!data.name) errors.name = "Can't be blank!";
    if (!data.lastName) errors.lastName = "Can't be blank!";
    if (!data.gender) errors.password = "Please select your gender!";
    if (!data.age) errors.age = "Please enter your age!";
    if (!data.height) errors.height = "Please enter your height!";
    if (!data.weight) errors.weight = "Please enter your weight!";
    return errors;
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name] : e.target.value}
    })



  render() {
    const { data, loading, errors } = this.state;

    return (
      <Form  loading={loading} onSubmit={this.onSubmit}>
        <Form.Field  error={!!errors.email}>
          <label className="form-label" htmlFor='email'>Email:</label>
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
          <label className="form-label" htmlFor='password'>Password:</label>
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
          <Form.Field>
            <div className="flex-container">
              <div className="flex-content">
                <label className="flex-item" htmlFor="name" >Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  placeholder="Your name"
                  id="name"
                  value={data.name}
                />
              {errors.name && <InlineError text={errors.name} />}
              </div>
              <div className="flex-content">
                <label className="flex-item" htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.onChange}
                  placeholder="Your last name"
                  id="lastName"
                  value={data.lastName}
                />
              {errors.lastName && <InlineError text={errors.lastName} />}
            </div>
          </div>
          </Form.Field>
          <Form.Field>
            <label className="form-label" htmlFor="gender">Gender:</label>
          <div className="radio-container">
          <div className="radio-button">
                <p className="radio-name">Male</p>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={this.onChange}
                      />
                  </div>
              </div>

              <div className="radio-button">
                <p className="radio-name">Female</p>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={this.onChange}
                      />
                  </div>
              </div>
              {errors.gender && <InlineError text={errors.gender} />}
          </div>
          </Form.Field>
          <Form.Field>
          <div className="number-container">
            <div className="number-item">
            <label className="number-label" htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={data.age}
                onChange={this.onChange}
                min="14"
              />
            {errors.age && <InlineError text={errors.age} />}
          </div>
          <div className="number-item">
            <label className="number-label" htmlFor="height">Height:(cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={data.height}
                  onChange={this.onChange}
                  min="60"
                  max="240"
                />
              {errors.height && <InlineError text={errors.height} />}
            </div>
                <div className="number-item">
              <label className="number-label" htmlFor="weight">Weight:(kg)</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={data.weight}
                    onChange={this.onChange}
                    min="30"
                    max="300"
                  />
                {errors.weight && <InlineError text={errors.weight} />}
              </div>
            </div>
          </Form.Field>
        <div className="signupBtn">
        <button className="button large main">Sign Up</button>
        </div>
      </Form>
    );
  }
};

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
