import _ from "lodash";
import React, {Component} from "react";
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import '../../../content/styles/subSectionHeaderImage.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class EducationSectionHeader extends Component {

  render() {

    const {src, title, body} = this.props;

    return (

      <div >
        <div className='subSectionHeaderImageContainer'>
          <div className='subSectionHeaderImage' style={{
            backgroundImage: `url(${src})`
            
          }}>
            <div className='SContainer'>
              <Row>
                <Col xs={12}>
                  <div className='subSectionHeaderImageTitle'>
                    <div className='subSectionHeaderImageTitleText'>{title}</div>
                  </div>
                </Col>
                <Col xs={12} sm={6}>  
                  <div className='subSectionHeaderImagetitleBody_EduMaterials subSectionHeaderImagetitleBodyText'>
                    <div className='subSectionHeaderImagetitleBodyText'>
                        <Truncate lines={6}>{Parser(body)}</Truncate>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

    );
  };
};

EducationSectionHeader.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

export default EducationSectionHeader;
