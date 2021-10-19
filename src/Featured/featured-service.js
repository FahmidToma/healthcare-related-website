import React, { useState } from "react";
import './featured-service.css';
import { Button, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";

 const Featured = (props) =>{
    const {id,name,cover, description,pricing} = props.featuring;
    
     return(
             <div className='six-services'>
             <img src={cover}/>
             <h4 className='pt-3'>{name}</h4>
             <p className='px-5'>{description}</p>
             <Link to={`/details/${id}`}><Button variant="primary">Details</Button></Link>
         </div>
     );
 };
 export default Featured;

