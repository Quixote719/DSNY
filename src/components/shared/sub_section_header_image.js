import _ from "lodash";
import React, {Component} from "react";
import Truncate from 'react-truncate';
import {connect} from "react-redux";
import Dotdotdot from 'react-dotdotdot'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchsubSectionHeader} from "../../actions";
import '../../content/styles/subSectionHeaderImage.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class SubSectionHeaderImage extends Component {

  componentDidMount() {
    const {id} = this.props
    this.props.fetchsubSectionHeader(id);
  }

  render() {

    const {sch} = this.props;

    return (

      <div >
        <div className='subSectionHeaderImageContainer'>
          <div className='subSectionHeaderImage' style={{
            backgroundImage: `url(${sch.imgSrc})`
          }}>
            <div className='container'>
              <Row>
                <Col xs={12} md={6}>
                  <div className='subSectionHeaderImageTitle'>
                    <div className='subSectionHeaderImageTitleText'>{sch.title}</div>
                  </div>
                  <div className='subSectionHeaderImagetitleBody subSectionHeaderImagetitleBodyText'>
                    <Dotdotdot clamp={6}>
                      <div className='subSectionHeaderImagetitleBodyText' dangerouslySetInnerHTML={{
                        __html: sch.body
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

SubSectionHeaderImage.propTypes = {
  id: PropTypes.string
};

function mapStateToProps(state) {
  return {sch: state.resources.subSectionHeader};
}

export default connect(mapStateToProps, {fetchsubSectionHeader})(SubSectionHeaderImage);
