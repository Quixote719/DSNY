import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import TitleContentCard from '../shared/TitleContentCard'

import SubSectionHeaderImage from '../shared/sub_section_header_image';


class LocationsSection extends Component {

  ListCards(cards){
    return cards.map((item, i)=>{
      return (
        <div>
            <TitleContentCard type='2' content={item.content}/>
        </div>
      )
    })
  }

  render() {
    const style = {
                    'background-image': `url(${this.props.LocationProps.image})`,
                    'background-size': '100% 100%',
                  }

    return (
      <div className="locations" style={style} >
        <div className = 'SContainer'>
            <div>Locations</div>
            <TitleContentCard type='2' content={this.props.LocationProps.content}/>
        </div>
      </div>
    )
  }
}

export default LocationsSection;
