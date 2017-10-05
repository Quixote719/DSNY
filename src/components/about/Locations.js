import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionHeaderImage from '../shared/sub_section_header_image';


class Locations extends Component {

  render() {
    const style = {
                    'background-image': `url(${this.props.LocationProps.image})`,
                    'background-size': '100% 100%',
                  }
    console.log(style);
    return (
      <div className="locations" style={style} >
        <div className = 'SContainer'>
            
        </div>
      </div>
    )
  }
}

export default Locations;
