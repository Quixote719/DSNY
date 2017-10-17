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

const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => (
    <Link to={"/howtogetridof/"+suggestion}>
        <div className ="ridOfSuggestions" >
          {suggestion}
        </div>
    </Link>
  );
class SearchPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchResultPage = this.searchResultPage.bind(this);        
        // this.ridOfSearchResults = this.ridOfSearchResults.bind(this);        
        
        this.state = {
            value: this.props.keyword,
            suggestions: [],
          };
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
    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    ridOfSearchResults = () =>{
        return _.map(this.props.getRidOfSearchResultsData, (item,index) => {
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
        this.props.getRidOfSearchResults(suggestion);   
    }

    render() {

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
                                }}/>

                                <i className="fa fa-search collectionSearch" id="ridOfSearchResults"></i>
                            </div>
                    </Col>
                </Row>
                <div className ="noOfSearchResults">{this.props.noOfSearchResults} Search Results</div>                

                <div>
                    {this.ridOfSearchResults()}
                </div>
            </div>
            </div>
        )
    }
}
export default SearchPage;
