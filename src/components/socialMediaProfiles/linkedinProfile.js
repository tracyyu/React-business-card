import React, { Component } from 'react';
import classnames from 'classnames';
import linkedinImage from '../../assets/images/linkedin.jpg';

class LinkedInProfile extends Component {
    render() {
        let activeClass = ( this.props.selected === 1 ? 'active' : '');
        let classes = classnames('linkedin-card', {active: activeClass});

        return(
            <div className={classes}>
                <div className="social-card">
                    <div className="card-content">
                        <div className="row">
                            <div className="left col">
                                <h2>My LinkedIn</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                </p>

                                <a href="https://www.linkedin.com/in/tracyyu93/">Check it out!</a>
                            </div>
                            <div className="right col">
                                <img src={linkedinImage} alt="Linkedin Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkedInProfile;