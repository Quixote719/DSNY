import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
          <div className="ImageBox">
            {
              ((this.props.image!==undefined)&&(this.props.image!==false))?
              <img className="ProfileCardImg" src={this.props.image.base_path + this.props.image.file} alt=""/>
              :<img className="ProfileCardImg" src={require('../../content/images/Leader_avatar.png')} alt=""/>
            }
          </div>
          <div className="ProfileCardName">{this.props.name}</div>
            <div className="ProfileCardDuty" dangerouslySetInnerHTML={{__html: this.props.duty}} >

            </div>

      </div>
    )
  }
}

export default ProfileCard;
