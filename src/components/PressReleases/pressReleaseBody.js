import React, {Component} from "react";
import PropTypes from 'prop-types';
import '../../content/styles/PressReleaseBody.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PressReleaseBody extends Component {

  render() {
    return (
      <div className='PressReleaseBody'>
        <Row>
          <Col xs={12} sm={8} md={9}>
            <div className='PressReleaseBodytext' dangerouslySetInnerHTML={{
              __html: this.props.body
            }}/>

          </Col>
          <Col xs={12} sm={4} md={3}>
            <div className='PressReleaseBodySubHeaders'>
              Press Release
            </div>
            <div className='PressReleaseBodyprid'>#{this.props.prid}</div>
            <div className='patternLineGreen'></div>
            <div className='PressReleaseBodySubHeaders'>
              Contact
            </div>
            <div className='PressReleaseBodycontact' dangerouslySetInnerHTML={{
              __html: this.props.contactinfo
            }}/>
            <div className='patternLineGreen'></div>
          </Col>
        </Row>
      </div>
    );
  };
};

PressReleaseBody.propTypes = {
  body: PropTypes.string,
  prid: PropTypes.string,
  contactinfo: PropTypes.string
};

export default PressReleaseBody;
