import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubSectionButton from '../../shared/sub_section_button';
import ColorCard from '../../shared/ColorCard';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/dsnyCard.css';
import '../../../content/styles/StrategicPlan.css';

class PlanCardSection extends Component {

  renderCards(cards = []) {
    return _.map(cards, item => {
        return (
          <Col xs={12} sm={6} md={4}>
              <ColorCard title={item.title} content={item.content} key={item.id} />
          </Col>
        );
      })
  }

  ViewAllButton() {
      return (<SubSectionButton title='SEE FULL PLAN'/>);
  }

  render() {
    return (
      <div>
        <div>
          <Row className='topSpace'>
            {this.renderCards(this.props.PlanProps.cards)}
          </Row>
          {this.ViewAllButton()}
        </div>
      </div>
    );
  }
}


export default PlanCardSection;
