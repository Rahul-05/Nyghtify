import React from 'react'
import img3 from '../images/logo1.png'
import '../About1.css'
import Footer from './Footer'

function About() {
    return (
        <div className="abw">
            <div className="about">
                <div className="al">
                    <div className="alc">

                        <h1 className="abou">About Us</h1>
                        <p1 className="adsr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p1>

                    </div>
                </div>
                <div className="ar">
                    <div className="arc">
                        <img className="logoa" src={img3} alt="" />


                    </div>

                </div>
            </div>
            <div className="cww">
                <h1 className="cwww">Companies we worked with</h1>
            </div>
            <div className="sbody">
                
                <div class="slidera">
                    <div class="slide-track">
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="200" width="500" alt="" />
                        </div>
                        <div class="slide">
                            <img className="team" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="200" width="500" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About