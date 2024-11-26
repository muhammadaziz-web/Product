import React from "react";
import "./JoinThousand.css"
import Bisines from "../../images/JoinBisiness.png"
import Enterprise from "../../images/JoinEnterprise.png"

const JoinThousand = () => {
    return(
        <div>
            <div className="JoinThousand">
                <div className="container">
                    <h1>
                        Join thousand of other who have
                        already received offers
                    </h1>
                    <div className="JoinThousandBox">
                        <div className="JoinThousandBoxs">
                            <img src={Bisines} alt="Bisines" />
                            <h3>
                                Business
                            </h3>
                            <p>
                                Cash Flow <br />
                                Asset Backed <br />
                                Receivables Finance
                            </p>
                            <span>
                                Find the best business product
                            </span>
                        </div>
                        <div className="JoinThousandBoxs SecondBoxs">
                            <img src={Enterprise} alt="Enterprice" />
                            <h3>
                                Enterprice
                            </h3>
                            <p>
                                Site Acquisition <br />
                                Bridge <br />
                                Development Financing
                            </p>
                            <span>
                                Find the best business product
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JoinThousand;