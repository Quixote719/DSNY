import _ from "lodash";
import React, {Component} from "react";
import Dotdotdot from 'react-dotdotdot'
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
            <div className='container'>
              <Row>
                <Col xs={12} md={6}>
                  <div className='subSectionHeaderImageTitle'>
                    <div className='subSectionHeaderImageTitleText'>{title}</div>
                  </div>
                  <div className='subSectionHeaderImagetitleBody_EduMaterials subSectionHeaderImagetitleBodyText'>
                    <Dotdotdot clamp={6}>
                      <div className='subSectionHeaderImagetitleBodyText' dangerouslySetInnerHTML={{
                        __html: body
                      }}/>
                    </Dotdotdot>
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
