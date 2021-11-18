// your ImageSlider code here!
import React from "react";

// function newName() {
//   return <div>Heres some different stuff</div>
// }

export default class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    }
  }

  
  render () {
    if(this.state.currentSlideIndex === 1) {
      // return <div>{newName()}</div>
    } else {
      return <div>I am on slide {this.state.currentSlideIndex}</div>
    }
    
  }
}