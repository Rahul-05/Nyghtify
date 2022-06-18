import React from 'react'
import socialMediaAuth from '../service/auth'
import { facebookProvider } from '../config/authMethods';
import { googleProvider } from '../config/authMethods';
import '../Signin1.css' 
import Registration1 from './Registration1';
import Register from './Register';

function Signin() {
    const handleOnClick = async(provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };
    return (
        <div className="signinmain">
            <button onClick={() => handleOnClick}>Google</button>
            <button onClick={() => handleOnClick}>Facebook</button>

            <h1>signin</h1>

            <Register />

           


        </div>
    )
}

export default Signin
