import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../assets/logo.png';

class Header extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props;
    return (
      <header className="container">
        <div className="logo-content">
          <img className="logoImg" src={ logo } alt= "logo"/>
          <div className="logo">CalorieCalculator</div>
        </div>
        <nav>
          {isAuthenticated ?
            (
              <div>
              <Link className="nav-link" to='/profile'>Your Profile</Link>
              <button className="logout-btn" onClick={ () => logout() }>logout</button>
              </div>
            )
                 :
            (<div><Link className="nav-link" to="/login">Login</Link></div>)
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
