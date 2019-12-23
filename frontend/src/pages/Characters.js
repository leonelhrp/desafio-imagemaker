import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Characters.css';
import rickAndMortyLogo from '../images/rick-and-morty-logo.png';
import CharactersList from '../components/CharactersList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Characters extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.characters.list();
      this.setState({ loading: false, data: data.results });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Characters">
          <div className="Characters__hero">
            <div className="Characters__container">
              <img
                className="Characters_conf-logo"
                src={rickAndMortyLogo}
                alt="ImageMaker Logo"
                height="250px"
              />
            </div>
          </div>
        </div>

        <div className="Characters__container">
          <div className="Characters__buttons">
            <Link to="#" className="btn btn-primary">
              New Character
            </Link>
          </div>

          <CharactersList characters={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Characters;
