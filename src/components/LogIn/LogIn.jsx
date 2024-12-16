import React from "react";
import "./LogIn.css"
import Logo from "../../images/site_logo.svg"
import { NavLink } from "react-router-dom";
import GoogleLogo from "../../images/GoogleLogo.png"

const LogIn = () => {
    return(
        <div className="container">
            <NavLink to="/" className="LogoBar">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <div className="InputBar">
                <h2>
                    Log in or create an  account  to collaborate
                </h2>
                <NavLink className="GoogleBtn" >
                    <img src={GoogleLogo} alt="GoogleLogo" />
                    <p>Continue with Google</p>
                </NavLink>
                <p className="Or">
                    Or
                </p>
                <div className="inpBox">
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <NavLink className="LogInBtn" >
                    Log in
                </NavLink> 
                <NavLink className="usebtn" >
                    Use single sign-on
                </NavLink>
                <NavLink className="Reset" >
                    Reset password
                </NavLink>
                <p className="inpBarText">
                    No accaunt? <NavLink to="/logon" >Create one</NavLink>
                </p>
            </div>
        </div>
    )
}
export default LogIn;
