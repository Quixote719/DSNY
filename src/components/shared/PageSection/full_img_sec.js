import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import ContentCard from '../../shared/ContentCard';
import styles from '../../../content/styles/fullWidthImages.css';

class FullImageSec extends Component{


    getCardStyle(cardType){

       let cardStyle; 
       switch(cardType){
            case 'content-left':
               return(
                   <Col className = 'ContentLeft' xs={12}>
                        <ContentCard type='1' content={this.props.dataObject.content}/>   
                    </Col>
                );

            case 'content-right':
                return(
                   <div>
                   <Col xs={0} sm={0} md={8}></Col>
                   <Col xs={12} sm={12} md={4}><ContentCard type='1' content={this.props.dataObject.content}/>
                   </Col>
                   </div>
                ); 
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

           
        // SectionContainer
        return (
                    <div>
                    <div className='positionElement' style={style}>
                    <div className = 'container' > 
                    <Row> 
                    <Col className = 'BlackTitle' xs={12}> {this.props.dataObject.header}</Col>
                                {this.getCardStyle(dataObject.section_style)};     
                    </Row>
                    </div>
                    </div>
                    <div className="greyBcgHeight"></div>
                    </div>
    )

    }  

}

FullImageSec.propTypes = {
  dataObject: PropTypes.object,
  className: PropTypes.string
};
export default FullImageSec;