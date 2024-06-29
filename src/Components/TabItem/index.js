import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  pack = () => {
    const {press, obj} = this.props
    press(obj.tabId)
  }
  render() {
    const {obj, cond} = this.props
    const {displayText} = obj
    const style = cond ? 'tap' : ''
    return (
      <li onClick={this.pack} className={`tabCard ${style}`}>
        <button>{displayText}</button>
      </li>
    )
  }
}
export default TabItem
