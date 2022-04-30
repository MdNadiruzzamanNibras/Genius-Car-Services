import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    
    const {_id, name, img , price, description} =service

    const navigate = useNavigate()
    const navigateToService = id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>The Service:{name}</h3>
            <p>Price:{price}</p>
            <p className='service-description'><small>Description:{description}</small></p>
            <button onClick={()=>navigateToService(_id)}>Book:{name}</button>
        </div>
    );
};

export default Service;