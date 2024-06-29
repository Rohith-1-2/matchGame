import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  match = () => {
    const {tank, obj} = this.props
    tank(obj.id)
  }
  render() {
    const {obj} = this.props
    const {thumbnailUrl} = obj
    return (
      <li onClick={this.match} className="thumbCard">
        <button>
          <img className="pic12" alt="thumbnail" src={thumbnailUrl} />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
