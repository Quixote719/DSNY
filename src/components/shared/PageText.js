import React, {Component} from "react";
import PropTypes from 'prop-types';

class PageText extends Component {
      constructor(props, context) {
        super(props, context);
      }
  render() {
    return (
        <div className = "dsnyParagraph" dangerouslySetInnerHTML={{__html: this.props.PageExplanation.content}}>
        </div>
    );
  };
};


export default PageText;
