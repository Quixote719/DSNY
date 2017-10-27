import React, { Component } from 'react';
import '../../content/styles/dsnyCard.css';

class ColorCard extends Component {
  render() {
    const cardStyle = {
      'chartreuse': {'background-color': '#B3D234'},
      'blue': {'background-color':'#005495'},
      'purple': {'background-color':'#5B2E91'},
      'mauve': {'background-color':'#90268F'},
      'magenta': {'background-color':'#C5168C'},
      'cyan': {'background-color':'#009FB4'},
    }
    const cardColor = cardStyle[this.props.color]||cardStyle.chartreuse;
    return (
      <div className = "ColorCard">
        <div style={cardColor} className = "ColorCardHeader">{this.props.title.toUpperCase()}</div>
        <div className = "ColorCardContent" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
      </div>
    )
  }
}

export default ColorCard;
