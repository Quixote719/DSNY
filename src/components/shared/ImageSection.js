import React, { Component } from 'react';
import ContentCard from './ContentCard'



class ImageSection extends Component {


  render() {
    const style = {
                    'backgroundImage': `url(${this.props.ImageProps.image})`,
                    'backgroundSize': '100% 900px',
                  }
    const cardStyle={
                    'float': 'left',
                    'marginTop': '25px'
    }

    return (
      <div className='locations' style={style} >
        <div className = 'SContainer'>
            <div style={cardStyle}>
                <ContentCard type='2' content={this.props.ImageProps.content}/>
            </div>

        </div>
      </div>
    )
  }
}

export default ImageSection;