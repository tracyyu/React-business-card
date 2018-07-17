import React, { Component } from 'react';
import profileImage from '../assets/images/portrait.jpg';

// React component for the frontside of the card
class CardFront extends Component {
    render() {
        return(
        <div className='card-side side-front'>
            <div className='container-fluid'>
                <div className="diagonal-animation">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>
                <div className='row'>
                    <div className="side-front-content">
                        <div className="title">
                            <h1>TRACY YU.</h1>
                            <hr />
                            <p>Web. Front-End. Design.</p>
                        </div>

                        <div className="blurb">
                            <p>
                                Los Angeles Based
                            </p>
                            <p>
                                "Turning ideas into scalable and empowering experiences that solve real life problems."
                            </p>
                        </div>
                    </div>

                    {/*
                        <div className='col-xs-6'>
                            <img src={profileImage} alt="Profile"/>
                        </div>
            
                        <div className='col-xs-6 side-front-content'>
                            <h2>Los Angeles based</h2>
                    
                            <h1>Front-End Developer</h1>
                    
                            <p>Tracy is driven by turning ideas into scalable and empowering experiences that solve real life problems.</p>
                    
                            <p>She is currently looking for opportunities in front-end and web development. </p>
                    
                            <p>Over the past year, she has been focusing on building projects in React, Angular, and NodeJS.</p>                    </div>
                        </div>
                    */}
                </div>
            </div>
        </div>
        )
    }
}

export default CardFront;