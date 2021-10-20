import React from "react";
import { Button } from "react-bootstrap";
import './login.css';
import useAuth from "../hooks/useAuth";

 const Login =()=>{
     const {signInGoogle} = useAuth();

     return(
         <div className='log-in'>
             <h1>Please Log in</h1>
             <button onClick={signInGoogle} className='btn btn-warning'>Log In</button>
         </div>
     );
 };
 export default Login;