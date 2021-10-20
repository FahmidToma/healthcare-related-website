import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './notfound.css';

const Notfound =() =>{
    return(
        <div className='notfound'>
            <h1>404</h1>
            <h1>Page not found!</h1>
            <Link to='/home'><Button variant='dark'>Go Back</Button></Link>
        </div>
    );
};
export default Notfound;