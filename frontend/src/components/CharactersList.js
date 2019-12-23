import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CharactersList.css';
import Avatar from './Avatar';

class CharactersListItem extends React.Component {
  render() {
    return (
      <div className="CharactersListItem">
        <Avatar
          className="CharactersListItem__avatar"
          image={this.props.character.image}
        />

        <div>
          <strong>
            {this.props.character.name}
          </strong>
          <br />{this.props.character.status}
          <br />{this.props.character.species}
          <br />{this.props.character.gender}
        </div>
      </div>
    );
  }
}

function useSearchCharacters(characters) {
  const [query, setQuery] = React.useState('');
  const [filteredCharacters, setFilteredCharacters] = React.useState(characters);

  React.useMemo(() => {
    const result = characters.filter(character => {
      return `${character.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredCharacters(result);
  }, [characters, query]);

  return { query, setQuery, filteredCharacters };
}

function CharactersList(props) {
  const characters = props.characters;

  const { query, setQuery, filteredCharacters } = useSearchCharacters(characters);

  if (filteredCharacters.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Characters</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No characters were found</h3>
        <Link className="btn btn-primary" to="/characters/new">
          Create new character
        </Link>
      </div>
    );
  }

  return (
    <div className="CharactersList">
      <div className="form-group">
        <label>Filter Characters</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredCharacters.map(character => {
          return (
            <li key={character.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/characters/${character.id}`}
              >
                <CharactersListItem character={character} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharactersList;
