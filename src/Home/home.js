import React, { useEffect, useState } from "react";
import './home.css';
import logo from './pic1.jpg';
import loGo from './pic2.jpg';
import Logo from './pic3.jpg';
import { Carousel } from "react-bootstrap";
import Featured from "../Featured/featured-service";

const Home= () =>{

    const [features,setFeatures] = useState([]);
    useEffect(() =>{
        fetch('./Featured.JSON')
        .then(res => res.json()
        .then(data => setFeatures(data)));
    },[])
    return(
        <div className='home'>
            <div className='home-banner'>
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={logo}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>We are here to help you!</h1>
                <p>Ours is one of the best medical that will provide you health care</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={loGo}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1>We are here to help you!</h1>
                <p>We provide you expert doctors and devloped medcial tools for your treatment</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Logo}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>We are here to help you!</h1>
                <p>Our research field is enriched for your betterment</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>
            <div className='feature ps-5'>
                <h2 className='p-5'>Services We Give You</h2>
                <div className='each-service' style={{}}>
                {
                    features.map( sixService => <Featured
                    key={features.id}
                    featuring={sixService}></Featured>)
                }
                </div>
            </div>
            <div className='totals d-flex'>
                <div className='total'>
                    <h3 className='text-home'>Total Doctors</h3>
                    <p className='text-home'>500</p>
                </div>
                <div className='total'>
                    <h3 className='text-home'>Total Services</h3>
                    <p className='text-home'>9</p>
                </div>
                <div className='total'>
                    <h3 className='text-home'>Total Awards</h3>
                    <p className='text-home'>200</p>
                </div>
            </div>
        </div>
    );
};
export default Home;