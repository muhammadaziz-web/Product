import React from "react";
import "./OurClients.css"
import Airbnb from "../../images/Airbnb.png"
import Google from "../../images/Google.png"
import Microsoft from "../../images/Microsoft.png"
import FedEx from "../../images/FedEx.png"
import { NavLink } from "react-router-dom";

const OurClients = () => {
    return(
        <div>
            <div className="OurClients">
                <div className="container">
                    <h1>
                        Our Clients
                    </h1>
                    <div className="OurClientsImages">
                        <NavLink to={`https://www.airbnb.com/`} target="blank" >
                            <img src={Airbnb} alt="Airbnb" />
                        </NavLink>
                        <NavLink to={`https://www.google.com/`} target="blank" >
                            <img src={Google} alt="Google" />
                        </NavLink>
                        <NavLink to={`https://www.microsoft.com/en-us/`} target="blank">
                            <img src={Microsoft} alt="Microsoft" />
                        </NavLink>
                        <NavLink to={`https://www.fedex.com/en-us/home.html`} target="blank">
                            <img src={FedEx} alt="FedEx" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurClients;