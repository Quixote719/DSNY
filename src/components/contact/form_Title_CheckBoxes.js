import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormTitleCheckBoxes = props => {
  return (<div>
    <Col xs={12}>
      <div className='FormMultiSelectTitle '>
        { props.title } {props.redAstreix  && <span className="requiredAsterik">*</span> }
      </div>
    </Col>
    <Col xs={12}>
    { props.subHeading && <div> {props.subHeading} </div>}
    </Col>
  </div>);
};

export default FormTitleCheckBoxes;
