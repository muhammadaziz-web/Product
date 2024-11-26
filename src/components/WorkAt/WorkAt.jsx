import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Play from '../../images/Play.png'
import WorkAtPeople from '../../images/WorkAtPeople.svg'
import '../WorkAt/WorkAt.css'

const WorkAt = () => {
  return (
    <div>
      <div className="WorkAtLeftRight">
        <div className="container">
          <div className="WorkAtLeft">
            <h1>
              Work  at the speed
              of thought
            </h1>
            <p>
              aTools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
            </p>
            <div className="LinkBox">
              <NavLink >
                Get started
              </NavLink>
              <Link to={`https://www.youtube.com/watch?v=ZBxZC9I6xyk`}>
                <img src={Play} alt="Play" /> Watch the 
              </Link>
            </div>
          </div>
          <div className="WorkAtRight">
            <img src={WorkAtPeople} alt="WorkAtPeople" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkAt
