import React, { Component } from 'react'
import ProfileCard from '../../shared/ProfileCard'
import ColorCard from '../../shared/ColorCard'

class Leadership extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div>
              <ProfileCard/>
              <ColorCard/>
      </div>

    )
  }
}

export default Leadership;
