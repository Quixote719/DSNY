import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';

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
          <Dotdotdot clamp={3}>
            <div className="ProfileCardDuty" dangerouslySetInnerHTML={{__html: this.props.duty}}></div>
          </Dotdotdot>
      </div>
    )
  }
}

export default ProfileCard;
