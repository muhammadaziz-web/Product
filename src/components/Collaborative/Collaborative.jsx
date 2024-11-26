import React from "react";
import "./Collaborative.css"
import CollaborativeImage from "../../images/Collaborative.svg"

const Collaborative = () => {
    return(
        <div>
            <div className="CollaborativeContainer">
                <div className="container">
                    <div className="CollaborativeLeftRight">
                        <div className="CollaborativeLeft">
                            <span>Effortless Validation for</span>
                            <h1>Collaborative</h1>
                            <p>
                                The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. 
                            </p>
                            <span>Accessory makers</span>
                            <p>
                                While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                            </p>
                            <span>Alterationists</span>
                            <p>
                                If you are looking for a new way to promote your business that won’t cost you more money, 
                            </p>
                        </div>
                        <div className="CollaborativeRight">
                            <img src={CollaborativeImage} alt="CollaborativeImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collaborative;