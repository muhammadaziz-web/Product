import React from "react";
import "./SendAMessage.css"
import { NavLink } from "react-router-dom";

const SendAMessage = () => {
    return(
        <div>
            <div className="container">
                <div className="SendAMessage">
                    <h1>
                        Send a message
                    </h1>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea type="text" placeholder="Your Message" />
                    <NavLink>
                        Send
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default SendAMessage;