import React from 'react'
import '../Register.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Registration1() {
    return (
        <div className="register1main">
            <br />
            <br />
            <br />
            <br />
            <br />
                <div className="Register-2">
                <div class="inputBx">
                    <div class="Register-class-h2">
                        <h2 class="Register-h2">Blank</h2>
                    </div>
                    <div class="Register-class-input">
                        <input class="Register-input" type="file" name="" />
                    </div>
                </div>
                <div class="inputBx">
                    <div class="Register-class-h2">
                        <h2 class="Register-h2">Upload ID Card</h2>
                    </div>
                    <div class="Register-class-input">
                        <input class="Register-input" type="file" name="" />
                    </div>
                </div>
                <div class="inputBx">
                    <div class="Register-class-h2">
                        <h2 class="Register-h2"> Profile Pic</h2>
                    </div>
                    <div class="Register-class-input">
                        <input class="Register-input" type="file" name="" />
                    </div>
                </div>
            </div>


            <div class="inputBx">
                <div class="Register-class-submit">
                    <div class="Register-class-submit-flex">
                        <Link to="/register"><input class="Register-Submit" type="submit" value="Back" name="" /></Link>

                    </div>
                    <div class="Register-class-submit-flex">
                        <input class="Register-Submit" type="submit" value="Next" name="" /></div>
                        
                </div>
            </div>
            <br/>
            <br/>
            <br/>

            <br/>]
            <br/>
            <br/>
            
            
            <Footer />
            </div>
    )
}

export default Registration1
