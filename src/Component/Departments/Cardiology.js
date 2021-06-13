import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Department.css';
import image from '../../Image/4990224.jpg'
import Navbar from '../Navbar/Navbar';



const Cardiology = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="departmentCard">
                <div className="department">
                    <div className="department-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="department-info">

                    </div>
                </div>
                <div className="departmentDetails">
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam, illo ex, reiciendis corporis culpa neque dolorem nihil quis at, perspiciatis eveniet vero fugit! Consequatur vero aliquam itaque libero autem placeat, fugiat id provident, similique corrupti quaerat delectus iste? Praesentium, nam. Quisquam ea corporis tempore exercitationem quae enim culpa neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est consectetur officia asperiores eaque modi dolores architecto fugiat dignissimos nihil voluptatibus exercitationem eum esse, maiores at quasi. Fuga maiores deserunt ducimus nam aperiam atque ab reiciendis ea voluptatum quam quaerat eos dolor non unde ipsam, amet natus earum, officia delectus. </p>
                </div>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook}/> </li>
                    <li><FontAwesomeIcon icon={faInstagram}/> </li>
                    <li><FontAwesomeIcon icon={faTwitter}/> </li>
                </ul>
            </div>
        </div>
    );
};

export default Cardiology;