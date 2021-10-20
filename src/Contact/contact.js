import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './contact.css';

 const Contact =  () =>{
     return(
         <div className='contact'>
             <h1 className='contact-text'>CONTACT US!</h1>
             <p className='para'>We can relay on us whenever you need us. For our improvement reach us and leave your comment.</p>
             <Link to='*'><Button variant="outline-light">Visit Us</Button></Link>
             <div className='connect'>
                 <div className='infos'>
                     <h3>Email:</h3>
                     <p>abc@gmail.com</p>
                 </div>
                 <div className='infos'>
                     <h3>Mobile:</h3>
                     <p>01712345678</p>
                 </div>
                 <div className='infos'>
                     <h3>Location:</h3>
                     <p>Dhanmondi 32,Dhaka</p>
                 </div>
             </div>
         </div>
     );
 };
export default Contact;