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
      gender: '',
      dailyIntake: '',
      activeTab: 'about'
    }
    this.calIntake = this.calIntake.bind(this);
  }

  componentDidMount() {
    this.props.getData(this.props.match.params.userID).then(data => this.setState({ ...data }));

  }

  calIntake () {
    if(this.state.gender === 'male') {
      if(this.state.age < 18) {
        const cal = this.state.weight * 17.5 + 651;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 17 && this.state.age < 31) {
        const cal = this.state.weight * 15.3 + 679;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 29 && this.state.age < 61) {
        const cal = this.state.weight * 11.6 + 879;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 60) {
        const cal = this.state.weight * 13.5 + 487;
        this.setState({dailyIntake: cal });
      }
    }else if(this.state.gender === 'female') {
      if(this.state.age < 18) {
        const cal = this.state.weight * 12.2 + 746;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 17 && this.state.age < 31) {
        const cal = this.state.weight * 14.7 + 496;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 29 && this.state.age < 61) {
        const cal = this.state.weight * 8.7 + 829;
        this.setState({dailyIntake: cal });
      }else if(this.state.age > 60) {
        const cal = this.state.weight * 10.5 + 596;
        this.setState({dailyIntake: cal });
      }
    }
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
                    <div className="page-area">
                      <h1>Your daily intake:</h1>
                    <button onClick={this.calIntake}>Calculate</button>
                      <h1>{this.state.dailyIntake+"cal"}</h1>
                    </div>
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

ProfilePage.propTypes = {
  getData: PropTypes.func.isRequired
}


export default connect(null,{ getData })(ProfilePage);
