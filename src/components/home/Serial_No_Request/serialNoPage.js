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
import SerialNoAutoSuggest from './serialNoAutoSuggest';
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';
import SubSectionButton from '../../shared/sub_section_button';
import ServiceRequestStatus from '../Program_Cards/serviceRequestStatus';

class SerialNoPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          };
    }
    componentWillMount(){
        this.setState({
            serviceRequest: this.props.keyword
          });
    }
    handleChange = (value) =>{
        this.setState({
          serviceRequest: value,
        })
      }
    render() {
        
        return (
            <div className = "serviceRequestContainerParent">
            <div className = "container serviceRequestContainer">
                <div className = "serviceRequestNo">
                {this.props.keyword}
                </div>
                <div className='patternLineGreen'></div>
                <div className="serviceRequestParentTabletService">
                <div className="serviceRequestTitleTabletService">
                  Check Service Request Status
                </div>
                <div className="serviceRequestInputTabletService">
                {/* <input className="serviceRequestSearchTablet" type="text" placeholder="Service Request Number" >
                </input>              */}
                <ServiceRequestStatus classNameService = "serviceRequestSearchTabletService" handleChange = {this.handleChange}/>
                <SubSectionButton title='SEARCH' />
                </div>
              </div>
            </div>
            </div>
        )
    }
}
export default SerialNoPage;
