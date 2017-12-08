import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';

class ServiceRequestStatus extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        placeholder: "Service Request Number",      
        serviceRequest: "",      
      };
  }
  handleSelect = (event) =>{
      if(event.key === 'Enter'){
        if(this.state.serviceRequest && this.state.serviceRequest.trim().length !== 0){
          this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/serviceRequestStatus/"+ this.state.serviceRequest)        
        }
        this.props.setServiceRequestStatus(this.state.serviceRequest);
      }
}
  handleChange = (event) =>{
    if(event.target.value.trim().length !== 0){
      this.setState({
        serviceRequest: event.target.value,
      })
      this.props.handleChange(event.target.value);      
    }
    else{
      this.setState({
        serviceRequest: "",
      })
      this.props.handleChange(event.target.value);            
    }
  }
  resetPlaceHolder = () =>{
    this.setState({
      placeholder: "Service Request Number"
    })
  }
  setPlaceHolder = () =>{
    this.setState({
      placeholder: ""
    })
  }
  clearSearchBox() {
    this.setState({
        serviceRequest: "",
    });
    this.props.handleChange("");                
}
  render() {
    if(window.location.pathname.indexOf("contact") > -1){
      return (
        <div>
        <input value = {this.state.serviceRequest} onBlur = {this.resetPlaceHolder} onFocus = {this.setPlaceHolder} className= {this.props.classNameService} type="text" onChange = {this.handleChange} onKeyDown={this.handleSelect} placeholder={this.state.placeholder}>
        </input>
        <i className="fa fa-times collectionSearch" onClick={() => { this.clearSearchBox() }} style={this.state.serviceRequest !== "" && this.state.serviceRequest !== undefined ? { display: 'block' } : { display: 'none' }} id="serviceRequestClear"></i>
        </div>
    )
    }
    else{
      return (
        <input value = {this.state.serviceRequest} onBlur = {this.resetPlaceHolder} onFocus = {this.setPlaceHolder} className= {this.props.classNameService} type="text" onChange = {this.handleChange} onKeyDown={this.handleSelect} placeholder={this.state.placeholder}>
        </input>
    )
    }
  }
}
function mapStateToProps(state) {
  return {
    serviceRequestData: state.carouselDataReducer.serviceRequestData,
  }
}

let actionList = {
  setServiceRequestStatus: actions.setServiceRequestStatus,
};

ServiceRequestStatus = connect(mapStateToProps, actionList)(ServiceRequestStatus);
export default withRouter(ServiceRequestStatus);
