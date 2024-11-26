import React from "react";
import "./IsBeing.css"
import IsBeingImg from "../../images/IsBeing.png"
import IsBeingFirst from "../../images/IsBeingFirst.png"
import IsBeingSecond from "../../images/IsBeingSecond.png"
import IsBeingThird from "../../images/IsBeingThirt.png"
import IsBeingMedia from "../../images/IsBeingMedia.png"

const IsBeing = () => {
    return(
        <div>
            <div className="IsBeing">
                <div className="container">
                    <h1>
                        Product is being used with great effects alongside:
                    </h1>
                    <div className="IsBeingLeftRight">
                        <div className="IsBeingLeft">
                            <img className="IsBeingLeftImg" src={IsBeingImg} alt="IsBeing" />
                            <img className="IsBeingLeftMediaImg" src={IsBeingMedia} alt="IsBeingMedia" />
                        </div>
                        <div className="IsBeingRight">
                            <div className="IsBeingRightBox">
                                <div className="IsBeingRightBoxImg">
                                    <img src={IsBeingFirst} alt="IsBeingFirst" />
                                    <h4>Enterpreneur</h4>
                                </div>
                                <p>
                                    Product is a great way to help medium and samall enterprise owners achieve their goals
                                </p>
                            </div>
                            <div className="IsBeingRightBox">
                                <div className="IsBeingRightBoxImg">
                                    <img src={IsBeingSecond} alt="IsBeingSecond" />
                                    <h4>Accountants</h4>
                                </div>
                                <p>
                                    Whether you are working on contract with clients, or on other key accounting documents, Product is for you
                                </p>
                            </div>
                            <div className="IsBeingRightBox">
                                <div className="IsBeingRightBoxImg">
                                    <img src={IsBeingThird} alt="IsBeingThird" />
                                    <h4>Universities</h4>
                                </div>
                                <p>
                                    Organize university projects and have documents easily graded online with Product
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IsBeing;