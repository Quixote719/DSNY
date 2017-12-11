import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import '../../content/styles/PressReleaseBody.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import CardReferenceDetails from './reference_details_card'

class PressReleaseBody extends Component {

  renderCards(cards) {
    return _.map(cards, card => {
      return (<CardReferenceDetails title={card.title} body={card.content} key={_.random(0, 200, true)}/>);
    });
  }

  render() {
    const {data} = this.props
    console.log(data.content)
    return (
      <div className='PressReleaseBody'>
        <Row>
          <Col xs={12} sm={8} md={9}>
            <div className='PressReleaseBodytext' dangerouslySetInnerHTML={{
              __html: data.content
            }}/>
          </Col>
          <Col xs={12} sm={4} md={3}>
            <Row>{this.renderCards(data.cards)}</Row>
          </Col>
        </Row>
      </div>
    );
  };
};

PressReleaseBody.propTypes = {
  data: PropTypes.any
};

export default PressReleaseBody;
