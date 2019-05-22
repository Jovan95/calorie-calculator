import React from 'react';
import Header from '../../common/Header/Header'
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = ({ isAuthenticated, logout }) => (
  <div className="home-page text-center">
    <div className="hero-section">
      <div className="content">
        <Header></Header>
        <div className="hero-content">
          <div className="hero-title">Welcome to <br/>Calorie Calculator</div>
        <Link className="button large main" to="/signup">Create your Account</Link>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
    {/* <section className="container">
      <div className="text">
        When the word <span>"calorie"</span> is used in nutrition settings,
         by dieters or simply by consumers who are talking about food,
          they are usually using a casual definition of calorie.
           But they are actually referring to <span>kilocalories</span>, which is what you see on nutrition labels.
           This is how the two terms are different:
           <ul>
              <li>The definition of <span>calorie (cal)</span>, or small calorie,
                 is the amount of heat required to raise the temperature of <span>1 gram</span> of water by <span>1 degree Celcius</span>.
              </li>
              <li>The definition of <span>kilocalories (kcal)</span>,
                or large calorie, is the amount of heat needed to raise the temperature of <span>1 kilogram</span> of water
                by <span>1 degree Celcius</span>. A kilocalorie is equivalent to 1000 small calories. Kilocalories are sometimes
                called "food calories" or simply shortened to "calories" when referring to the energy in food.
              </li>
           </ul>
           <span>In order to lose weight you have to keep close eye on your calorie intake throughout the week, join us and start losing weght now!</span>
      </div>
    </section> */}
  </div>
);

export default HomePage;
