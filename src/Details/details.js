import React from "react";
import { useParams } from "react-router";
import './details.css';

 const Details = () =>{
     const {serviceId} = useParams();

     return (
         <div className='details'>
             <h1>Details: {serviceId}</h1>
             <p>this is it</p>
         </div>
     );
 };
 export default Details;