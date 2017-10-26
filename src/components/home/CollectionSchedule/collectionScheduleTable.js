import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/collectionSchedule.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import { Link } from "react-router-dom";

let result = ["MTW", "MTTHW", "FSAT"];
let days = [{ id: "M", alias: "MON" }, { id: "T", alias: "TUE" }, { id: "W", alias: "WED" }, { id: "H", alias: "THU" },
{ id: "F", alias: "FRI" }, { id: "S", alias: "SAT" }];
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
                <img src={require('../../../content/images/collectionschedule-garbage.svg')} className="garbageIcon" />
                <div className ="garbageTitle">
                    GARBAGE
                </div>
            </div>
        );
        }
        else if(index == 1){
            return(
                <div>
                    <img src={require('../../../content/images/collectionschedule-recycling.svg')} className="recyclingIcon" />                <div className ="recyclingTypeTitle">
                    <div className ="recycleTitle">
                        RECYCLING
                    </div>
                </div>
                </div>);
        }
        else{
            return(
                <div>
                    <img src={require('../../../content/images/collectionschedule-organics.svg')} className="organicsIcon" />
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
                    <td id ={this.props.arrayLength == index ?"lastTableRow":""} className={evenRows.includes(indexRows)?"evenRowsSchedule":oddRows.includes(indexRows)?"oddRowsSchedule":""}>
                    {value.includes(day.id)?this.garbageCollection(index):<div></div>}
                    </td>
                );
            })
        }
    }
    daysTable = () => {
        return _.map(this.props.collectionScheduleData, (value,index)=> {
            if(value !==""){
                return(<tr>
                    {this.tableCell(value,index)}
                </tr>);
            }
        } );
    }
    tableHeader = () => {
        return _.map(days, day => {
            return(            
            <th className = {days[today] && days[today].alias == day.alias?"currentDay":"normalDay"}>
                {day.alias}
            </th>
            );

        })
    }
    render() {
        return (
            <div className="collectionScheduleTableParent">
                <div className="nonServiceDay">
                    Today is holiday. There is no service today!
                </div>
                <table style={this.props.collectionScheduleData == "noValue"?{display:'none'}:{display:'block'}}className="collectionScheduleTable">
                    <thead>
                    <tr>
                    {this.tableHeader()}
                    </tr>
                    </thead>
                  <tbody>
                  {this.daysTable()}
                  </tbody>
                </table>
            </div>
        )
    }
}
export default CollectionScheduleTable;
