import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FaFacebook} from 'react-icons/fa';
import { BsInstagram , BsYoutube} from "react-icons/bs";





const Footer = () => {
    return (
        <div className = "main-footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <h4>Help </h4>
                        <ul className ="list-unstyled">
                            <li>Instructions</li>
                            <li>Shops address</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className = "col">
                        <h4>Community</h4>
                        <ul className ="list-unstyled">
                            <li>Pictures</li>
                            <li>Blogs</li>
                            <li>...</li>
                        </ul>
                    </div>
                    <div className = "col">
                        <h4>Contact Us </h4>
                        <ul className ="list-unstyled">
                            <li>phone number:</li>
                            <li>address:</li>
                            <li>email:</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                    <div className = "row">
                        <div className = "col-sm">
                            &copy;{new Date().getFullYear()} @EveryoneSizeFashion.com | Create by Group 16 SEPM RMIT VN students ( Sem 1 2022 )
                        </div>
                        <div className = "col-sm">
                        <FaFacebook/> <BsInstagram /> <BsYoutube/>
                        </div>
                        <div className = "col-sm">
                        
                        </div>

                    </div>
                
            </div>
        </div>


    )




    




}

export default Footer;