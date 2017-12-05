import React, { Component } from 'react';
import ContentCard from './ContentCard';
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/imageSection.css'


class ImageSection extends Component {

    renderHeaderContent(){
    const cardStyleLeft = {
                    'float': 'left',
                    'marginTop': '25px'
    }
    const cardStyleRight = {
                    'float': 'right'
    }
    if(this.props.ImageProps.content && this.props.ImageProps.header){
      return(
        <div>
          <div className="BlackTitle">{this.props.ImageProps.header}</div>
          <div style={cardStyleRight}>
                <ContentCard type='2' content={this.props.ImageProps.content}/>
          </div>
        </div>
      )
    }
    else if(this.props.ImageProps.content){
      return(
            <div style={cardStyleLeft}>
                  <ContentCard type='2' content={this.props.ImageProps.content}/>
            </div>
      )
    }
    else{
      return(
        <div className = 'whiteHeader'>{this.props.ImageProps.header}</div>
      )
    }
  }

  render() {
    let imageUrl = '';
    if(this.props.ImageProps.featured_image!==undefined){
      imageUrl = this.props.ImageProps.featured_image.base_path + this.props.ImageProps.featured_image.file;
    }
    const style = {
                    "small":{
                      'backgroundImage': `url(${imageUrl})`,
                      'backgroundSize': '100%'
                    },
                    "big":{
                      'backgroundImage': `url(${imageUrl})`,
                      'backgroundSize': '100%',
                      'height': '350px'
                    }
                  }
    const secStyle = (this.props.ImageProps.content && this.props.ImageProps.header)? style.big: style.small;
    return (
      <div className='ImageSection' style={secStyle} >
        <div className = 'SContainer'>
          {this.renderHeaderContent()}
        </div>
      </div>
    )
  }
}

export default ImageSection;
