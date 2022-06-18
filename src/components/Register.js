import React from 'react'
import '../Register.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'

function Register() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="Register">

<div class="content">
    <h1 class="Register Form">Register Form (page 1)</h1>
    <br />
    <br />
    <div class="acontent">
        <form>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">Full Name</h2>
                </div>
                <div class="Register-class-input">
                    <input class="Register-input" type="text" name="firstname"  required /></div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">Years of Exp</h2>
                </div>
                <div class="Register-class-input">
                <input type="number" id="number" name="amount"  min="1" max="25" required /> <p4>years</p4>
                    
                    </div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">Mobile no.</h2>
                </div>
                <div class="Register-class-input">
                    <input class="Register-input"  type="number" maxlength="10" name="phone"  required />
                    {/* <input type="number" id="username" name="username" maxlength="10"/> */}
                    </div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">DOB</h2>
                </div>
                <div class="Register-class-input">
                <input type="date" name="day" required />
                   </div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">Gender</h2>
                </div>
                <div class="Register-class-input">
                    <select className="Register-select" id="country" name="gender">
                        <option className="Register-option" value="Male" >Male</option>
                        <option className="Register-option" value="Female">Female</option>
                        <option className="Register-option" value="Trans">Trans</option>
                        <option className="Register-option" value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">City</h2>
                </div>
                <div class="Register-class-input">
                    <input class="Register-input" type="text" name="" required /></div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">State</h2>
                </div>
                <div class="Register-class-input">
                    <input class="Register-input" type="text" name="" required /></div>
            </div>
            <div class="inputBx">
                <div class="Register-class-h2">
                    <h2 class="Register-h2">Pincode</h2>
                </div>
                <div class="Register-class-input">
                    <input class="Register-input" type="number" name=""  required /></div>
            </div>

            <div class="inputBx">
            <div class="Register-class-submit">
            <div class="Register-class-submit-flex">
            <Link to="/"><input class="Register-Submit" type="submit" value="Back" name="" required /></Link>

            </div>
            <div class="Register-class-submit-flex">
               

                <Link to="/register2"> <input class="Register-Submit" type="submit" value="Next" name="" /></Link>

                
                </div>
            </div>
            </div>
        </form>
    </div>
    <Footer />

</div>

</div>
        </div>
    )
}

export default Register
