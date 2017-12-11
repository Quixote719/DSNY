import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import Parser from 'html-react-parser';

const FormHeaderSmallSize = props => {
  return (
    <div>
      <Col xs={12} md={8}>
        <div className='sectionHeaderFormSmallSize'>
          {props.title}
        </div>
      </Col>  
      <Col xs={12} md={4}>
      <div className = 'sectionHeaderInformationText pullTwrdsEnd' >
          {Parser(props.information)} 
      </div>
      </Col>
    </div>
  );
};

export default FormHeaderSmallSize;