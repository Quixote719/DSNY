import React from "react";
import { Row, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import SubSectionButton from '../shared/sub_section_button';

const SubmitThankYou = props => {
  return (      
      <div>
        <Col>
          {/*<div className='thankYoupatternLine'></div>*/}
          { document.getElementById(`contactPageBody`).classList.add('hide')}
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
