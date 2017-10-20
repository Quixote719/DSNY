import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import Autosuggest from 'react-autosuggest';
import {Link} from "react-router-dom";
import paginationleftArrow from '../../../content/images/arrow_left_pagination.png';
import paginationrightArrow from '../../../content/images/arrow_right_pagination.png';

const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => (
    <Link to={process.env.REACT_APP_SITE_RELATIVE_URL+"/howtogetridof/"+suggestion}>
        <div className ="ridOfSuggestions" >
          {suggestion}
        </div>
    </Link>
  );
let pageSize = 2;  
class SearchPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchResultPage = this.searchResultPage.bind(this);        
        this.state = {
            activePage: 1,            
            value: this.props.keyword,
            suggestions: [],
            placeholder: "Enter your search term",
            checkInputresults: "",
            searchResult: "",
          };
    }
    componentWillMount(){
        this.setState({
            searchResult: "noSearchResults"
          });
        if(this.props.keyword !==""){
            this.setState({
                searchResult: ""
            });
        }
        
    }
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : this.props.ridOffKeywords.filter(lang =>
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
    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue,
        });
      }
    ridOfSearchResults = (messageList) =>{
        return _.map(messageList, (item,index) => {
            return (
                <div key={index}>
                <div className={index == 0?"ridOfSearchResultsFirstParentDiv":"ridOfSearchResultsParentDiv"}>
                    <div className ="ridOfItemTitle">
                    {item.title}
                    </div>
                    <div className = "ridOfItemContent">
                    {item.excerpt}
                    </div>
                </div>
                </div>
            );
        });
      };
    searchResultPage(event,{suggestion}){
        this.setState({
            checkInputresults: "clearBoxNotChecked",
            searchResult: ""
         });
        this.props.getRidOfSearchResults(suggestion);   
    }
    clearSearchBox(){
        this.setState({
            value: "",
            checkInputresults: "clearBoxChecked"
         });
    }
    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.props.getRidOfSearchResults(this.state.value);   
            this.setState({
                checkInputresults: "clearBoxNotChecked",
                searchResult: ""
             });           
        }
      }
    handleSelect = (eventKey) => {
        this.setState({
            activePage: eventKey
        });
    }
    render() {
        const activePage = this.state.activePage;
        let length = this.props.getRidOfSearchResultsData.length;
        length = Math.ceil(length / pageSize);
        const indexOfLast = activePage * pageSize;
        const indexOfFirst = indexOfLast - pageSize;
        const messageList = this.props.getRidOfSearchResultsData.slice(indexOfFirst, indexOfLast);

        return (
            <div className = "howToGetRidOfParent">
            <div className="container searchContainerRidOfCollection">
                <Row className="searchRowRidOf">
                    <Col xs={12} md={12} className="searchRidOfParent">
                            <div id="innersquareRidOf">
                                <Autosuggest
                                suggestions={this.state.suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                onSuggestionSelected={this.searchResultPage}
                                inputProps={{
                                    value: this.state.value,
                                    onChange: this.onChange,
                                    className: "ridOfSearchResults",
                                    placeholder: this.state.placeholder,
                                    onKeyPress: this.handleKeyPress
                                }}/>
                                <i className="fa fa-times collectionSearch" onClick = {()=>{this.clearSearchBox()}} style={this.state.value!==""?{display: 'block'}:{display: 'none'}} id="ridOfSearchResults"></i>
                                <i className="fa fa-search collectionSearch" style={this.state.value ==""?{display: 'block'}:{display: 'none'}} id="ridOfSearchResults"></i>
                            </div>
                    </Col>
                </Row>
                <div style={this.state.checkInputresults == "clearBoxChecked" || this.state.searchResult =="noSearchResults"?{display: 'none'}:{display: 'block'}} className ="noOfSearchResults">{this.props.noOfSearchResults >0 ? this.props.noOfSearchResults + " Search Results":"No search results found"} </div>                

                <div style={this.state.checkInputresults == "clearBoxChecked"?{display: 'none'}:{display: 'block'}}>
                    {this.ridOfSearchResults(messageList)}
                </div>
                <Pagination className="searchBoxPaginate"
                        style={this.state.checkInputresults == "clearBoxChecked" || this.props.noOfSearchResults <= 0 ? {display: 'none'}:{display: 'block'}}
                        prev={<img src={paginationleftArrow} alt="paginationleftArrow" />}
                        next={<img src={paginationrightArrow} alt="paginationrightArrow" />}
                        ellipsis
                        boundaryLinks
                        items={length}
                        maxButtons={2}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect} />
            </div>
            </div>
        )
    }
}
export default SearchPage;
