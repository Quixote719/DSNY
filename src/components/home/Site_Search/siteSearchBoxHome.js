import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import {connect} from 'react-redux';
import styles from '../../../content/styles/home.css';
import '../../../content/styles/howtogetridof.css';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../../about/index';
import {Link} from "react-router-dom";
import $ from 'jquery';
import { withRouter } from 'react-router'


class SiteSearchBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchResultPage = this.searchResultPage.bind(this);                
        this.handleKeyPress = this.handleKeyPress.bind(this);                
        this.state = {
            showModal: false,
            value: "",
            suggestions: [],
            placeholder: "Search"
          };
    }

    getSuggestionValue = suggestion => suggestion;
    renderSuggestion = suggestion => (
      <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}/site-search/${suggestion}`}>
        <div className ="ridOfSuggestions" onClick = {this.props.showModal}>
          {suggestion}
        </div>
        </Link>
      );

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : (this.props.ridOffKeywords?this.props.ridOffKeywords:[]).filter(lang =>
          lang.toLowerCase().slice(0, inputLength) === inputValue
        );
      };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
      onChange = (event, { newValue }) => {
        var reg=/[\~\+\&\!\@\$\%\^\*\_\|]+/;
        if(reg.test(newValue)){
            event.preventDefault();            
        }
        else{
        this.setState({
            value: newValue,
        });
        }
      };
    resetPlaceHolder = () =>{
      this.setState({
        placeholder: "Search"
      })
    }
    setPlaceHolder = () =>{
      this.setState({
        placeholder: " "
      })
    }
    searchResultPage(event,{suggestion}){
      // this.setState({
      //     checkInputresults: "clearBoxNotChecked",
      //     searchResult: ""
      //  });
      this.props.setSearchClearBoxValue("clearBoxNotChecked")      
      this.props.setSiteSearchValue(suggestion);
      this.props.getSiteSearchResults(suggestion);   
      this.props.setPaginationKey(1);            
      this.setState({
        value: "",
        placeholder: "Search"          
      });           
      document.getElementById("siteSearch").blur();  
      if(this.props.showModal)
      this.props.showModal();
    }
    siteSearchIcon = () =>{
      if(this.state.value.trim().length !== 0){
        this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+ "/site-search/"+this.state.value)
        this.props.setSearchClearBoxValue("clearBoxNotChecked")      
        this.props.setSiteSearchValue(this.state.value);
        this.props.getSiteSearchResults(this.state.value);
        this.props.setPaginationKey(1);
        this.setState({
          value: "",
          placeholder: "Search"          
        });
        document.activeElement.blur();
        if(this.props.showModal)
          this.props.showModal();
      }        
    }
    handleKeyPress = (event) => {
      if(this.state.value.trim().length == 0 && event.keyCode == 32){
        event.preventDefault();
      }   
      if(event.key == 'Enter'){ 
        // this.props.setSearchClearBoxValue("clearBoxNotChecked")        
        // this.props.setSiteSearchValue(this.state.value);        
        // this.props.getSiteSearchResults(this.state.value);    
        // document.getElementById("siteSearchLink").click();
        this.siteSearchIcon();
      }
    }
    clearSearchBox(){
      this.setState({
          value: "",
       });
  }
    render() {

        return (
            <div className = "siteSearchBoxParent">
                        <Autosuggest
                            suggestions={this.state.suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            onSuggestionSelected={this.searchResultPage}
                            inputProps={{
                                value: this.state.value,
                                onChange: this.onChange,
                                id: "siteSearch",
                                className: "siteSearch",
                                placeholder: this.state.placeholder,
                                onBlur: this.resetPlaceHolder,
                                onFocus: this.setPlaceHolder,
                                onKeyPress: this.handleKeyPress,          
                                onKeyDown: this.handleKeyPress,                                
                            }}/>
                        {/* <Link onClick = {this.props.showModal} to = {process.env.REACT_APP_SITE_RELATIVE_URL+ "/site-search/"+this.state.value} id = "siteSearchLink"> */}
                        <i className="fa fa-times collectionSearch" onClick = {()=>{this.clearSearchBox()}} style={this.state.value!==""?{display: 'block'}:{display: 'none'}} id="siteSearchResults"></i>
                        <i className="fa fa-search searchMessagesInputIcon" id = "siteSearchLink" onClick = {this.siteSearchIcon} ></i>
                        {/* </Link> */}
            </div>
    )
  } 
}
function mapStateToProps(state) {
  return {
      paginationKeyValue: state.carouselDataReducer.paginationKeyValue,            
      siteClearBoxValue: state.carouselDataReducer.siteClearBoxValue,    
      siteSearchValue: state.carouselDataReducer.siteSearchValue,                
  }
}

let actionList = {
  setPaginationKey: actions.setPaginationKey,      
  setSearchClearBoxValue: actions.setSearchClearBoxValue,      
  getSiteSearchResults: actions.getSiteSearchResults,  
  setSiteSearchValue: actions.setSiteSearchValue,
};

SiteSearchBox = withRouter(connect(mapStateToProps, actionList)(SiteSearchBox));
export default SiteSearchBox;
