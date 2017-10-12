import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import {Row} from 'react-bootstrap';
import LawsListItem from './Laws_list_item';

class LawsList extends Component {

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
      return (<LawsListItem title={Item.title} body={Item.content} key={Item.id}/>);
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

    const {laws, n} = this.props;

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

LawsList.propTypes = {
  laws: PropTypes.array.isRequired,
  n: PropTypes.string.isRequired
};

export default LawsList;
