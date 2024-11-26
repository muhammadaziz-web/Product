import React from "react";
import "./LatestStories.css"
import FirstContent from "../../images/Content1.png"
import SecondContent from "../../images/Content4.png"
import ThirdContent from "../../images/Content5.png"
import FourthContent from "../../images/Content6.png"
import FifthContent from "../../images/Content7.png"
import SixthContent from "../../images/Content8.png"


const LatestStories = () => {
    return(
        <div>
            <div className="LatestStories">
                <div className="container">
                    <h1>
                        Latest Stories
                    </h1>
                    <p>
                        We focus on ergonomics and meeting you where you work. It's only a keystroke away. 
                    </p>
                    <div className="LatestStoriesBoxs">
                        <div className="LatestStoriesBox">
                            <img src={FirstContent} alt="FirstContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Increasing Prosperity With Positive Thinking
                            </h3>
                        </div>
                        <div className="LatestStoriesBox">
                            <img src={SecondContent} alt="SecondContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Motivation Is The First Step To Success
                            </h3>
                        </div>
                        <div className="LatestStoriesBox">
                            <img src={ThirdContent} alt="ThirdContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Success Steps For Your Personal Or Business
                            </h3>
                        </div>
                        <div className="LatestStoriesBox">
                            <img src={FourthContent} alt="FourthContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Increasing Prosperity With Positive Thinking
                            </h3>
                        </div>
                        <div className="LatestStoriesBox">
                            <img src={FifthContent} alt="FifthContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Motivation Is The First Step To Success
                            </h3>
                        </div>
                        <div className="LatestStoriesBox">
                            <img src={SixthContent} alt="SixthContent" />
                            <p>
                                By <span>Wahid Ari</span> |  03 March 2019
                            </p>
                            <h3>
                                Success Steps For Your Personal Or Business
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestStories;