import _ from "lodash";
import React, {Component} from "react";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Title extends Component {

  render() {

    return (

      <div className="BreadcrumbHeaderTitleSection">
        <div className='container'>
          {this.props.title}
        </div>
      </div>

    )
  }
}
Title.propTypes = {
  title: PropTypes.string
};

export default Title;
