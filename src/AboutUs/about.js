import React from "react";
import './about.css';
import logo from './us.jpg';
import logoo from './us1.jpg';
import logooo from './us2.jpg';
import pic from './a.jpg';
import pic1 from './b.jpg';
import pic2 from './c.jpg';

const About =() =>{
    return(
        
            <div>
            <div className='about-us'>
            <h1>About Us</h1>
            <div className='about'>
                <h2 className='text pt-5'>WELCOME TO MEDICSCAPE</h2>
                <p className='text'>We provide you the best services with the experts. Our center is establised in 2009 and still standing in the society with proud.You can also find us in social media like <strong>Facebook, Twitter, Instragram</strong></p>
            </div>
            </div>
            <div className='p-5'>
                <h1 className='mb-5'>Our Gallery</h1>
                <div className='d-flex gallery'>
                   <div className='item'>
                      <img src={logo}/> 
                   </div>
                   <div className='item'>
                      <img src={logoo}/> 
                   </div>
                   <div className='item'>
                      <img src={logooo}/> 
                   </div>
                </div>
                <div className='d-flex gallery-2'>
                <div className='item'>
                    <img src={pic}/>
                </div>
                <div className='item'>
                    <img src={pic1}/>
                </div>
                <div className='item'>
                    <img src={pic2}/>
                </div>
                </div>
            </div>
            </div>
    );
};
export default About;