import React, { Component } from 'react';

// React component for textarea
class CardTextarea extends Component {
    render() {
        return(
        <fieldset>
            <textarea className={this.props.name} classID={this.props.id} placeholder={this.props.placeholder} required ></textarea>
        </fieldset>
        )
    }
}
export default CardTextarea;