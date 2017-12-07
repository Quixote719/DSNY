import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/serialNoPage.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import Autosuggest from 'react-autosuggest';
import {Link} from "react-router-dom";
import paginationleftArrow from '../../../content/images/arrow_left_pagination.png';
import paginationrightArrow from '../../../content/images/arrow_right_pagination.png';
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';
import SubSectionButton from '../../shared/sub_section_button';
import ServiceRequestStatus from '../Program_Cards/serviceRequestStatus';
import dateFormat from 'dateformat';

class SerialNoPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          };
    }
    componentWillMount(){
        if(this.props.keyword !==""){
            this.props.setServiceRequestStatus(this.props.keyword);
        }
    }
    handleChange = (value) =>{
        this.setState({
          serviceRequest: value,
        })
      }
      handleSelect = () =>{
        if(this.state.serviceRequest && this.state.serviceRequest.trim().length !== 0){
          this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/serviceRequestStatus/"+ this.state.serviceRequest)
          this.props.setServiceRequestStatus(this.state.serviceRequest, this.successCallback);                
        }
      }
      successCallback = (success)=>{
        this.forceUpdate();
    }        
      contentServiceRequest = () =>{
          if(this.props.serviceRequestData){
              return(            
            <div>
                <div className = "currentStatusParent">
                    <div className = "currentStatusTitle">
                        Current Status
                    </div>
                    <div className = "currentStatusDetails">
                        {this.props.serviceRequestData?this.props.serviceRequestData.ServiceRequestStatusDescription:""}
                    </div>
                </div>
                <div className = "requestTypeCreatedParent">
                    <Row className = "requestTypeCreatedRow">
                        <Col xs = {12} sm = {6} className ="requestTypeCol">
                            <div className ="requestTypeTitle">
                                Request Title
                            </div>
                            <div className ="requestTypeData">
                                {this.props.serviceRequestData?this.props.serviceRequestData.ServiceRequestTypeName:""}
                            </div>
                        </Col>
                        <Col xs = {12} sm = {6}>
                            <div className ="createdOnTitle">
                                Created on
                            </div>
                            <div className ="createdOnData">
                                {
                                    dateFormat(this.props.serviceRequestData?this.props.serviceRequestData.CreatedDate:"", "mmmm dS, yyyy h:MMTT")
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>);
          }
          else{
              return(
                <div>Helooooo wrong status number</div>                
              );
          }

      }
    render() {
        
        return (
            <div className = "serviceRequestContainerParent">
            <div className = "container serviceRequestContainer">
                <div className = "serviceRequestNo">
                #{this.props.keyword}
                </div>
                <div className='patternLineGreen'></div>
                <div className = "serviceRequestDetailsParent">
                    {this.contentServiceRequest()}
                    <div className ="questionsCall">
                    If you have any questions regarding this request, please call 311.
                    </div>
                </div>
                <div className="serviceRequestParentTabletService">
                <div className="serviceRequestTitleTabletService">
                  Check Service Request Status
                </div>
                <div className="serviceRequestInputTabletService">
                {/* <input className="serviceRequestSearchTablet" type="text" placeholder="Service Request Number" >
                </input>              */}
                <ServiceRequestStatus classNameService = "serviceRequestSearchTabletService" handleChange = {this.handleChange}/>
                <SubSectionButton onClick = {this.handleSelect} title='SEARCH' />
                </div>
              </div>
            </div>
            </div>
        )
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
  
SerialNoPage = connect(mapStateToProps, actionList)(SerialNoPage);
export default SerialNoPage;
