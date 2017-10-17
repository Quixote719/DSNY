import React from "react";
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

const SubSectionHeader = props => {
  return (
      <div className="paddingRight">
        <div className='sectionHeader'>
          {props.title}
        </div>
        <div className='patternLineGreen'></div>
      </div>
  );
};

export default SubSectionHeader;
