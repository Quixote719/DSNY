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
class HowToGetRidOf extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchResultPage = this.searchResultPage.bind(this);        
        // this.ridOfSearchResults = this.ridOfSearchResults.bind(this);        
        
        this.state = {
            value: this.props.match.params.keyword,
            suggestions: [],
          };
    }
    componentWillMount(){
        this.props.getRidOffKeywords();            
        const keyword = this.props.match.params.keyword;
        this.props.getRidOfSearchResults(keyword);
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
                <div className={index == 0?"ridOfSearchResultsFirstParentDiv":"ridOfSearchResultsParentDiv"}>
                    <div className ="ridOfItemTitle">
                    {item.title}
                    </div>
                    <div className = "ridOfItemContent">
                    {item.excerpt}
                    </div>
                </div>
            );
        });
      };
    searchResultPage(event,{suggestion}){
        this.forceUpdate();
        this.props.getRidOfSearchResults(suggestion);   
    }
    render() {
        console.log("Manali")        
        console.log(this.props.getRidOfSearchValue)
        const BannerText = {
            title: 'How to Get Rid of ...'
          }
        return (
            <div className = "howToGetRidOfParent">
            <Banner text={BannerText} className ="ridOfBanner"/>
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
                                    placeholder: "How to get rid of ..."
                                }}/>
                                <i className="fa fa-search collectionSearch" id="ridOfSearchResults"></i>
                                <div className={this.state.suggestions != ""?"noexampleRidSearchResults":"exampleRidSearchResults"}> Example: battery, mattress, TVs </div>

                                {/* <div className="exampleRidSearch"> Example: 454 W 12th Ave, New York </div> */}
                            </div>
                    </Col>
                </Row>
                <div className ="testtttttttttttt">
                    {this.ridOfSearchResults()}
                </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        getRidOfSearchResultsData: state.carouselDataReducer.getRidOfSearchResultsData,
        // getRidOfSearchValue: state.carouselDataReducer.getRidOfSearchValue,
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,        
    }
  }
  
let actionList = {
    getRidOffKeywords: actions.getRidOffKeywords,    
    getRidOfSearchResults: actions.getRidOfSearchResults,
  };

  HowToGetRidOf = connect(mapStateToProps, actionList)(HowToGetRidOf);
export default HowToGetRidOf;
