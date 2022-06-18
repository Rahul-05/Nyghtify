import React, { Component, useState } from 'react'
import img1 from '../images/logo1.png'
import '../Navbar1.css'
import {Link} from 'react-router-dom'





function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (

        <div className="Navbar">

            <div className="leftSide">
               
               
                <div className="nbrand">
                <a id="nlogo" href="/venues"> <img className="logos" src={img1} alt="" /></a>
                </div>
                <div className="nmoto">
                    
                        <h1 className="nbrandname">Nyghtify</h1>
                        <p className="nbrandmoto">Vivify your Nights</p>
                        
                    
                   
                        
                   
                </div>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
              
                    {/* <a href="/home">Sign in</a>
                    <a href="/explorenights">Gallery</a>
                   
                    <a href="/aboutus">About us</a>
                    <a href="/contactus">Contact us</a>  */}
                     <Link to="/"> <a >Home</a></Link>
                   <Link to="/signin"><a >Sign in</a></Link>
                   <Link to="/gallery"> <a >Gallery</a></Link>
                   <Link to="/about"> <a >About Us</a></Link>
                   <Link to="/contact"> <a >Contact</a></Link>
                  
                </div>
                <button onClick={() => setShowLinks(!showLinks)}><i className="material-icons">menu</i></button>
            </div>
        </div>

    )
}

export default Navbar


// <div className="logo">
// <img src={img1} alt="" />
// </div>