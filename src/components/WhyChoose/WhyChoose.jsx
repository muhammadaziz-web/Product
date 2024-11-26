import React from "react";
import "./WhyChoose.css"
import Mause from "../../images/mause.png"
import Survey from "../../images/surveys.png"
import Heart from "../../images/heart.png"

const WhyChoose = () => {
    return(
        <div>
            <div className="WhyChoose">
                <div className="container">
                    <h1>
                        Why Choose Product?
                    </h1>
                    <div className="WhyChooseBoxs">
                        <div className="WhyChooseBox">
                            <img src={Mause} alt="Mause" />
                            <h3>
                                Special Business
                            </h3>
                            <p>
                                Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.
                            </p>
                        </div>
                        <div className="WhyChooseBox">
                            <img src={Survey} alt="Survey" />
                            <h3>
                                Instant Result
                            </h3>
                            <p>
                                Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.
                            </p>
                        </div>
                        <div className="WhyChooseBox">
                            <img src={Heart} alt="Heart" />
                            <h3>
                                Fastest way to organize
                            </h3>
                            <p>
                                Product helps you see how many 
                                more days you need to work 
                                to reach your financial goal 
                                for the month and year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyChoose;