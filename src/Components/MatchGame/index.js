import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import GameOver from '../GameOver'

class MatchGame extends Component {
  state = {
    tabItemId: 'FRUIT',
    condition: true,
    seconds: 60,
    imageId: this.props.imagesList[0].id,
    userScore: 0,
  }
  playAgain = () => {
    this.cat = setInterval(this.timing, 1000)
    this.setState(prevState => ({
      tabItemId: 'FRUIT',
      condition: true,
      seconds: 60,
      imageId: this.props.imagesList[0].id,
      userScore: 0,
    }))
  }
  pressing = a => {
    this.setState({
      tabItemId: a,
    })
  }
  componentDidMount() {
    this.time = setInterval(this.timing, 1000)
  }
  timing = () => {
    const {seconds} = this.state
    if (seconds > 0) {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    } else {
      clearInterval(this.time)
      clearInterval(this.cat)
      this.setState({
        condition: false,
      })
    }
  }
  checking = a => {
    const {imageId} = this.state
    const {imagesList} = this.props
    if (a === imageId) {
      const b = Math.floor(Math.random() * imagesList.length)
      this.setState(prevState => ({
        imageId: imagesList[b].id,
        userScore: prevState.userScore + 1,
      }))
    }
    else{
      this.setState(prevState => ({
        condition: false,
      }))
      clearInterval(this.time)
      clearInterval(this.cat)
    }
  }
  render() {
    const {tabItemId, condition, seconds, imageId, userScore} = this.state
    const {tabsList, imagesList} = this.props
    const newThumbnails = imagesList.filter(item => item.category === tabItemId)
    const mainPicture = imagesList.find(item => item.id === imageId)
    let yeast
    if (condition) {
      yeast = (
        <div className="mainCard">
          <img className="picture" alt="match" src={mainPicture.imageUrl} />
          <div className="topUnorder">
            <ul className="unorder">
              {tabsList.map(item => (
                <TabItem
                  press={this.pressing}
                  cond={item.tabId === tabItemId}
                  key={item.tabId}
                  obj={item}
                />
              ))}
            </ul>
          </div>
          <ul className="bottomUnorder">
            {newThumbnails.map(item => (
              <ThumbnailItem key={item.id} tank={this.checking} obj={item} />
            ))}
          </ul>
        </div>
      )
    } else {
      yeast = <GameOver playing={this.playAgain} point={userScore} />
    }
    return (
      <div>
        <NavBar uScore={userScore} counter={seconds} />
        <div className="bg-card">{yeast}</div>
      </div>
    )
  }
}
export default MatchGame
