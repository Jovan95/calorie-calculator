import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>HomePage</h1>
    {isAuthenticated ? 
      (<button onClick={ () => logout() }>Logout</button>) :
      (<div><Link to="/login">Login</Link> or <Link to="/singup">Sing Up</Link></div>)
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
