import React from 'react';

import './styles/Character.css';
import confLogo from '../images/character-header.svg';
import Avatar from './Avatar';

class Character extends React.Component {
  render() {
    return (
      <div className="Character">
        <div className="Character__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Character__section-name">
          <Avatar className="Character__avatar" image={this.props.image} />
          <h1>
            {this.props.name} <br />
          </h1>
        </div>

        <div className="Character__section-info">
          <h3>{this.props.status}</h3>
          <div>{this.props.species}</div>
          <div>{this.props.type}</div>
          <div>{this.props.gender}</div>
        </div>

        <div className="Character__footer">#rickAndMorty</div>
      </div>
    );
  }
}

export default Character;
