import React from "react";
import { NavLink } from "react-router-dom";
import JoinPicture from "../../images/JoinPicture.png"
import "./Join.css"

const Join = () => {
    return(
        <div>
            <div className="Join">
                <div className="container">
                    <div className="JoinMedia">
                        <div className="textBox">
                            <p>
                                Join 100 Compannies who boost their business with Product
                            </p>
                            <div className="BtnBox">
                                <NavLink >
                                    Get This
                                </NavLink>
                            </div>
                        </div>
                        <img src={JoinPicture} alt="JoinPicture" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Join;