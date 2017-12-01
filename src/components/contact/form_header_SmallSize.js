import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormHeaderSmallSize = props => {
  return (
    <div>
      <Col xs={12} md={7}>
        <div className='sectionHeaderFormSmallSize'>
          {props.title}
        </div>
      </Col>  
      <Col xs={12} md={5}>
      <div className = 'sectionHeaderInformationText pullTwrdsEnd' >
          {props.information}
      </div>
      </Col>
    </div>
  );
};

export default FormHeaderSmallSize;