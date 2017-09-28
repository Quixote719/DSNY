import React, {Component} from "react";
import PropTypes from 'prop-types';
import '../../content/styles/subSectionHeaderImage.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class SubSectionHeaderImage extends Component {
  render() {

    return (
      <div >
        <div className='subSectionHeaderImageContainer'>
          <div className='subSectionHeaderImage' style={{
            backgroundImage: `url(${this.props.imgSrc})`
          }}>
            <div className='container'>
              <Row>
                <Col xs={12} md={6}>
                  <div className='subSectionHeaderImageTitle'>
                    <div className='subSectionHeaderImageTitleText'>{this.props.title}</div>
                  </div>
                  <div className='subSectionHeaderImagetitleBody'>
                    <div className='subSectionHeaderImagetitleBodyText'>{this.props.body}</div>
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

SubSectionHeaderImage.propTypes = {
  body: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  imgSrc: PropTypes.string
};

export default SubSectionHeaderImage;
