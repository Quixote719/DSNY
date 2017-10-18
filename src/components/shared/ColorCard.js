import React, { Component } from 'react';
import '../../content/styles/dsnyCard.css';

class ColorCard extends Component {
  render() {
    const Cardstyle = {
      'background-color': '#B3D234'
    }
    return (
      <div className = "ColorCard">
        <div style={Cardstyle} className = "ColorCardHeader">{this.props.title}</div>
        <div className = "ColorCardContent">{this.props.content}</div>
      </div>
    )
  }
}

export default ColorCard;
