import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchEmPSubList} from "../../../actions";
import SubSectionHeaderImage from '../../shared/sub_section_header_image';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleBody from '../../shared/Card_title_body';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class EducationalMaterialsList extends Component {
  componentDidMount() {
    this.props.fetchEmPSubList();
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
      return (<CardTitleBody className='subSectioncardTB' title={Item.title.rendered} body={Item.content.rendered} key={Item.id}/>);
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
        <SubSectionHeaderImage imgSrc="http://dsnydev.wpengine.com/wp-content/uploads/2017/08/cropped-about_history-while-you-sleep-truck_0815-150x150.jpg" title='Educational Materials' body="<p>Lorem ipsum dolor sit amet, cum an erant instructior. Est ut eros dolor inciderint. Vis sonet iudico soluta ne. Omnis minim no duo, sit voluptaria persequeris comprehensam ei. Aeque essent scaevola no vix, wisi ullum disputationi ei est. At nec affert voluptatum, justo adversarium liberavisse pri eu.</p>"/>
        <div className='container'>
          <Row>
            {this.renderPosts(promotional)}
          </Row>
        </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {promotional: state.resources.EmPromotionalSubList};
}

export default connect(mapStateToProps, {fetchEmPSubList})(EducationalMaterialsList);
