import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormHeader = props => {
  return (
    <div>
      <div className='sectionHeader'>
        {props.title}
      </div>
    </div>
  );
};

export default FormHeader;
