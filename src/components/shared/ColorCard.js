import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../content/styles/dsnyCard.css';

class ColorCard extends Component {
  render() {
    const cardStyle = {
      'fuego': {'background-color':'#B3D234'},
      'mantis': {'background-color':'#86C64C'},
      'caribbean green': {'background-color':'#00BB9E'},
      'bondi blue': {'background-color':'#009FB2'},
      'iris blue': {'background-color':'#00ACDA'},
      'pacific blue': {'background-color':'#0093CD'},
      'cerulean': {'background-color':'#0078B6'},
      'dark cerulean': {'background-color':'#005492'},
      'jacksons purple': {'background-color':'#29318F'},
      'kingfisher daisy': {'background-color':'#5C2F8E'},
      'dark purple': {'background-color':'#95268C'},
      'medium violet red': {'background-color':'#CC158A'},
      'chartreuse': {'background-color': '#B3D234'},
    }
    console.log(this.props.dataObject.key_color);
    const cardColor = cardStyle[this.props.dataObject.key_color]||cardStyle.chartreuse;
    return (
        <div className = "ColorCard">
          <div style={cardColor} className = "ColorCardHeader">{this.props.dataObject.title.toUpperCase()}</div>
          <div className = "ColorCardContent" dangerouslySetInnerHTML={{__html: this.props.dataObject.content}}></div>
        </div>
    )
  }
}

export default ColorCard;
