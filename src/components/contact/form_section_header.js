import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormSectionHeader = props => {
  return (<div>
    <Col xs={12}>
      <div className='formSectionHeader'>
        {props.title}
      </div>
      <div className='formSectionHeaderHairline'></div>
    </Col>
  </div>);
};

export default FormSectionHeader;
