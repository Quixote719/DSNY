import React, { Component } from 'react';
import ContentCard from '../shared/ContentCard'


class LocationsSection extends Component {


  render() {
    const bcgImage = this.props.LocationProps.image||''
    const style = {
      backgroundImage: `url(${bcgImage})`,
      backgroundSize: '100% 900px'
    }
    const cardStyle = {
                        'float': 'right',
                      }
    return (
      <div className='locations' style={style}>
        <div className = 'SContainer'>
            <div className = 'whiteTitle'>Locations</div>
            <div style={cardStyle}>
                <ContentCard type='1' content={this.props.LocationProps.content}/>
            </div>
        </div>
      </div>
    )
  }
}



export default LocationsSection;
