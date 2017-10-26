import React from "react";
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const FormSection = props => {
  return (
    <div>
      <div className='sectionHeader'>
        {props.title}
      </div>
      <div className='formSectionHeaderHairline'></div>
    </div>
  );
};

export default FormSection;
