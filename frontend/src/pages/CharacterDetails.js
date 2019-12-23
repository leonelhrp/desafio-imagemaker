import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CharacterDetails.css';
import confLogo from '../images/rick-and-morty-logo.png';
import Character from '../components/Character';

function CharacterDetails(props) {
  const character = props.character;

  return (
    <div>
      <div className="CharacterDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 CharacterDetails__hero-attendant-name">
              <h1>
                {character.firstName} {character.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Character
              firstName={character.firstName}
              lastName={character.lastName}
              email={character.email}
              twitter={character.twitter}
              jobTitle={character.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/characters/${character.id}/edit`}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
