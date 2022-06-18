import React from 'react'
import img3 from '../images/singer.png'

import '../Info1.css'

function Info() {
    return (
        <div className="iinfo">
          <div className="ileftside">
            <div className="iinputs">
                <h1 className="ih1">A whole world of freelance talent <br/>at your fingertips</h1>
                
                <p1 className="ip1" >The best for every budget<br/> Find high-quality services at every price point. No hourly rates,just project-based pricing.</p1><br/>
                <br/>
                <p1 className="ip1" >The best for every budget<br/> Find high-quality services at every price point. No hourly rates,just project-based pricing.</p1><br/>
                <br/>
                <p1 className="ip1" >The best for every budget<br/> Find high-quality services at every price point. No hourly rates,just project-based pricing.</p1><br/>
                <br/>
                <p1 className="ip1" >The best for every budget<br/> Find high-quality services at every price point. No hourly rates,just project-based pricing.</p1><br/>
      
            </div>
          </div>
          <div className="irightside">
          <div className="iimage">
                    <img className="isingerimage" src={img3} alt="" />


                </div>

          </div>
        </div>
    )
}

export default Info
