import React, { Component } from 'react';

import Aux from '../Aux';
import CardProfileLink from './cardProfileLink';
import BlogProfile from './socialMediaProfiles/blogProfile';
import LinkedInProfile from './socialMediaProfiles/linkedinProfile';
import CodePenProfile from './socialMediaProfiles/codepenProfile';
import GitHubProfile from './socialMediaProfiles/githubProfile';
import WebsiteProfile from './socialMediaProfiles/websiteProfile';

// React component for social profile links
class CardProfileLinks extends Component {
    state = {
        selected: 0
    }

    handleClick = (index, event) => {
        this.setState({ 
            selected: index
        });
    }

    render() {

        const linksList = this.props.profileLinks.map((link, index) => 
            <CardProfileLink 
                key={index} 
                index={index}
                caption={Object.keys(link)[0]}
                socialMedia={link[Object.keys(link)[1]]}
                selected={this.state.selected}
                handleClick={this.handleClick}
            />
        );
        
        return(
            <Aux>
                <div className='social-links-card'>
                    <ul className='social-links'>
                        {linksList}
                    </ul>
                </div>
                <WebsiteProfile selected={this.state.selected}/>
                <LinkedInProfile selected={this.state.selected}/>
                <CodePenProfile selected={this.state.selected}/>
                <GitHubProfile selected={this.state.selected}/>
                <BlogProfile selected={this.state.selected}/>
            </Aux>
        )
    }
}

export default CardProfileLinks;