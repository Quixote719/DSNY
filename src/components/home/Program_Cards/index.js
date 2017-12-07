import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import SubSectionButton from '../../shared/sub_section_button';
import { Link } from 'react-router-dom';
import ServiceRequestStatus from './serviceRequestStatus';
import { withRouter } from 'react-router';

class ProgramCards extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      serviceRequest: "",      
    };
  }
  handleChange = (value) =>{
    this.setState({
      serviceRequest: value,
    })
  }
  handleSelect = () =>{
    if(this.state.serviceRequest.trim().length !== 0){
      this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/serviceRequestStatus/"+ this.state.serviceRequest)
      this.props.setServiceRequestStatus(this.state.serviceRequest);      
    }
  }
  mobileProgramList() {
    return _.map(this.props.carouselItems, item => {
      if(item.name == "home-services-section"){
        return _.map(item.cards, (item,index) =>{
          return (
            item.linked_page.url
            ?
            <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + item.linked_page.url}>
              <div className="programMobileData" key={index}>
                <div className="programMobileOuter">
                  <span className="programMobileTitle">
                    {item.title}
                  </span>
                  <span className="programMobileImageSpan">
                    <img  alt = {item.title}  src={item.featured_image? item.featured_image.base_path + item.featured_image.file: item.linked_file?item.linked_file.file:""} className="programMobileImage" />
                  </span>
                </div>
              </div>
            </Link>
            :
            <Link to={item.linked_url} target="_blank">
            <div className="programMobileData" key={index}>
              <div className="programMobileOuter">
                <span className="programMobileTitle">
                  {item.title}
                </span>
                <span className="programMobileImageSpan">
                  <img  alt = {item.title}  src={item.featured_image? item.featured_image.base_path + item.featured_image.file: item.linked_file?item.linked_file.file:""} className="programMobileImage" />
                </span>
              </div>
            </div>
          </Link>
          );
        })          
      }        
    });
  }
  programsList() {
    return _.map(this.props.carouselItems, item => {
      if(item.name == "home-services-section"){
        return _.map(item.cards, (item,index) =>{
            return (
              item.linked_page.url
              ?<Link to={process.env.REACT_APP_SITE_RELATIVE_URL + item.linked_page.url}>
                <Col className="programData" key={index}>
                  <Col xs={12} lg={2} id="programCol" className ="programCol">
                    <div>
                      <div className="programImageDiv">
                        <img alt = {item.title} src={item.featured_image? item.featured_image.base_path + item.featured_image.file: item.linked_file?item.linked_file.file:""} />
                      </div>
                      <div className="programTitleDiv">
                        {item.title}
                      </div>
                    </div>
                  </Col>
                </Col>
              </Link>
              :<Link to={item.linked_url} target="_blank">
                  <Col className="programData" key={index}>
                    <Col xs={12} lg={2} id="programCol" className ="programCol">
                      <div>
                        <div className="programImageDiv">
                          <img alt = {item.title} src={item.featured_image? item.featured_image.base_path + item.featured_image.file: item.linked_file?item.linked_file.file:""} />
                        </div>
                        <div className="programTitleDiv">
                          {item.title}
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Link>
            );         
        })          
      }
    });
  }
  render() {
    console.log("this.state.serviceRequest")
    console.log(this.state.serviceRequest)

        return (
          <div className="programContainerParent programContainerParentTablet">
            <div className="programContainer">
              <div className="serviceRequestParentTablet">
                <div className="serviceRequestTitleTablet">
                  Check Service Request Status
                </div>
                <div className="serviceRequestInputTablet">
                {/* <input className="serviceRequestSearchTablet" type="text" placeholder="Service Request Number" >
                </input>              */}
                <ServiceRequestStatus classNameService = "serviceRequestSearchTablet" handleChange = {this.handleChange}/>
                <SubSectionButton onClick = {this.handleSelect} title='SEARCH' />
                </div>
              </div>
              {this.mobileProgramList()}
              <Row>
                <div>
                  <Col className="programData serviceRequestCol"  >
                    <Col xs={12} lg={2} id="programCol" className ="programColSearch">
                      <div className="serviceRequestParent">
                        <div className="serviceRequestTitle">
                          Check Service Request Status
                        </div>
                        <div className="serviceRequestInput">
                        <ServiceRequestStatus classNameService = {"serviceRequestSearch"} handleChange = {this.handleChange}/>
                        </div>
                        <div className="searchProgramBtnDiv">
                          <SubSectionButton onClick = {this.handleSelect}  title='SEARCH' />
                        </div>
                      </div>
                    </Col>
                  </Col>
  
                </div>
                {this.programsList()}
              </Row>
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

ProgramCards = connect(mapStateToProps, actionList)(ProgramCards);
export default withRouter(ProgramCards);
