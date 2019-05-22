import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header/Header';
import "./ProfilePage.scss";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      lastName:'',
      age:0,
      height:0,
      weight:0,
      gender:''
    }
  }

  render () {
    return(
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-content">
            <Header />
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    )
  }
}


export default ProfilePage;
