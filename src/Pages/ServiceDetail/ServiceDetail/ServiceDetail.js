import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const{serviceId} = useParams()
    return (
        <div>
            <h2>id:{serviceId}</h2>
            <Link to='/checkout'><button>CheckOut</button></Link>
        </div>
    );
};

export default ServiceDetail;