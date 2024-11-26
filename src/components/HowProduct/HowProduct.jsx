import React from "react";
import "./HowProduct.css"
import FirstStep from "../../images/mac1.png"
import SecondStep from "../../images/mac2.png"
import ThirdStep from "../../images/mac3.png"
import { NavLink } from "react-router-dom";

const HowProduct = () => {
    return(
        <div>
            <div className="HowProduct">
                <div className="container">
                    <h1>
                        How Product Work?
                    </h1>
                    <div className="HowProductStep FirstStep">
                        <div className="HowProductstepLeft">
                            <img src={FirstStep} alt="FirstStep" />
                        </div>
                        <div className="HowProductstepRight">
                            <span>
                                STEP 1
                            </span>
                            <h3>
                                Apply for a product
                            </h3>
                            <p>
                                Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology 
                            </p>
                        </div>
                    </div>
                    <div className="HowProductStep SecondStep">
                        <div className="HowProductstepLeft">
                            <img src={SecondStep} alt="SecondStep" />
                        </div>
                        <div className="HowProductstepRight">
                            <span>
                                STEP 2
                            </span>
                            <h3>
                                Pay fully refundable
                            </h3>
                            <p>
                                Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded.
                            </p>
                        </div>
                    </div>
                    <div className="HowProductStep ThirdStep">
                        <div className="HowProductstepLeft">
                            <img src={ThirdStep} alt="ThirdStep" />
                        </div>
                        <div className="HowProductstepRight">
                            <span>
                                STEP 3
                            </span>
                            <h3>
                                Completion
                            </h3>
                            <p>
                                Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement
                            </p>
                        </div>
                    </div>
                    <NavLink  className="HowProductBtn">
                        Get in touch with us
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default HowProduct;