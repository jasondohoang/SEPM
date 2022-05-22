import React from 'react';
import './Footer.css';
import { FaFacebookSquare,FaInstagram,FaYoutube } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/Logo.png';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                <div className="col-3">
                    <img src ={logo} style ={{width: "250px" ,height :"250px"}}  /> 
                </div>

                    <div className="col-3">
                        <h4>Help</h4>
                        <ul className ="list-unstyled">
                            <li>Technical Support</li>
                            <li>Report Bugs</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <h4>Community</h4>
                        <ul className ="list-unstyled">
                            <li>Pictures of models</li>
                            <li>Our Partners</li>
                            <li>News</li>
                        </ul>

                    </div>

                    <div className="col-3">
                    <h4>About us</h4>
                        <ul className ="list-unstyled">
                            <li>Phone Number: 0234 344 567 </li>
                            <li>Address: 256 Nguyen Van A District 10 </li>
                            <li>Email: EveryoneSizeFashion@gmail.com</li>
                        </ul>

                    </div>
                </div>
                <hr/>
                <div className = "row">

                    <div className = "col-4">
                        &copy;{new Date().getFullYear()} @everyonesizefashion.com | Design by SEPM Group 16 Team (RMIT Vietnam students)</div>

                    <div className = "col-4"> </div>
                    <div className = "col-4">
                    <h4>Our social media</h4>
                    </div>

                </div>

                <div className ='row'>
                    <div className = "col-8"></div>
                    <div className="col-1">
                    <a href="http://www.facebook.com">  <FaFacebookSquare size={30}/></a>
                    </div>
                    <div className="col-1">
                    <a href="http://www.instagram.com" > <FaInstagram size={30}/></a>
                    </div>
                    <div className="col-1">
                    <a href="http://www.youtube.com">    <FaYoutube size={30}/></a>
                    </div>
                
                </div>
                
            
       
            </div>


        </div>
    )



}

export default Footer;
