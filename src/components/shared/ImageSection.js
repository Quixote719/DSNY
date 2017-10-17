import React, { Component } from 'react';
import ContentCard from './ContentCard';
import { Row, Col } from 'react-bootstrap';



class ImageSection extends Component {


  render() {
    const style = {
                    'backgroundImage': `url(${this.props.ImageProps.image})`,
                    'backgroundSize': '100% 900px',
                    'height': '300px',
                    'background-position': '50% 50%;'
                  }
    const cardStyle={
                    'float': 'left',
                    'marginTop': '25px'
    }

    return (
      <div className='ImageSection' style={style} >
        <div className = 'SContainer'>
            <div style={cardStyle}>
              <Col xs={12} sm={12} md={12}>
                  <ContentCard type='2' content={this.props.ImageProps.content}/>
              </Col>
            </div>
        </div>
      </div>
    )
  }
}

export default ImageSection;
