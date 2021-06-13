import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCrutch, faFlask, faHeartbeat, faTooth, faUserMd, faXRay } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Cardiology',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faHeartbeat
    },
    {
        name: 'Neurology',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faBrain
    },
    {
        name: 'Orthopedics',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faCrutch
    },
    {
        name: 'Radiology',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faXRay
    },
    {
        name: 'Surgery',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faUserMd
    },
    {
        name: 'Urology',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faFlask
    },
    {
        name: 'Psychosocial',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faBrain
    },
    {
        name: 'Dental',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!',
        icon: faTooth
    },
]

const Departments = () => {
    return (
        <div className='main-de'>
            <div className="department">
                <div className="sub-department">
                    <div className="department-details">
                        <h1>Our Department</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia quae asperiores doloribus facere unde vero impedit, cum veniam repellendus!</p>
                    </div>
                    <div className="all-department">
                        <div className="row">
                            {
                                data.map(service =>
                                    <div className="col-md-3 col-lg-3 col-department">
                                        <div className="icon-section">
                                            <FontAwesomeIcon className='icon' icon={service.icon} />
                                        </div>
                                        <div className="de-details">
                                            <h3>{service.name}</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Departments;