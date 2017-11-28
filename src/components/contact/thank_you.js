import React from "react";
import { Row, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import SubSectionButton from '../shared/sub_section_button';
import { Link } from 'react-router-dom';


function demoDisplay()  {
    if(document.getElementById("contactPageBody") !== null && document.getElementById('contactPageBody') !== undefined) {
      document.getElementById("contactPageBody").style.display = "none";
    }
}

const SubmitThankYou = props => {
  return (      
      <div>
        <Col>
         <div className='SContainer'>
          <div className='thankYoupatternLine'></div>
          { demoDisplay()}
            <div className='thankyoulable'>THANK YOU</div>
              <div className='thankyoubody' >
                {Parser(props.children)}
              </div>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>
            <div className='alignCenter'><SubSectionButton title='BACK TO HOMEPAGE'></SubSectionButton></div>
          </Link>
          <div className='thankYoupatternLine'></div>
          </div>
        </Col>
      </div>
  );
};

export default SubmitThankYou;
