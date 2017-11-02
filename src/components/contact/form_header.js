import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormHeader = props => {
  return (
    <div>
      <Col xs={12}>
        <div className='sectionHeader'>
          {props.title}
        </div>

      </Col>
    </div>
  );
};

export default FormHeader;
