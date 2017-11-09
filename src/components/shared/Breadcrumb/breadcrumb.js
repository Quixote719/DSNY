import _ from "lodash";
import React, {Component} from "react";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Breadcrumb} from 'react-bootstrap';

class BreadcrumbSec extends Component {

  renderBreadcrumbSec(breadcrumbList) {

    return _.map(breadcrumbList, Item => {

      let linkUrl = Item.url
        ? <Link onclick={console.log('tapped')} to={process.env.REACT_APP_SITE_RELATIVE_URL + Item.url}>{Item.display_name}</Link>
        : <div>{Item.display_name}</div>
      return (
        <Breadcrumb.Item key={Item.page_slug}>
          {linkUrl}
        </Breadcrumb.Item>
      )
    });
  }

  render() {
    return (
      <div className="BreadcrumbList">
        <div className='container'>
          <Breadcrumb>
            {this.renderBreadcrumbSec(this.props.breadcrumbList)}
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

BreadcrumbSec.propTypes = {
  breadcrumbList: PropTypes.array
};

export default BreadcrumbSec;
