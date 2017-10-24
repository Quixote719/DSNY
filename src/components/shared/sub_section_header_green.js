import React from "react";
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

class GreenSubSectionHeader extends SubSectionHeader {

  render() {
      return (
         <div>
            <div className='greenSectionHeader'>
            {props.title}
            </div>
            <div className='patternLineGreen'></div>
         </div>
         );
  }     


}

export default GreenSubSectionHeader;