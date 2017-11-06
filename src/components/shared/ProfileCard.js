import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';
import Truncate from 'react-truncate';
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
            <div className="ProfileCardDuty">
               <Truncate lines={3}> {Parser(this.props.duty)} </Truncate>  
            </div>
         
      </div>
    )
  }
}

export default ProfileCard;
