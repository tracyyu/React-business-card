import React, { Component } from 'react';

import Contact from './Contact';
import CardProfileLinks from './cardProfileLinks';

// React component for the backside of the card
class CardBack extends Component {
    state = {
        contactActive : false,
        profileLinkActive : false,
        profileLinks : [
            {
                'profile' : 'https://tracyyu.github.io/',
                'icon' : 'user'
            }, {
                'linkedin' : 'https://www.linkedin.com/in/tracyyu93/',
                'icon' : 'linkedin'
            }, {
                'codepen' : 'https://codepen.io/tracyyu93/',
                'icon' : 'codepen'
            }, {
                'github' : 'https://github.com/tracyyu',
                'icon' : 'github'
            }, {
                'blog' : 'http://glimpseofwanderlust.com/',
                'icon' : 'pencil-square-o'
            }
        ]
    }

    onShowContactChange = () => {
        this.setState((prevState, props) => ({ 
            contactActive : !prevState.contactActive 
        }));
    }

    render() {
        return(
            <div className='card-side side-back'>
                <div className="contact" onClick={this.onShowContactChange}>Let's get in touch!</div>
                <Contact close={this.onShowContactChange} active={this.state.contactActive}/>
                <CardProfileLinks profileLinks={this.state.profileLinks} />
            </div>
        );
    }
}

export default CardBack;