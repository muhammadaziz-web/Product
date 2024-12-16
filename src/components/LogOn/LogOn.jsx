import React from "react";
import "./LogOn.css"
import Logo from "../../images/site_logo.svg"
import { NavLink } from "react-router-dom";
import GoogleLogo from "../../images/GoogleLogo.png"

const LogOn = () => {
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
                    <input type="text" placeholder="NAME" />
                    <input type="text" placeholder="LAST NAME" />
                    <input type="month" placeholder="YEAR" />
                    <input type="email" placeholder="EMAIL" />
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <NavLink className="LogInBtn" >
                    Log on
                </NavLink> 
                <NavLink className="usebtn" >
                    Use single sign-in
                </NavLink>
                <p className="inpBarText">
                    You have any accaunt? <NavLink to="/login" >Go Log in</NavLink>
                </p>
            </div>
        </div>
    )
}
export default LogOn;
