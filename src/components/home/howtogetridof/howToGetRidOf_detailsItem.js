import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/howToGetRidOfDetails.css';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import Autosuggest from 'react-autosuggest';
import {Link} from "react-router-dom";
import SearchPage from "./searchPage";
import Header from '../../shared/Breadcrumb/breadcrumb.js';

class HowToGetRidOfDetailsItem extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount(){
        const keyword = this.props.match.params.itemName;        
        this.props.getRidOffItemDetails(keyword);            
    }
    ridOfItemDetails = () =>{

        if(this.props.getRidOfItemDetailsData){
        return _.map(this.props.getRidOfItemDetailsData.sections.sections, (item,index) => {
            return (
                <div className = "container ridOfItemDetailsContainer" key={index}>
                <div className="ridOfItemHeader">
                    {item.header}
                </div>
                <div className='patternLineGreen'></div>
                <div dangerouslySetInnerHTML={{
                    __html: item.content
                }} className = "ridOfContent" />
                </div>
            );
        });
        }
      };
    render() {
        let breadcrumb = [
            {
            page_slug: "home",
            display_name: "Home",
            url: "/"
            },
            {
            page_slug: "how-to-get-rid-of",
            display_name: "How to Get Rid of ...",
            url: "/howtogetridof"
            }
            ]
        return (
            <div className = "howToGetRidOfItemDetailsParent">
            <div className ="howToGetRidOfItemDetails">
            <Header breadcrumbList = {breadcrumb} />
            </div>
                {this.ridOfItemDetails()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        getRidOfItemDetailsData: state.carouselDataReducer.getRidOfItemDetailsData,        
    }
  }
  
let actionList = {
    getRidOffItemDetails: actions.getRidOffItemDetails,    
  };

HowToGetRidOfDetailsItem = connect(mapStateToProps, actionList)(HowToGetRidOfDetailsItem);
export default HowToGetRidOfDetailsItem;
