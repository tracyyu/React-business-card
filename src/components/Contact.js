import React, { Component } from 'react';
import classnames from 'classnames';

import CardInput from './cardInput';
import CardTextarea from './cardTextarea';
import CardBtn from './cardBtn';

class Contact extends Component {
    render() {
        let classes = classnames('contact-form', {active: this.props.active});

        return(
            <div className={classes}>
                <button className="close" onClick={this.props.close}><i className="fa fa-times"></i></button>
                <form formAction='' className='card-form'>
                    <div className="row">
                        <div className="col-xs-7">
                            <div className='row'>
                                <div className='col-xs-6'>
                                    <CardInput className='contactFirstName' classID='contactFirstName' type='text' placeholder='Your first name' />
                                </div>
                        
                                <div className='col-xs-6'>
                                    <CardInput className='contactLastName' classID='contactLastName' type='text' placeholder='Your last name' />
                                </div>
                            </div>
                        
                            <div className='row'>
                                <div className='col-xs-6'>
                                    <CardInput className='contactEmail' classID='contactEmail' type='email' placeholder='Your email address' />
                                </div>
                        
                                <div className='col-xs-6'>
                                    <CardInput className='contactSubject' classID='contactSubject' type='text' placeholder='Subject' />
                                </div>
                            </div>
                        
                            <CardTextarea className='contactMessage' classID='contactMessage' placeholder='Your message' />
                        </div>
                        <div className="col-xs-5">
                            <div className="contact-info">
                                <h5>My Contact Information</h5>
                                <p>Phone Number: +1-(234)-567-8901</p>
                                <p>Email: test@example.com</p>
                                <p>Address:</p>
                                <p>123 First Street</p>
                                <p>Los Angeles, CA 90024</p>
                            </div>
                        </div>
                    </div>
                     
                    <hr />
                    <CardBtn className='btn btn-primary' type='submit' value='Send message' />
                </form>
            </div>
        );
    }
 }

 export default Contact;
