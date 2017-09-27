import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchEmPSubList, fetchEmFsSubList} from "../../../actions";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleImage from '../../shared/Card_title_image';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class EducationalMaterialsList extends Component {
  componentDidMount() {
    this.props.fetchEmPSubList();
    this.props.fetchEmFsSubList();
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    return _.map(this.firstN(cards, 8), Item => {
      return (<CardTitleImage className='NBsubSectioncardTB' title={Item.title.rendered} body={Item.content.rendered} key={Item.id}/>);
    });
  }

  ViewAllButton(l) {
    if (l > 8) {
      return (<SubSectionButton title='VIEW ALL'/>);
    } else {
      return null;
    }

  }

  render() {

    const {promotional, forSchool} = this.props;

    if (_.isEmpty(promotional)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <SubSectionHeader title='Educational Materials'/>
        <div>
          <div>
            <h1>
              <b>Promotional</b>
            </h1>
          </div>
          <Row>
            {this.renderPosts(promotional)}
          </Row>
        </div>
        <div>
          <div>
            <h1>
              <b>For Schools</b>
            </h1>
          </div>
          <Row>
            {this.renderPosts(forSchool)}
          </Row>
        </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {promotional: state.resources.EmPromotionalSubList, forSchool: state.resources.EmForSchoolSubList};
}

export default connect(mapStateToProps, {fetchEmPSubList, fetchEmFsSubList})(EducationalMaterialsList);
