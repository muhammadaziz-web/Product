import React from "react";
import "./CustomerSupport.css"
import CustomerSupportImage from "../../images/CustomerSupportImage.svg"
import CustomerSupportOrange from "../../images/CustomerOrange.png"
import CustomerSupportRed from "../../images/CustomerRed.png"
import CustomerSupportBlue from "../../images/CustomerBlue.png"

const CustomerSupport = () => {
    return(
        <div>
            <div className="container">
                <div className="CustomerSupportLeftRight">
                    <div className="CustomerSupportLeft">
                        <img src={CustomerSupportImage} alt="CustomerSupportImage" />
                    </div>
                    <div className="CustomerSupportRight">
                        <span>
                            Easier decision making for
                        </span>
                        <h3>
                            Customer Support
                        </h3>
                        <p>
                            The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. 
                        </p>
                        <div className="CustomerSupportRightGalochka">
                            <img src={CustomerSupportOrange} alt="CustomerSupportOrange" />
                            <p>
                                Never worry about overpaying for your energy again.
                            </p> 
                        </div>
                        <div className="CustomerSupportRightGalochka">
                            <img src={CustomerSupportRed} alt="CustomerSupportRed" />
                            <p>
                                We will only switch you to energy companies that we trust and will treat you right
                            </p> 
                        </div>
                        <div className="CustomerSupportRightGalochka">
                            <img src={CustomerSupportBlue} alt="CustomerSupportBlue" />
                            <p>
                                We track the markets daily and know where the savings are.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomerSupport;