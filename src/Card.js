import React, { Component } from 'react';

import CardBack from './components/cardBack';
import CardFront from './components/cardFront';

class Card extends Component {
  render() {
    return(
     <div className='card-container'>
      <div className='card-body'>
       <CardBack />
       <CardFront />
      </div>
     </div>
    );
  }
}

export default Card;
