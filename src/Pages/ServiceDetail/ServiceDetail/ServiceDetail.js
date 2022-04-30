import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    const [service] = useServiceDetail(serviceId)
    console.log(serviceId)
    return (
        <div>
            <h2>You service:{service.name}</h2>
            <Link to={`/checkout/${serviceId}`}><button>CheckOut</button></Link>
        </div>
    );
};

export default ServiceDetail;