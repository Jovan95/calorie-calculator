import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './HomePage.css';

const HomePage = ({ isAuthenticated, logout }) => (
  <div className="text-center">
    <h1>Welcome to Calore Calculator!</h1>
    {isAuthenticated ?
      (<button className="hpButton" onClick={ () => logout() }>Logout</button>) :
      (<div><Link className="linkHp" to="/login">Login</Link> or <Link className="linkHp" to="/singup">Sing Up</Link></div>)
    }
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function  mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout })(HomePage);
