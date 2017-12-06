import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ServiceRequestStatus extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        serviceRequest: "",      
      };
  }
  componentWillMount(){
    if(this.props.match.params.keyword !==""){
        this.setState({
          serviceRequest: this.props.match.params.keyword
        });
    }
    else{
      this.setState({
        serviceRequest: ""
      });
    }
}
  handleSelect = (event) =>{
    if(event.key === 'Enter'){
      this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/serviceRequestStatus/"+ this.state.serviceRequest)
    }
}
  handleChange = (value) =>{
    this.setState({
      serviceRequest: value,
    })
    this.props.handleChange(value);
  }
  render() {
      return (
            <input value = {this.state.serviceRequest} className= {this.props.classNameService} type="text" onChange = {e => this.handleChange(e.target.value)} onKeyDown={this.handleSelect} placeholder="Service Request Number">
            </input>
        )
  }
}

export default withRouter(ServiceRequestStatus);
