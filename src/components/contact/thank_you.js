import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';
import Parser from 'html-react-parser';
import SubSectionButton from '../shared/sub_section_button';
import { Link } from 'react-router-dom';


class SubmitThankYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode:true,
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

 demoDisplay()  {
    if(document.getElementById("contactPageBody") !== null && document.getElementById('contactPageBody') !== undefined) {
      document.getElementById("contactPageBody").style.display = "none";
    }
}

render() {
  return(this.props.children ? <div className='SContainer'>
    {this.demoDisplay()}
    <div>{this.props.children}</div>
        <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>
          <div className='alignCenter'><SubSectionButton title='BACK TO HOMEPAGE'></SubSectionButton></div>
        </Link>
    <div className='patternLineGreen'></div>
  </div>
  :
      <div>
        <Col>
         <div className='SContainer'>
          {this.props.displayPatternLine?<div className='patternLineGreen'></div>:null}
          { this.demoDisplay()}
            <div className='thankyoulable'>THANK YOU</div>
              <div className='thankyoubody' >
                {Parser(this.props.message)}
              </div>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>
            <div className='alignCenter'><SubSectionButton title='BACK TO HOMEPAGE'></SubSectionButton></div>
          </Link>
          {/*<div className='thankYoupatternLine'></div>*/}
          <div className='patternLineGreen'></div>
          </div>
        </Col>
      </div>
  );
};

}
export default SubmitThankYou;
