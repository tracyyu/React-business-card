import React, { Component } from 'react';

// React component for form inputs
class CardInput extends Component {
    render() {
     return(
      <fieldset>
        <input className={this.props.name} classID={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
      </fieldset>
     )
    }
}

export default CardInput;