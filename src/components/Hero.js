import React from 'react'
import '../Hero1.css'
import img4 from '../images/logo1.png'
// import Example from './Example'
import {Link} from 'react-router-dom'



function Hero() {
    return (
        <div className="hero">
         <div className="hleftside">
           <div className="hinputs">
             <div className="hfind">
                <h1 className="hh1">Find the Perfect<br/>Freelance artist for<br/> your Event </h1>
             </div>
             <div className="hjoin">
                <p1 className="hp1">Join us and Showcase your skills</p1>
             </div>
             <div className="hsearch">
             <input className="hisearch" type="text" placeholder="Singer/Dancers/Anchor......" />
             </div>
             <div className="hwork">
               <ul className="hul">
                
                 <Link to="/register"> <li className="hli1" ><a className="ha1" href="#">Work with us</a></li></Link>
                 <li className="hli2" ><a className="ha2" href="#">Work with us</a></li>
               </ul>
             </div>

           </div>

         </div>

         <div className="hrightside">
              <div className="himg">
              <img className="hlogos" src={img4} alt="" />
              </div>
         </div>
           
        </div>
    )
}

export default Hero
