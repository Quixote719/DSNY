import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
          <div>
            <img className="Profile" src={this.props.ProfileUrl} alt=""/>
          </div>
          <div className="ProfileCardName">Kathryn Garcia</div>
          <div className="ProfileCardDuty">Commissioner</div>
      </div>
    )
  }
}

export default ProfileCard;
