import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import rickAndMortyLogoImage from '../images/rick-and-morty-logo.png';
import rickAndMortyImage from '../images/rick-and-morty-home.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={rickAndMortyLogoImage}
                alt="Rick And Morty Logo"
                className="img-fluid mb-2"
              />

              <h1>Rick And Morty Management System</h1>
              <Link className="btn btn-primary" to="/characters">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={rickAndMortyImage}
                alt="rickAndMortyLogoImage"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
