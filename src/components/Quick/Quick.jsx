import React from "react";
import "./Quick.css"
import PeopleFirst from "../../images/PeopleFirst.png"
import PeopleSecond from "../../images/PeopleSecond.png"
import Peoplethird from "../../images/PeopleThird.png"
import PeopleForth from "../../images/PeopleForth.png"
import { NavLink } from "react-router-dom";

const Quick = () => {
    return(
        <div>
            <div className="QuickContainer">
                <div className="container">
                    <h1>
                        Quick & Easy Process
                    </h1>
                    <p className="QuickText">
                        Do you require some help for your project: Conception workshop,
                        prototyping, marketing strategy, landing page, Ux/UI?
                    </p>
                    <div className="QuickFirtsProfile">
                        <div className="PeopleProfile">
                            <img src={PeopleFirst} alt="PeopleFirst" />
                            <p>
                                I can take care of your pitch
                            </p>
                        </div>
                        <div className="PeopleProfile">
                            <p>
                                I can prototype your app
                            </p>
                            <img src={PeopleSecond} alt="PeopleSecond" />
                        </div>
                    </div>
                    <div className="QuickSecondProfile">
                        <div className="PeopleProfile">
                            <p>
                                I can design you website
                            </p>
                            <img src={Peoplethird} alt="Peoplethird" />
                        </div>
                        <div className="PeopleProfile">
                            <img src={PeopleForth} alt="PeopleForth" />
                            <p>
                                I can help marketing strategy
                            </p>
                        </div>
                    </div>
                    <div className="QuickBtnBox">
                        <NavLink >
                            Contact our expert
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Quick