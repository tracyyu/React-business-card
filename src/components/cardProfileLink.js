import React, { Component } from 'react';
import classnames from 'classnames';

// React component for social profile links
class CardProfileLink extends Component {

    render() {
        let activeClass = (this.props.selected === this.props.index ? 'active' : '');
        let classes = classnames('card-toggle', {active: activeClass});

        return(
            <li className={this.props.socialMedia} onClick={() => this.props.handleClick(this.props.index)}>
                <div className={classes}>
                    <p>{this.props.caption}</p>
                    <div className="icon">
                        <i><span className={'fa fa-'+ this.props.socialMedia +'  fa-2x'}></span></i>
                    </div>
                </div>
            </li>
        );
    }
}

export default CardProfileLink;