import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import ContentCard from '../../shared/ContentCard'
import styles from '../../../content/styles/fullWidthImages.css';

class FullImageSec extends Component{


    getCardStyle(cardType){

       let cardStyle; 
       switch(cardType){
            case 'content-left':
               return 'ContentLeft';
       } 


    }
   
    render(){
        const {dataObject} = this.props;
        const base_path = dataObject.featured_image.base_path;
        const filename = dataObject.featured_image.file
        const style = {
                    'backgroundImage': `url(${base_path + filename})`,
                    'backgroundSize': '100% 900px',
                  }

        const cardStyle = this.getCardStyle(dataObject.section_style);         

        return (
                    <div className='positionElement' style={style} >
                    <div className = 'SectionContainer'>
                    <div className = 'BlackTitle'> {this.props.dataObject.header}</div>
                    <Row>
                    <div className = {cardStyle}>
                        <ContentCard type='1' content={this.props.dataObject.content}/>   
                    </div>
                    </Row>
                    </div>
                    </div>
    )

    }  

}

FullImageSec.propTypes = {
  dataObject: PropTypes.object,
  className: PropTypes.string
};
export default FullImageSec;