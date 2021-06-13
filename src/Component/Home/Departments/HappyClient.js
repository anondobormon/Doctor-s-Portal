import { faBed, faProcedures, faSmile, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const data = [
    {
        name: 'Happy Patients',
        count: 3000,
        icon: faUserMd
    },
    {
        name: 'Experienced Doctors',
        count: 180,
        icon: faSmile
    },
    {
        name: 'Successful Operations',
        count: 150,
        icon: faProcedures
    },
    {
        name: 'Numbers of Beds',
        count: 2800,
        icon: faBed
    }
]

const HappyClient = () => {
    return (
        <div className='happy-client'>
            <div className="happy">
                <div className="row">
                    {
                        data.map(client =>
                            <div className="col-md-3">
                                <div className="count-up">
                                    <FontAwesomeIcon className='icon' icon={client.icon} /><br />
                                    <CountUp style={{ fontSize: '50px', fontWeight: '700' }} end={client.count} duration={5} />
                                    <p>{client.name} </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HappyClient;