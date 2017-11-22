import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import '../../../content/styles/howtogetridof.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../../about/index';
import {Link} from "react-router-dom";
import SearchBoxHome from "./searchBoxHome";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SearchCards extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "",
            suggestions: [],
            address: '',
            placeholder: "When is Collection at ..."            
          };
    }
    handleChange = (address) =>{
        this.setState({
            address,
        })
    }
    resetPlaceHolder = () =>{
        this.setState({
          placeholder: "When is Collection at ..."
        })
      }
    setPlaceHolder = () =>{
        this.setState({
          placeholder: " "
        })
    }
    changeDetected = (e) =>{
    console.log(e)
    }
    handleSelect = (address) =>{
        this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/collectionSchedule/"+address)
    }
    searchIconSelected = () =>{
        if(this.state.address.trim().length !== 0){            
        this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/collectionSchedule/"+this.state.address)
    }
    }
    handleKeyPress = (event) => {
        console.log(this.state.address)
        console.log(this.state.address.length)
        if(this.state.address.trim().length == 0 && event.keyCode == 32){
          event.preventDefault();
        }   
        if(event.key == 'Enter'){ 
            this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/collectionSchedule/"+this.state.address)
        }
      }
      clearSearchBox(){
        this.setState({
            address: "",
         });
    }
    render() {
        const inputProps = {
            onKeyDown : this.handleKeyPress,              
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
        }
        const cssClasses = {
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'ridOfSearch',
            autocompleteContainer: 'collectionSchedule-autocomplete-container'
          }
          const cssClassesSelected = {
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchAutoComplete',
            autocompleteContainer: 'collectionSchedule-autocomplete-container'
          }
        return (
            <div className="container searchContainerRidCollection">
                <Row className="searchRow">
                    <Col xs={12} md={6} className="searchRidParent">
                    <SearchBoxHome setPaginationKey = {this.props.setPaginationKey} paginationKeyValue = {this.props.paginationKeyValue} ridOffKeywords = {this.props.ridOffKeywords} test ={this.props}/>
                    </Col>
                    <Col xs={12} md={6} className="searchCollectionParent">
                        <div id="TextureSquare">
                            <div id="innersquare">
                                <div className = "ridOfAutoCompleteParent">
                                <PlacesAutocomplete inputProps={inputProps}
                                    onChange = {this.changeDetected}
                                    onSelect={this.handleSelect}
                                    onEnterKeyDown={this.handleSelect}
                                    classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses}
                                />
                                </div>
                                <i className="fa fa-times collectionSearch" onClick = {()=>{this.clearSearchBox()}} id="collectionSearchResultsHome" style={this.state.address!==""?{display: 'block'}:{display: 'none'}}></i>
                                <i className="fa fa-search collectionSearch" style={this.state.address ==""?{display: 'block'}:{display: 'none'}}
                                id="collectionSearch" onClick = {()=>{this.searchIconSelected()}}></i>
                                <div style={this.state.address ==""?{display: 'block'}:{display:'none'}} className="exampleRidSearch"> Example: 454 W 12th Ave, New York </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,
        paginationKeyValue: state.carouselDataReducer.paginationKeyValue,                
    }
  }
  
let actionList = {
    setPaginationKey: actions.setPaginationKey,        
    getRidOfSearchResults: actions.getRidOfSearchResults,
  };

SearchCards = connect(mapStateToProps, actionList)(SearchCards);
export default SearchCards;
