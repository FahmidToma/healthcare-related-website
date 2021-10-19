import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
 const Login =()=>{
     return(
         <div>
             <h1>Please Log in</h1>
             <Link to='/login'><Button variant='success'>Log In</Button></Link>
         </div>
     );
 };
 export default Login;