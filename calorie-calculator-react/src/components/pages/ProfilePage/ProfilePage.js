import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header/Header';
import "./ProfilePage.scss";
import male from "../../../assets/male.png";
import female from "../../../assets/female.png";
import { getData } from '../../../actions/profile';
import { connect } from 'react-redux';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      lastName:'',
      age:0,
      height:0,
      weight:0,
      gender:'',
      activeTab: 'about'
    }
  }

  componentDidMount() {
    this.props.getData(this.props.match.params.userID).then(data => this.setState({ ...data }));
  }

  onClick = (e) => {
    this.setState({
      ...this.state,
      activeTab: e.target.value
    })
  }

  render () {
    const { activeTab } = this.state;
    return(
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-content">
            <Header />
          <div className="profile-flex">
            <div className="profile-nav">
              <button value="about" onClick={this.onClick} className="nav-btn">About</button>
              <button value="intake" onClick={this.onClick} className="nav-btn">Daily Intake</button>
            </div>
                {
                  activeTab === 'about' &&
                  <div className="page-content">
                    <div className="about-img-section">
                      {this.state.gender === "male" ?
                        <img className="about-img" src={male} alt="male"/>
                         :
                        <img className="about-img" src={female} alt="female"/>
                      }
                    </div>
                    <div className="about">
                      <ul className="about-list">
                        <li className="list-item">Name: {this.state.name}</li>
                        <li className="list-item">Last Name: {this.state.lastName}</li>
                        <li className="list-item">Age: {this.state.age}yo</li>
                        <li className="list-item">Height: {this.state.height}cm</li>
                        <li className="list-item">Weight: {this.state.weight}kg</li>
                        <li className="list-item">Gender: {this.state.gender}</li>
                      </ul>
                    </div>
                  </div>
                }
                {
                  activeTab === 'intake' &&
                  <div className="page-content">
                    intake
                  </div>
                }
            </div>
          </div>
          <div className="overlay"></div>
      </div>
    </div>
    )
  }
}


export default connect(null,{ getData })(ProfilePage);
