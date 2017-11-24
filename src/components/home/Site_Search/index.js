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
import SearchPage from "./searchSitePage";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';

class SiteSearch extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount(){
        this.props.getSiteSearchKeywords();            
        const keyword = this.props.match.params.keyword;
        this.props.getSiteSearchResults(keyword);
        this.props.setSiteSearchValue(keyword);        
    }
    render() {
        const BannerText = {
            title: 'How to Get Rid of ...'
          }
        return (
            <div className = "howToGetRidOfParent">
            <Header title='Search' breadCrumbList= "" />
            <SearchPage paginationKeyValue = {this.props.paginationKeyValue} setPaginationKey = {this.props.setPaginationKey} siteClearBoxValue = {this.props.siteClearBoxValue} setSearchClearBoxValue ={this.props.setSearchClearBoxValue} setSiteSearchValue={this.props.setSiteSearchValue?this.props.setSiteSearchValue:""} siteSearchValue= {this.props.siteSearchValue?this.props.siteSearchValue:""} pushHistory = {this.props} getRidOfSearchResults={this.props.getSiteSearchResults?this.props.getSiteSearchResults:""} noOfSearchResults ={this.props.noOfSearchResults?this.props.noOfSearchResults:0} getRidOfSearchResultsData={this.props.siteSearchResultsData?this.props.siteSearchResultsData:""} ridOffKeywords={this.props.siteSearchKeywords?this.props.siteSearchKeywords:""} keyword={this.props.match.params.keyword?this.props.match.params.keyword:""}/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        siteClearBoxValue: state.carouselDataReducer.siteClearBoxValue,
        siteSearchValue: state.carouselDataReducer.siteSearchValue,
        noOfSearchResults: state.carouselDataReducer.noOfSearchResults,        
        siteSearchResultsData: state.carouselDataReducer.siteSearchResultsData,
        siteSearchKeywords: state.carouselDataReducer.siteSearchKeywords,        
        paginationKeyValue: state.carouselDataReducer.paginationKeyValue,                
    }
  }
  
let actionList = {
    setSearchClearBoxValue: actions.setSearchClearBoxValue,    
    setSiteSearchValue: actions.setSiteSearchValue,
    getSiteSearchKeywords: actions.getSiteSearchKeywords,    
    getSiteSearchResults: actions.getSiteSearchResults,
    setPaginationKey: actions.setPaginationKey,        
  };

SiteSearch = connect(mapStateToProps, actionList)(SiteSearch);
export default SiteSearch;
