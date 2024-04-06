import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}
  leftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }
  rightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }
  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="container">
        <h1 className="heading">Reviews </h1>
        <div className="container2">
          <button id="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrowImage"
              alt="left arrow"
              onClick={this.leftArrow}
            />
          </button>
          <div className="imageCont">
            <img src={imgUrl} className="profile" alt={username} />
            <p className="heading1">{username}</p>
            <p className="para">{companyName}</p>
          </div>
          <button testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrowImage"
              alt="right arrow"
              onClick={this.rightArrow}
            />
          </button>
        </div>
        <p className="para1">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
