import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchLawsSubList} from "../../../actions";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import {Row} from 'react-bootstrap';
import LawsListItem from './Laws_list_item';

class LawsList extends Component {
  componentDidMount() {
    this.props.fetchLawsSubList();
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

  renderPosts(laws) {
    return _.map(this.firstN(laws, 8), Item => {
      return (<LawsListItem title={Item.title.rendered} body={Item.content.rendered} key={Item.id}/>);
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

    const {laws} = this.props;

    if (_.isEmpty(laws)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <SubSectionHeader title='Laws'/>
        <Row>
          {this.renderPosts(laws)}
        </Row>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {laws: state.resources.LawsSubList};
}

export default connect(mapStateToProps, {fetchLawsSubList})(LawsList);
