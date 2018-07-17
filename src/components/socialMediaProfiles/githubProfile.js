import React, { Component } from 'react';
import classnames from 'classnames';
import githubImage from '../../assets/images/github.jpg';

class GithubProfile extends Component {
    render() {
        let activeClass = (this.props.selected === 3 ? 'active' : '');
        let classes = classnames('github-card', {active: activeClass});

        return(
            <div className={classes}>
                <div className="social-card">
                    <div className="card-content">
                        <div className="row">
                            <div className="left col">
                                <h2>My Github Profile</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                </p>

                                <a href="ttps://github.com/tracyyu">Check it out!</a>
                            </div>
                            <div className="right col">
                                <img src={githubImage} alt="Github Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GithubProfile;