import _ from "lodash";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../content/styles/banner.css';
import Title from './title';
import Breadcrumb from './breadcrumb';
import Banner from '../banner'

class Header extends Component {

  constructor(props) {
    super(props);
    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
  }

  renderTitle() {
    const {title, body} = this.props;

    if (title) {

      return (
        <div><Title title={title}/></div>
      )
    }
  }

  renderBreadcrumb() {
    let blist = this.props.breadCrumbList;
    const {title, body} = this.props;
    if (blist.length > 2) {
      let l = _.dropRight(blist);
      let title = _.last(blist);
      let tClassName = this.props.has_children
        ? 'BreadcrumbHeaderTitleSection'
        : 'BreadcrumbHeaderTitleSectionNoBg'
      return (
        <div>
          <Breadcrumb breadcrumbList={l}/> {this.renderTitle()}
        </div>

      )
    } else {
      let BannerText = {};
      BannerText.title = title;
      BannerText.content = body;
      return (
        <div><Banner text={BannerText}/></div>
      )
    }
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
