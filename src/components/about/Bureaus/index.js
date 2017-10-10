import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProfileCard from '../../shared/ProfileCard'
import ColorCard from '../../shared/ColorCard'
import TitleBanner from '../../shared/TitleBanner'

class Leadership extends Component {

  render() {
        let path = this.props.location.pathname;
    return (
      <div>
              <TitleBanner path={path}/>
              <ProfileCard/>
              <ColorCard/>
      </div>

    )
  }
}

export default Leadership;
