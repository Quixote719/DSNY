import React, {Component} from "react";

class PageText extends Component {

  render() {
    return (
        <div className = "dsnyParagraph" dangerouslySetInnerHTML={{__html: this.props.PageExplanation.content}}>
        </div>
    );
  };
};


export default PageText;
