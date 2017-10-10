import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProfileCard from '../../shared/ProfileCard'
import ColorCard from '../../shared/ColorCard'

class Leadership extends Component {
  render() {
    return (
      <div>
              <ProfileCard/>
              <ColorCard/>
      </div>

    )
  }
}

export default Leadership;
