import React, { Component } from 'react';

class BlogProfile extends Component {
    render() {
        return(
            <div className="card" classID={this.props.id}>
                <a className="card-toggle">
                    <i><span className={this.props.icon}></span></i>
                </a>
                <div className="card-content">
                    <div className="row">
                        <div className="left col">
                            <h2><strong>{this.props.title}</strong></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper vel massa et ultrices. 
                                Mauris iaculis tempor enim, et fringilla elit convallis congue. Nunc vulputate ante ac mi eleifend faucibus. 
                                Aliquam eleifend porttitor leo, eu feugiat orci cursus ut. In cursus magna id ante posuere facilisis. 
                                Vestibulum rhoncus felis sit amet urna pulvinar rutrum. Donec imperdiet dictum felis id semper. 
                                Duis gravida vel tellus in suscipit. Aenean sollicitudin vel diam vitae suscipit. 
                                Donec tempus, eros eget luctus consequat, nibh nibh accumsan urna, et porttitor arcu lectus vitae libero. 
                                Vestibulum sodales mollis mattis.
                            </p>
                            <a href={this.props.link}>hkh</a>
                        </div>
                        <div className="right col">
                            <img src="" alt={this.props.alt}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogProfile;