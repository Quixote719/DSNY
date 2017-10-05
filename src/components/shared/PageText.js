import React, {Component} from "react";
import PropTypes from 'prop-types';

class PageText extends Component {
  render() {
    return (
        <div className = "dsnyParagraph" dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default PageText;
