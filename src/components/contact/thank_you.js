import React from "react";
import { Row, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import SubSectionButton from '../shared/sub_section_button';


function demoDisplay()  {
    if(document.getElementById("contactPageBody") !== null && document.getElementById('contactPageBody') !== undefined) {
      document.getElementById("contactPageBody").style.display = "none";
    }
}

const SubmitThankYou = props => {
  return (      
      <div>
        <Col>
          {/*<div className='thankYoupatternLine'></div>*/}
          { demoDisplay()}
            <div className='thankyoulable'>THANK YOU</div>
              <div className='thankyoubody' >
                {Parser(props.children)}
              </div>
          <div className='alignCenter'><SubSectionButton title='BACK TO HOMEPAGE'></SubSectionButton></div>
          {/*<div className='thankYoupatternLine'></div>*/}
        </Col>
      </div>
  );
};

export default SubmitThankYou;
