import React from 'react';
import { Message } from 'semantic-ui-react';
import { validateToken } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ResetPasswordPage extends React.Component {
  state = {
    loading: true,
    success: false
  }

componentDidMount() {
  this.props.validateToken(this.props.match.params.token)
  .then(() => this.setState({loading: false, success: true}))
  .catch(() => this.setState({loading: false, success: false }))
}


  render() {
    const { loading, success } = this.state;
    return(
      <div>
        {loading && !success && <Message>Validating your token</Message>}
        {!loading && success && <Message>forms</Message>}
        {!loading && !success && <Message>Invalid Token</Message>}

      </div>
    )
  }
}


ResetPasswordPage.propTypes = {
  validateToken: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(null,{ validateToken })(ResetPasswordPage);
