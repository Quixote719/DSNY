import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from '../../../content/styles/collectionSchedule.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import { Link } from "react-router-dom";

class RoutingTimes extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    districtInfo = ()=>{
        var districtData = this.props.collectionScheduleInfo.sanitationDistrict;
        if(districtData.length>2){
            var districtData = districtData.substr(districtData.length-2)
        }
        return districtData;
    }
    render() {
        const CommericialTime = this.props.routingData.CommercialRoutingTime
        const ResidentialRoutingTime = this.props.routingData.ResidentialRoutingTime
        const MixedUseRoutingTime = this.props.routingData.MixedUseRoutingTime
        
        return (
            <div id = {this.props.collectionScheduleData == "noValue"?"noMobileTable":"mobileTable"}>
                <div className="routingTitle">Enforcement Routing Times</div>
                    <div className="districtInfo">Commercial:</div>
                    <div className = "commercialTime">{CommericialTime?CommericialTime.replace(/Daily:/i,""):""}</div>
                    <div>Residential:</div>
                    <div className = "commercialTime">{ResidentialRoutingTime?ResidentialRoutingTime.replace(/Daily:/i,""):""}</div>
                    <span>Mixed-Use: </span>
                    <span className = "commercialTime">{MixedUseRoutingTime?MixedUseRoutingTime:""}</span>
                    <div className="districtInfo">Sanitation District (same as Community Board):</div>
                    <span>
                        {this.props.collectionScheduleInfo?this.props.collectionScheduleInfo.firstBoroughName:""} District 
                    </span>
                    <span>
                        {this.props.collectionScheduleInfo?" "+this.districtInfo():""}
                    </span>
                    {/* <div className="moreCollectionInfo">
                    More Collection Information
                    </div> */}
            </div>
        )
    }
}
export default RoutingTimes;
