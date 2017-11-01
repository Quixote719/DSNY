import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';

class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
          <div className="ImageBox">
            {
              ((this.props.image!==undefined)&&(this.props.image!==false))?
              <img className="ProfileCardImg" src={this.props.image} alt=""/>
              :<img className="ProfileCardImg" src={require('../../content/images/Leader_avatar.png')} alt=""/>
            }
          </div>
          <div className="ProfileCardName">{this.props.name}</div>
          <TruncateMarkup lines={3}> 
            <div className="ProfileCardDuty">
               {Parser(this.props.duty)}
            </div>
         </TruncateMarkup>  
      </div>
    )
  }
}

export default ProfileCard;
