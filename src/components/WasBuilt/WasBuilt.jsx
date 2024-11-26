import React from 'react'
import "./WasBuilt.css"
import Mouse from "../../images/mause.png"
import Surveys from "../../images/surveys.png"
import Tests from "../../images/tests.png"
import secondTests from "../../images/seconTests.png"
import { NavLink } from 'react-router-dom'

const WasBuilt = () => {
  return (
    <div>
      <div className="WasBuildContainer">
        <div className="container">
          <h2>
            Product  was Built Specifically 
            for You
          </h2>
          <div className="WasBuildProducts">
            <div className="WasBuildProduct">
                <img src={Mouse} alt="Mouse" />
                <h3>
                  First click tests
                </h3>
                <p>
                  While most people enjoy casino gambling,
                </p>
            </div>
            <div className="WasBuildProduct">
                <img src={Surveys} alt="Surveys" />
                <h3>
                  Design surveys
                </h3>
                <p>
                  Sports betting, lottery and bingo playing for the fun
                </p>
            </div>
            <div className="WasBuildProduct">
                <img src={Tests} alt="Tests" />
                <h3>
                  Preference tests
                </h3>
                <p>
                  The Myspace page defines the individual.
                </p>
            </div>
            <div className="WasBuildProduct">
                <img src={secondTests} alt="secondTests" />
                <h3>
                  Five second tests
                </h3>
                <p>
                  Personal choices and the overall personality of the person. 
                </p>
            </div>
          </div>
          <div className="WasBuildBtnBox">
            <NavLink >
              SIGN UP NOW
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WasBuilt
