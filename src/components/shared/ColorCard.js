import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ColorCard extends Component {
  render() {
    const Cardstyle = {
      'background-color': '#B3D234'
    }
    return (
      <div className = "ColorCard">
        <div style={Cardstyle} className = "ColorCardHeader">OPERATIONS</div>
        <div className = "ColorCardContent">Expand curbside organics collection LOL LOL LOL</div>
      </div>
    )
  }
}

export default ColorCard;
