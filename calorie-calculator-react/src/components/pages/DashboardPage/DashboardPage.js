import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from "../../messages/ConfirmEmailMessage";
import './DashboardPage.scss';

class DashboardPage extends React.Component {
  state ={}

  render() {
    return (
      <div>
       {!this.props.isConfirmed && <div className="confirmedMsg"><ConfirmEmailMessage /></div>}
      </div>
    )
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return {
    isConfirmed: !!state.user.confirmed
  }
};

export default connect(mapStateToProps)(DashboardPage);
