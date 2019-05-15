import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import { Link } from 'react-router-dom';
import './Header.scss'

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <header className="container">
        <div className="logo">CalorieCalculator</div>
        <nav>
          {isAuthenticated ?
            (<button className="logoutBtn" onClick={ () => logout() }>Logout</button>) :
            (<div><Link className="" to="/login">Login</Link></div>)
          }
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function  mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout })(Header);
