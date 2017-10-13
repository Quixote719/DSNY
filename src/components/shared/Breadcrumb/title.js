import _ from "lodash";
import React, {Component} from "react";
import Link from '../CardDetails/link'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Title extends Component {

  render() {
    return (
      <div className={this.props.classsName}>
        <div className='container'>
          {this.props.title}
        </div>
      </div>
    )
  }
}
Title.propTypes = {
  title: PropTypes.string,
  classsName: PropTypes.string
};

export default Title;
