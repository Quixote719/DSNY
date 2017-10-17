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
import SearchPage from "./searchPage";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';

class HowToGetRidOf extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount(){
        this.props.getRidOffKeywords();            
        const keyword = this.props.match.params.keyword;
        this.props.getRidOfSearchResults(keyword);
    }
    render() {
        const BannerText = {
            title: 'How to Get Rid of ...'
          }
        return (
            <div className = "howToGetRidOfParent">
            <Header title='How to Get Rid of ...' breadCrumbList= "" />
            <SearchPage getRidOfSearchResults={this.props.getRidOfSearchResults?this.props.getRidOfSearchResults:""} noOfSearchResults ={this.props.noOfSearchResults?this.props.noOfSearchResults:0} getRidOfSearchResultsData={this.props.getRidOfSearchResultsData?this.props.getRidOfSearchResultsData:""} ridOffKeywords={this.props.ridOffKeywords?this.props.ridOffKeywords:""} keyword={this.props.match.params.keyword?this.props.match.params.keyword:""}/>
            {/* <Header title={cItems.title} breadCrumbList={cItems.breadcrumb} body={cItems.header_content}/> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        noOfSearchResults: state.carouselDataReducer.noOfSearchResults,        
        getRidOfSearchResultsData: state.carouselDataReducer.getRidOfSearchResultsData,
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,        
    }
  }
  
let actionList = {
    getRidOffKeywords: actions.getRidOffKeywords,    
    getRidOfSearchResults: actions.getRidOfSearchResults,
  };

  HowToGetRidOf = connect(mapStateToProps, actionList)(HowToGetRidOf);
export default HowToGetRidOf;
