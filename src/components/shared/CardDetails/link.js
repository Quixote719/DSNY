import React from "react";
import {Link as ReactLink} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions_home';

class Link extends React.Component {

  parseTo(to) {

    let parser = document.createElement('a');
    parser.href = to;
    return parser;

  }

  isInternal(to) {

    // If it's a relative url such as '/path', 'path' and does not contain a protocol we can assume it is internal.

    if (to.indexOf("://") === -1)
      return true;

    const toLocation = this.parseTo(to);
    return window.location.hostname === toLocation.hostname;

  }
  checkBreadCrumbInput(url){
    if(url===process.env.REACT_APP_SITE_RELATIVE_URL+'/') {
      this.props.setActiveNavTab("home")
    }
    else if(url.includes("resources")){
      this.props.setActiveNavTab("resources")
    }
    else if(url.includes("services")){      
      this.props.setActiveNavTab("services")
    }    
    else if(url.includes("about")){
      this.props.setActiveNavTab("about")
    }   
    else if(url.includes("our-work")){
      this.props.setActiveNavTab("our-work")
    }    
    else if(url.includes("contact")){
      this.props.setActiveNavTab("contact")
    }
  }
  render() {
    const {
      to,
      children,
      ...rest
    } = this.props;
    const isInternal = this.isInternal(to);


    if (isInternal) {
      return (
        <ReactLink onClick={()=>{this.checkBreadCrumbInput(to)}}  to={to} {...rest}>{children}</ReactLink>
      );
    } else {
      return (
        <a href={to} onClick={()=>{this.checkBreadCrumbInput(to)}} target="_blank" {...rest}>{children}</a>
      );
    }

  }
}
let actionList = {
  setActiveNavTab: actions.setActiveNavTab
};
Link = connect(null,actionList)(Link);
export default Link;
