import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleBody from '../../shared/Card_title_body';
import {Grid, Row, fluid, Col, Clearfix} from 'react-bootstrap';

class ReportCardList extends Component {

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {

    return _.chain(obj).keys().sort().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    return _.map(this.firstN(cards, 4), Item => {
      return (
        <Link key={Item.id} to={`/resources/reports/${Item.name}`}><CardTitleBody className='NBsubSectioncardTB' title={Item.title} body={Item.content}/></Link>
      );
    });
  }

  ViewAllButton(l) {
    if (l > 4) {
      return (
        <Link to="/resources/reports"><SubSectionButton title='VIEW ALL'/></Link>
      );
    } else {
      return null;
    }

  }

  render() {

    const {rc, n} = this.props;

    if (_.isEmpty(rc)) {
      return (
        <div></div>
      );
    }

    return (
      <div >
        <div>
          <SubSectionHeader title='Reports'/>
          <Row className='nopadding'>
            {this.renderPosts(rc)}
          </Row>
          {this.ViewAllButton(n)}
        </div>
      </div>
    );
  }
}

ReportCardList.propTypes = {
  rc: PropTypes.array.isRequired,
  n: PropTypes.string.isRequired
};

export default ReportCardList;
