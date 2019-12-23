import React from 'react';

import CharacterDetails from './CharacterDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class CharacterDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.characters.read(this.props.match.params.characterId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDeleteCharacter = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.characters.remove(this.props.match.params.characterId);
      this.setState({ loading: false });

      this.props.history.push('/characters');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <CharacterDetails
        character={this.state.data}
      />
    );
  }
}

export default CharacterDetailsContainer;
