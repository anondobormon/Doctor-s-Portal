import React from 'react';
import call from '../../../Image/emergency-call.png'

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className="contact">
                <div className="contact-logo">
                    <img src={call} alt="" />
                    <div className="contact-details">
                        <h3>Heath Care Center</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. +880124543</p>
                    </div>
                </div>
                <button className="btn btn-light">Contact US</button>
            </div>
        </div>
    );
};

export default Contact;