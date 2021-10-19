import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './service.css';

const Service= (props)=>{
    const {name,cover, description,pricing} = props.info;
    return(
        <div className='single-service'>
            <img src={cover}/>
             <h4 className='pt-3'>{name}</h4>
             <p className='px-5'>{description}</p>
             <Link to='/services'><Button variant="primary">Details</Button></Link>
             <Link to='/booking'><Button variant="outline-primary">Book Now</Button></Link>
        </div>
    );
};
export default Service;