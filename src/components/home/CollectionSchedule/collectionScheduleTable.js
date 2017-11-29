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
class CollectionScheduleTable extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    garbageCollection = (index) =>{
        if(index == 0 ){
        return(
            <div>
                <img src={require('../../../content/images/collectionschedule-garbage.svg')} className="garbageIcon" alt="Garbage Icon"/>
                <div className ="garbageTitle">
                    GARBAGE
                </div>
            </div>
        );
        }
        else if(index == 1){
            return(
                <div>
                    <img src={require('../../../content/images/collectionschedule-recycling.svg')} className="recyclingIcon" alt="Recycling Icon"/>                <div className ="recyclingTypeTitle">
                    <div className ="recycleTitle">
                        RECYCLING
                    </div>
                </div>
                </div>);
        }
        else{
            return(
                <div>
                    <img src={require('../../../content/images/collectionschedule-organics.svg')} className="organicsIcon" alt="Organics Icon"/>
                    <div className ="organicsTitle">
                        ORGANICS
                    </div>
                </div>
        );            
        }
    }
    tableCell = (value,index) => {
        var evenRows = [0, 2, 4];
        var oddRows = [1, 3, 5];  
        if(value !== ""){
            return _.map(days, (day,indexRows) => {
                return(
                    <td  key ={indexRows} id ={this.props.arrayLength == index ?"lastTableRow":""} className={evenRows.includes(indexRows)?"evenRowsSchedule":oddRows.includes(indexRows)?"oddRowsSchedule":""}>
                    {value.includes(day.id)?this.garbageCollection(index):<div></div>}
                    </td>
                );
            })
        }
    }
    daysTable = () => {
        return _.map(this.props.collectionScheduleData, (value,index)=> {
            if(value !==""){
                return(<tr key ={index}>
                    {this.tableCell(value,index)}
                </tr>);
            }
        } );
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
            <tr className={evenRows.includes(index)?"evenRowsSchedule":oddRows.includes(index)?"oddRowsSchedule":""}>      
            <th className = {days[today] && days[today].alias == day.alias?"currentDay":"normalDay"}>
                {day.alias}
            </th>
            {this.tableCellMobile(day)}
            </tr>                
            );

       })
    }
    tableCellMobile = (day) => {

        return _.map(this.props.collectionScheduleData, (value,indexRows) => {
            if(value !==""){
                return(
                    <td className={this.props.arrayLength == 2?"mobileCollectionTableData":this.props.arrayLength == 1?"mobileCollectionTableDataTwo":"mobileCollectionTableDataOne"}>
                    {value.includes(day.id)?this.garbageCollection(indexRows):""}
                    </td>
                );
            }
        })
    }
    desktopTable = () =>{
        return(
            <table id ={this.props.collectionScheduleData == "noValue"?"noDesktopTable":"desktopTable"} className={!this.props.holidayData? "holidayCollectionScheduleTable desktopCollectionSchedule":"collectionScheduleTable desktopCollectionSchedule"}>
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
            <table id = {this.props.collectionScheduleData == "noValue"?"noMobileTable":"mobileTable"} className={!this.props.holidayData? "holidayCollectionScheduleTable mobileCollectionSchedule":"collectionScheduleTable mobileCollectionSchedule"}>
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
export default CollectionScheduleTable;
