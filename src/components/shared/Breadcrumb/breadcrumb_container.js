import _ from "lodash";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../content/styles/banner.css';
import Title from './title';
import Breadcrumb from './breadcrumb';

class Header extends Component {

  constructor(props) {
    super(props);
    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
  }

  renderTitle() {
    return (
      <div></div>
    )
  }

  renderBreadcrumb() {

    let blist = this.props.breadCrumbList;
    let l = _.dropRight(blist);
    let title = _.last(blist);
    let tClassName = this.props.has_children
      ? 'BreadcrumbHeaderTitleSection'
      : 'BreadcrumbHeaderTitleSectionNoBg'

    return (
      <div>
        <div><Breadcrumb breadcrumbList={l}/>
          <Title classsName={tClassName} title={title.display_name}/></div>
      </div>
    )
  }

  render() {
    return (
      <div className="GBanner">
        {this.renderBreadcrumb()}
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  type: PropTypes.string,
  breadCrumbList: PropTypes.array,
  has_children: PropTypes.bool
};

export default Header;
