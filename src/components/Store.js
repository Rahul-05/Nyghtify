import React from 'react'
import img2 from '../images/mock.png'
import img5 from '../images/play.png'
import img6 from '../images/app.png'
import '../Store1.css'

function Store() {
    return (
        <div className="dd">
            <div className="ml">
                <div className="ddt">
                <h1 className="gt">Get the Nyghtify App</h1>
                <p1 className="bt">Available on App Store and Google Play-Store</p1>
                <div className="dow">
                <img className="dsds" src={img5} alt="" />
                <img className="dsds" src={img6} alt="" />

                </div>
                </div>
            </div>

            <div className="mr">
            <img className="mockup" src={img2} alt="" />

            </div>
        </div>
    )
}

export default Store
