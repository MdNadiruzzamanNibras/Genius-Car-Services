import React from 'react';
import './Service.css'
const Service = ({service}) => {
    
    const {name, img , price, description} =service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>The Service:{name}</h3>
            <p>Price:{price}</p>
            <p className='service-description'><small>Description:{description}</small></p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;