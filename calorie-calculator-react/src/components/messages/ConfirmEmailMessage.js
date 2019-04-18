import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
  <Message info>
    <Message.Header>Please, verify your email and start losing weight!</Message.Header>
  </Message>
);

export default ConfirmEmailMessage;
