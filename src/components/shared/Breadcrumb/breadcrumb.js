import _ from "lodash";
import React, {Component} from "react";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Breadcrumb} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions_home';

class BreadcrumbSec extends Component {
  renderBreadcrumbSec(breadcrumbList) {
    return _.map(breadcrumbList, Item => {

      let linkUrl = Item.url
        ? <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + Item.url} >{Item.display_name}</Link>
        : <div>{Item.display_name}</div>
      return (
        <Breadcrumb.Item key={Item.page_slug}>
          {linkUrl}
        </Breadcrumb.Item>
      )
    });
  }

  render() {
    console.log("Breadcrumb rerendered!!!!!!!!!!!!!!!!!!!")
    return (
      <div className="BreadcrumbList">
        <div className='container'>
          <Breadcrumb>
            {this.renderBreadcrumbSec(this.props.breadcrumbList)}<span className='breadcrumbSymbol'>/</span>
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

BreadcrumbSec.propTypes = {
  breadcrumbList: PropTypes.array
};
let actionList = {
  setActiveNavTab: actions.setActiveNavTab
};
BreadcrumbSec = connect(null,actionList)(BreadcrumbSec);
export default BreadcrumbSec;
