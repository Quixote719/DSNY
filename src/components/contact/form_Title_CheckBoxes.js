import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormTitleCheckBoxes = props => {
  return (<div>
    <Col xs={12}>
      <div className='FormMultiSelectTitle'>
        {props.title}
      </div>
    </Col>
  </div>);
};

export default FormTitleCheckBoxes;
