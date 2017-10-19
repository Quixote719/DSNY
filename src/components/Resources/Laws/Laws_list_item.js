import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';
import Dotdotdot from 'react-dotdotdot'
class LawsListItem extends Component {

  rawMarkup() {
    var rawMarkup = this.props.body;
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div >
        <Col>
          <Col xs={12} md={3}>
            <Dotdotdot clamp={3}>
              <div className='lawsTitle' dangerouslySetInnerHTML={{
                __html: this.props.title
              }}/>
            </Dotdotdot>
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <Dotdotdot clamp={3}>
                  <div className='lawsDesc' dangerouslySetInnerHTML={{
                    __html: this.props.body
                  }}/>
                </Dotdotdot>
              </Col>
              <Col xs={12}>
                <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}/resources/laws/proposed-rules`}>
                  <div className='lawsLink'>SEE ALL RULES</div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className='hairline'></div>
          </Col>
        </Col>

      </div>
    );
  };
};
LawsListItem.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string
};

export default LawsListItem;
