import React, { Component } from 'react';
import classnames from 'classnames';
import codepenImage from '../../assets/images/codepen.jpg';

class CodePenProfile extends Component {
    render() {
        let activeClass = (this.props.selected === 2 ? 'active' : '');
        let classes = classnames('codepen-card', {active: activeClass});

        return(
            <div className={classes}>
                <div className="social-card">
                    <div className="card-content">
                        <div className="row">
                            <div className="left col">
                                <h2>My Codepen</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                </p>

                                <a href="https://codepen.io/tracyyu93/">Check it out!</a>
                            </div>
                            <div className="right col">
                                <img src={codepenImage} alt="Codepen Profilee"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePenProfile;