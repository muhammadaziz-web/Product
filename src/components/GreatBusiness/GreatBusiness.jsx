import React from "react";
import "./GreatBusiness.css"
import { NavLink } from "react-router-dom";
import Peoples from "../../images/Peoples.png"
import TwoChat from "../../images/twoChats.png"
import OneChat from "../../images/oneChat.png"

const GreatBusiness = () => {
    return(
        <div>
            <div className="GreatBusiness">
                <div className="container">
                    <div className="GreatBusinessLeftRight">
                        <div className="GreatBusinessLeft">
                            <h1>
                                Great Business <br /> made with Product.
                            </h1>
                            <p className="GreatBusinessLeftRightText">
                                Build better customer relationships easily messaging that provides a more personal experience for you and your customers.
                            </p>
                            <div className="inputBox">
                                <input type="email" placeholder="Enter your email adress" />
                                <NavLink >
                                    Join Now
                                </NavLink>
                            </div>
                            <div className="PeoplesBox">
                                <img src={Peoples} alt="Peoples" />
                                <p>
                                    Join over <span>4,000</span>+ other
                                </p>
                            </div>
                        </div>
                        <div className="GreatBusinessRight">
                            <img src={TwoChat} alt="TwoChat" />
                            <img src={OneChat} alt="OneChat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GreatBusiness;