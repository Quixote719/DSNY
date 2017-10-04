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
  componentWillMount() {
    this.props.programData();
  }
  mobileProgramList() {
    return _.map(this.props.programListData, item => {
      return (
        <div className="programMobileData" key={item.programTitle}>
          <div className="programMobileOuter">
            <span className="programMobileTitle">
              {item.programTitle}
            </span>
            <span className="programMobileImageSpan">
              <img src={item.programImage} className="programMobileImage" />
            </span>
          </div>
        </div>
      );
    });
  }
  programsList() {
    return _.map(this.props.programListData, item => {
      return (
        <Col className="programData" key={item.programImage}>
          <Col xs={12} lg={2} id="programCol">
            <div>
              <div className="programImageDiv">
                <img src={item.programImage} />
              </div>
              <div className="programTitleDiv">
                {item.programTitle}
              </div>
            </div>
          </Col>
        </Col>
      );
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

function mapStateToProps(state) {
  return {
    programListData: state.carouselDataReducer.programListData,
  }
}

let actionList = {
  programData: actions.programData,
};

ProgramCards = connect(mapStateToProps, actionList)(ProgramCards);

export default ProgramCards;
