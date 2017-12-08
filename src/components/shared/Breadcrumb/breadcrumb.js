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
    return _.map(breadcrumbList, (Item, index) => {
    let linkUrl = null;
    if(index == breadcrumbList.length - 1){
        linkUrl = Item.url
        ? <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + Item.url} >{Item.display_name}</Link>
        : <div>{Item.display_name}</div>
    }
    else{
        linkUrl = Item.url
        ? <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + Item.url} className='PreviousPath'>{Item.display_name}</Link>
        : <div className='PreviousPath'>{Item.display_name}</div>
    }

      return (
        <Breadcrumb.Item componentClass="span" key={Item.page_slug}>
          {linkUrl}
        </Breadcrumb.Item>
      )
    });
  }

  render() {
    return (
      <div className="BreadcrumbList">
        <div className='SContainer'>
          <Breadcrumb >
            <span className='fa fa-angle-left'></span>{this.renderBreadcrumbSec(this.props.breadcrumbList)}<span className='breadcrumbSymbol'>/</span>
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
