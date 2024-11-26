import React from "react";
import Logo from "../../images/site_logo.svg"
import { NavLink } from "react-router-dom";
import Instagram from "../../images/instagram.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/Vector.png"
import "./Footer.css"

const Footer = () => {
    return(
        <div>
            <div className="Footer">
                <div className="container">
                    <div className="LogoBox">
                        <NavLink >
                            <img src={Logo} alt="Logo" />
                            Product
                        </NavLink>
                        <div className="Link">
                            <NavLink >
                                <img src={Instagram} alt="Instagram" />
                            </NavLink>
                            <NavLink >
                                <img src={Facebook} alt="Facebook" />
                            </NavLink>
                            <NavLink >
                                <img src={Twitter} alt="Twitter" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="Resource">
                        <h4>
                            Resource
                        </h4>
                        <NavLink >
                            About Us
                        </NavLink>
                        <NavLink >
                            Blog
                        </NavLink>
                        <NavLink >
                            Contacts
                        </NavLink>
                        <NavLink >
                            FAQ
                        </NavLink>
                    </div>
                    <div className="LegalStuff">
                        <h4>
                            Legal Stuff
                        </h4>
                        <NavLink >
                            Disclaimer
                        </NavLink>
                        <NavLink >
                            Financing
                        </NavLink>
                        <NavLink >
                            Privacy Policy
                        </NavLink>
                        <NavLink >
                            Terms of Service
                        </NavLink>
                    </div>
                    <div className="InpBox">
                        <p>
                            knowing you're always on the best energy deal. 
                        </p>
                        <input type="text" id="GetText" />
                        <div className="InpBoxBtn">
                        <NavLink >
                            Sign up Now
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;