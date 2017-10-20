// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import * as actions from '../../../actions/actions_home';
// import { connect } from 'react-redux';
// import styles from '../../../content/styles/home.css';
// import { Grid, Row, Col } from 'react-bootstrap';
// import _ from "lodash";
// import Banner from '../../shared/banner';
// import Autosuggest from 'react-autosuggest';
// import {Link} from "react-router-dom";
// import SearchPage from "./searchPage";
// import Header from '../../shared/Breadcrumb/breadcrumb_container.js';

// class HowToGetRidOfDetailsItem extends Component {
//     constructor(props, context) {
//         super(props, context);
//     }
//     componentWillMount(){
//         const keyword = this.props.match.params.keyword;        
//         this.props.getRidOffItemDetails(keyword);            
//     }
//     render() {
//         return (
//             <div className = "howToGetRidOfParent">
//             </div>
//         )
//     }
// }
// function mapStateToProps(state) {
//     return {
//         noOfSearchResults: state.carouselDataReducer.noOfSearchResults,        
//         getRidOfSearchResultsData: state.carouselDataReducer.getRidOfSearchResultsData,
//         ridOffKeywords: state.carouselDataReducer.ridOffKeywords,        
//     }
//   }
  
// let actionList = {
//     getRidOffItemDetails: actions.getRidOffItemDetails,    
//     getRidOfSearchResults: actions.getRidOfSearchResults,
//   };

//   HowToGetRidOfDetailsItem = connect(mapStateToProps, actionList)(HowToGetRidOfDetailsItem);
// export default HowToGetRidOfDetailsItem;
