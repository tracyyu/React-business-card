import React, { Component } from 'react';
import classnames from 'classnames';
import profileImage from '../../assets/images/profile.jpg';

class WebsiteProfile extends Component {
    render() {
        let activeClass = ( this.props.selected === 0 ? 'active' : '');
        let classes = classnames('website-card', {active: activeClass});
        console.log(this.props.selected);

        return(
            <div className={classes}>
                <div className="social-card" >
                    <div className="card-content">
                        <div className="row">
                            <div className="left col">
                                <h2>Website</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                    Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                    Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                </p> 

                                <a href="https://tracyyu.github.io/">Check it out!</a>
                            </div>
                            <div className="right col">
                                <img src={profileImage} alt="Website Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebsiteProfile;