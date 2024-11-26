import React from "react";
import "./Enterprice.css"
import { NavLink } from "react-router-dom";

const Enterprice = () => {
    return(
        <div>
            <div className="Enterprice">
                <div className="container">
                    <h3>
                        ENTERPRISE
                    </h3>
                    <h1>
                        Are you interested  in a custom-tailored plan?
                    </h1>
                    <p>
                        Product is a set of advanced features for really large teams with projects.
                    </p>
                    <div className="EnterpriceBtnBox">
                        <NavLink >
                            Get in touch with us
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Enterprice;