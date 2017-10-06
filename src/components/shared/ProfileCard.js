import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
          <div className="ImageBox">
            <img className="ProfileCardImg" src="https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg" alt=""/>
          </div>
          <div className="ProfileCardName">Kathryn Garcia</div>
          <div className="ProfileCardDuty">Commissioner</div>
      </div>
    )
  }
}

export default ProfileCard;
