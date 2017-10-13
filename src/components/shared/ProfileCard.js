import React, { Component } from 'react';


class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
          <div className="ImageBox">
            <img className="ProfileCardImg" src={this.props.image} alt=""/>
          </div>
          <div className="ProfileCardName">{this.props.name}</div>
          <div className="ProfileCardDuty" dangerouslySetInnerHTML={{__html: this.props.duty}}></div>
      </div>
    )
  }
}

export default ProfileCard;
