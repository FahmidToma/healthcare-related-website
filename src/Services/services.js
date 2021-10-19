import React, { useEffect, useState } from "react";
import Service from "../Service/service";
import './services.css';

const Services = () =>{
    const  [services,setServices] = useState([]);
    useEffect(() =>{
        fetch('./Services.JSON')
        .then(res => res.json()
        .then(data => setServices(data)));
    },[])
    return(
        <div className='show-service mb-5'>
            <div className='mt-5 p-5'>
            <h1>Our Services</h1>
            <p>Feel free to pick your service!</p>
            </div>
            <div className='all-services  ps-5'>
            {
                services.map( info => <Service
                key={services.id}
                info={info}>
                </Service>)
            }
        </div>
        </div>
    );
};
export default Services;