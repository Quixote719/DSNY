import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import Autosuggest from 'react-autosuggest';
import {Link} from "react-router-dom";
import SerialNoPage from "./serialNoPage";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';

class SerialNoRequest extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount(){
        this.props.getRidOffKeywords();            
        const keyword = this.props.match.params.keyword;
        this.props.getRidOfSearchResults(keyword);
    }
    render() {
        // const BannerText = {
        //     title: 'How to Get Rid of ...'
        //   }
        return (
            <div className = "howToGetRidOfParent">
            <Header title='Service Request Status' breadCrumbList= "" />
            <SerialNoPage setPaginationKey = {this.props.setPaginationKey} paginationKeyValue = {this.props.paginationKeyValue} pushHistory = {this.props} getRidOfSearchResults={this.props.getRidOfSearchResults?this.props.getRidOfSearchResults:""} noOfSearchResults ={this.props.noOfSearchResults?this.props.noOfSearchResults:0} getRidOfSearchResultsData={this.props.getRidOfSearchResultsData?this.props.getRidOfSearchResultsData:""} ridOffKeywords={this.props.ridOffKeywords?this.props.ridOffKeywords:""} keyword={this.props.match.params.keyword?this.props.match.params.keyword:""}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        noOfSearchResults: state.carouselDataReducer.noOfSearchResults,        
        getRidOfSearchResultsData: state.carouselDataReducer.getRidOfSearchResultsData,
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,
        paginationKeyValue: state.carouselDataReducer.paginationKeyValue,        
    }
  }
  
let actionList = {
    getRidOffKeywords: actions.getRidOffKeywords,    
    getRidOfSearchResults: actions.getRidOfSearchResults,
    setPaginationKey: actions.setPaginationKey,    
  };

  SerialNoRequest = connect(mapStateToProps, actionList)(SerialNoRequest);
export default SerialNoRequest;
