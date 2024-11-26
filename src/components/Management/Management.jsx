import React from "react"
import "./Management.css"
import ManagementImage from "../../images/Management.png"

const Management = () => {
    return (
        <div>
            <div className="ManagementContainer">
                <div className="container">
                    <div className="ManagmentLeftRight">
                        <div className="ManagmentLeft">
                            <span>Effortless Validation for</span>
                            <h1>Management</h1>
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
                        <div className="ManagmentRight">
                            <img src={ManagementImage} alt="ManagementImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Management;