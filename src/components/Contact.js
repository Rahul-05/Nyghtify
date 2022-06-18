import React from 'react'
import img3 from '../images/logo1.png'
import '../Contact1.css'
import Footer from './Footer'

function Contact() {
    return (
        <div className="App">
        <div className="contact">
            <div className="cl">
                <div className="clc">

                    <h1 className="cont">Contact Us</h1>
                    <div className="caddr">
                        <div className="cmain">
                            <h2 className="ch2">Main office:</h2>
                            <p1 className="cp2">The Circle - Huda City Centre  3rd - 5th floor,
                                Huda City Centre Metro Station,
                                Gurugram,
                                Haryana 122002</p1>
                        </div>
                        <div className="cmail">
                            <h2 className="ch2">Email:</h2>
                            <p1 className="cp2">contact@nyghtify.com</p1>
                        </div>
                        
                            <div class="social-menu">
                                <h2 className="ch2">Social Media</h2>
                                <ul className="cul">
                                    <li className="cli"><a href=""><i class="fa fa-facebook"></i></a></li>
                                    <li className="cli"><a href=""><i class="fa fa-twitter"></i></a></li>
                                    <li className="cli"><a href=""><i class="fa fa-instagram"></i></a></li>
                                    <li className="cli"><a href=""><i class="fa fa-youtube"></i></a></li>
                                    <li className="cli"><a href=""><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        

                    </div>

                </div>
            </div>
            <div className="cr">
                <div className="crc">
                    <img className="logoc" src={img3} alt="" />


                </div>

            </div>
            
        </div>
        <Footer />
        </div>


    )
}

export default Contact