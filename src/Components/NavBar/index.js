import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {counter, uScore} = this.props
    return (
      <nav className="navbar">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        />
        <div className="nav-card">
          <p className="scoreCard">
            score: <span className="score">{uScore}</span>
          </p>
          <img
            className="logo2"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="score">{counter} sec</p>
        </div>
        <ul>
         <li></li>
         <li></li>
        </ul>
      </nav>
    )
  }
}
export default NavBar
