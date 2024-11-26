import React from "react";
import { NavLink } from "react-router-dom";
import "./Error404.css"

const Error404 = () => {
    return(
        <div>
            <section className="page_404">
                <div className="container">
                <div className="Bg_404">
                    <h1>404</h1>
                </div>
                    <div className="Error404Text">
                        <h3>Looks Like You're Lost</h3>
                        <p>
                            The page you are looking for not available
                        </p>
                        <NavLink to="/">Go to Home</NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Error404;