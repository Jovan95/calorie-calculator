import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { confirm } from '../../actions/auth';
import { connect } from 'react-redux';
import './ConfirmationPage.scss';

class ConfirmationPage extends React.Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token)
    .then(() => this.setState({loading: false, success: true}))
    .catch(() => this.setState({ loading: false, success: false}))
  }

  render() {
    const { loading, success } = this.state;
    return(
      <div>
        {loading && (
        <div className="confirmationDiv">
        <Message icon>
          <Icon name="circle notched" loading />
          <Message.Header>Validating your email</Message.Header>
        </Message>
        </div>
        )}

        {!loading && success &&
          <div className="confirmationDiv">
          <Message icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>Thank you. Your account has been verified.</Message.Header>
              <Link to='/dashboard'>You can start losing weight now! Start now >></Link>
            </Message.Content>
          </Message>
        </div>
        }

        {!loading && !success &&
          <div className="confirmationDiv">
          <Message negative icon>
            <Icon name="warning sing" />
            <Message.Content>
              <Message.Header>Ooops, invalid token!</Message.Header>
            </Message.Content>
          </Message>
         </div>
        }
      </div>
    )
  }
}

ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(null, { confirm })(ConfirmationPage);
