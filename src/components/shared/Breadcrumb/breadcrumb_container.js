import _ from "lodash";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../../content/styles/banner.css';
import Title from './title';
import Breadcrumb from './breadcrumb';

class Header extends Component {

  render() {
    console.log(this.props.title);
    console.log(this.props.breadCrumbList);
    return (
      <div className="GBanner">
        <Breadcrumb breadcrumbList={this.props.breadCrumbList}/>
        <Title title={this.props.title}/>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  breadCrumbList: PropTypes.array
};

export default Header;
