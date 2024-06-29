import './index.css'
import {Component} from 'react'

class GameOver extends Component {
  render() {
    const {point, playing} = this.props
    return (
      <div className="another">
        <img
          className="pictro"
          alt="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <p className="yscore">YOUR SCORE</p>
        <p className="scored">{point}</p>
        <div className="butCard">
          <button onClick={playing} className="but45">
            <img
              alt="reset"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            />
            <p className="pa12">PLAY AGAIN</p>
          </button>
        </div>
      </div>
    )
  }
}
export default GameOver
