import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import SubSectionButton from '../../shared/sub_section_button';

class ProgramCards extends Component {
  constructor(props, context) {
    super(props, context);
  }
  mobileProgramList() {
    return _.map(this.props.carouselItems, item => {
      if(item.name == "home-services-section"){
        return _.map(item.cards, (item,index) =>{
          return (
            <div className="programMobileData" key={index}>
              <div className="programMobileOuter">
                <span className="programMobileTitle">
                  {item.title}
                </span>
                <span className="programMobileImageSpan">
                  <img src={item.linked_file? item.linked_file.file: item.image.file} className="programMobileImage" />
                </span>
              </div>
            </div>
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
            <Col className="programData" key={index}>
              <Col xs={12} lg={2} id="programCol">
                <div>
                  <div className="programImageDiv">
                    <img src={item.linked_file? item.linked_file.file: item.image.file} />
                  </div>
                  <div className="programTitleDiv">
                    {item.title}
                  </div>
                </div>
              </Col>
            </Col>
          );
        })          
      }
    });
  }
  render() {
        return (
          <div className="programContainerParent programContainerParentTablet">
            <div className="programContainer">
              <div className="serviceRequestParentTablet">
                <div className="serviceRequestTitleTablet">
                  Check Service Request Number
                </div>
                <div className="serviceRequestInputTablet">
                  <input className="serviceRequestSearchTablet" type="text" placeholder="Service Request Number" >
                  </input>
                  <SubSectionButton title='SEARCH' />
                </div>
              </div>
              {this.mobileProgramList()}
              <Row>
                <div>
                  <Col className="programData serviceRequestCol"  >
                    <Col xs={12} lg={2} id="programCol">
                      <div className="serviceRequestParent">
                        <div className="serviceRequestTitle">
                          Check Service Request Number
                      </div>
                        <div className="serviceRequestInput">
                          <input className="serviceRequestSearch" type="text" placeholder="Service Request Number" >
                          </input>
                        </div>
                        <div className="searchProgramBtnDiv">
                          <SubSectionButton title='SEARCH' />
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

export default ProgramCards;
