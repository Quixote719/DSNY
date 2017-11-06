import React, { Component } from 'react';
import ContentCard from './ContentCard';
import { Row, Col } from 'react-bootstrap';



class ImageSection extends Component {

    renderHeaderContent(){
    const cardStyle={
                    'float': 'left',
                    'marginTop': '25px'
    }
    if(this.props.ImageProps.content){
      return(
            <div style={cardStyle}>
                  <ContentCard type='2' content={this.props.ImageProps.content}/>
            </div>
      )
    }
    else{
      return(
        <div className = 'WhiteTitle'>{this.props.ImageProps.header}</div>
      )
    }
  }

  render() {
    let imageUrl = '';
    if(this.props.ImageProps.featured_image!==undefined){
      imageUrl = this.props.ImageProps.featured_image.base_path + this.props.ImageProps.featured_image.file;
    }
    const style = {
                    'backgroundImage': `url(${imageUrl})`,
                    'backgroundSize': '100% 900px',
                    'height': '300px',
                    'background-position': '50% 50%;'
                  }
    return (
      <div className='ImageSection' style={style} >
        <div className = 'SContainer'>
          {this.renderHeaderContent()}
        </div>
      </div>
    )
  }
}

export default ImageSection;
