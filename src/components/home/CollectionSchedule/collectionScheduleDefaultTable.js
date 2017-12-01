import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/collectionSchedule.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import { Link } from "react-router-dom";

let result = ["MTW", "MTTHW", "FSAT"];
let days = [{ id: "Monday", alias: "MON" }, { id: "Tuesday", alias: "TUE" }, { id: "Wednesday", alias: "WED" }, { id: "Thursday", alias: "THU" },
{ id: "Friday", alias: "FRI" }, { id: "Saturday", alias: "SAT" }];
let d=new Date();
let today = d.getDay() - 1;
class CollectionScheduleDefaultTable extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    tableCell = (value,index) => {
        var evenRows = [0, 2, 4];
        var oddRows = [1, 3, 5];  
        return _.map(days, (day,index) =>{
            return(
                <td className = {(evenRows.indexOf(index) > -1)?"defaultTableCell evenRowsSchedule":(oddRows.indexOf(index) > -1)?"defaultTableCell oddRowsSchedule":""}>
                </td>
            );
        })
    }
    daysTable = () => {
        for(var i = 0; i<3; i++){
            return(
                <tr>
                    {this.tableCell()}
                </tr>);
        }
    }
    tableHeader = () => {
        return _.map(days, (day,index) => {
            return(            
            <th key ={index} className = {days[today] && days[today].alias == day.alias?"currentDay":"normalDay"}>
                {day.alias}
            </th>
            );

        })
    }
    tableHeaderMobile = () => {
        var evenRows = [0, 2, 4];
        var oddRows = [1, 3, 5];  
        return _.map(days, (day,index) => {
            return(    
            <tr className={(evenRows.indexOf(index) > -1)?"evenRowsSchedule":(oddRows.indexOf(index)> -1)?"oddRowsSchedule":""}>      
            <th className = {days[today] && days[today].alias == day.alias?"currentDay":"normalDay"}>
                {day.alias}
            </th>
            {this.tableCellMobile(day)}
            </tr>                
            );

       })
    }
    tableCellMobile = (day) => {
                return(
                    <td className="tableDefaultMobile">
                    </td>
                );
    }
    desktopTable = () =>{
        return(
            <table id ={this.props.collectionScheduleData == "noValue"?"noDesktopTable":"desktopTable"} className={!this.props.holidayData? "holidayCollectionScheduleTableNoTable desktopCollectionSchedule":"collectionScheduleTable desktopCollectionSchedule"}>
                    <thead>
                        <tr>
                        {this.tableHeader()}
                        </tr>
                    </thead>
                <tbody>
                    {this.daysTable()}
                </tbody>
            </table>
        );

    }
    mobileTable = () =>{
        return(
            <table id = {this.props.collectionScheduleData == "noValue"?"noMobileTable":"mobileTable"} className={!this.props.holidayData? "holidayCollectionScheduleTableNoTable mobileCollectionSchedule":"collectionScheduleTable mobileCollectionSchedule"}>
                <tbody>
                    {this.tableHeaderMobile()}
                </tbody>
            </table>
        );

    }
    render() {      
        return (
            <div className="collectionScheduleTableParent">
                {this.desktopTable()}
                {this.mobileTable()}
            </div>
        )
    }
}
export default CollectionScheduleDefaultTable;
