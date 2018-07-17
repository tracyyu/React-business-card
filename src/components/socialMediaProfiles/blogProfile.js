import React, { Component } from 'react';
import classnames from 'classnames';
import blogImage from '../../assets/images/website.jpg';

class BlogProfile extends Component {
    render() {
        let activeClass = (this.props.selected === 4 ? 'active' : '');
        let classes = classnames('blog-card', {active: activeClass});

        return(
            <div className={classes}>
                <div className="social-card">
                    <div className="card-content">
                        <div className="row">
                            <div className="left col">
                                <h2>My Blog</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                </p>

                                <a href="http://glimpseofwanderlust.com/">Check it out!</a>
                            </div>
                            <div className="right col">
                                <img src={blogImage} alt="Blog Profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogProfile;