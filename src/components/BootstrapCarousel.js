import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../images/carousel1.png';
import carousel2 from '../images/carousel2.png';
import carousel3 from '../images/carousel3.png';
import carousel4 from '../images/carousel4.png';
import carousel5 from '../images/carousel5.png';
import carousel6 from '../images/carousel6.png';
import './BootstrapCarousel.css';


export default function BootstrapCarousel() {


    return (

        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <img src={carousel1}
                                style={{ "height": 500, "width": 350 }}
                                alt="First slide"
                                className="d-block" />
                        </div>

                        <div className='col-md-3'>
                            <img src={carousel4}
                                style={{ "height": 500, "width": 350 }}
                                alt="First slide"
                                className="d-block carousel-2items" />

                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className="container2">
                            <h3>Newest style</h3>
                            <p></p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>

                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <img
                                className="d-block"
                                style={{ "height": 500, "width": 350 }}
                                src={carousel2}
                                alt="Second slide"
                            />
                        </div>
                        <div className='col-md-3'>
                        <img src={carousel5}
                                style={{ "height": 500, "width": 350 }}
                                alt="First slide"
                                className="d-block carousel-2items" />

                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className="container2">
                            <h3>Most trending</h3>

                            <p></p></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <img
                                className="d-block"
                                style={{ "height": 500, "width": 350 }}
                                src={carousel3}
                                alt="Third slide"
                            />
                        </div>
                        <div className='col-md-3'>
                        <img src={carousel6}
                                style={{ "height": 500, "width": 350 }}
                                alt="First slide"
                                className="d-block carousel-2items" />

                        </div>
                    </div>
                    <Carousel.Caption>
                        <div className="container2">
                            <h3>Comes with different sizes</h3>
                            <p></p></div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )


}
