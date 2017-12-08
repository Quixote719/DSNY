import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../content/styles/services.css';
import '../../content/styles/howtogetridof.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../about/index';
import {Link} from "react-router-dom";
import SearchBoxHome from "../home/Search_Cards/searchBoxHome";
import PlacesAutocomplete from 'react-places-autocomplete'
import ServiceRequestStatus from '../home/Program_Cards/serviceRequestStatus';

class SearchBoxCollection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            serviceRequest: "",                  
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
    handleSelect = (address) =>{
        this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/collectionSchedule/"+address)
    }
    handleChangeService = (value) =>{
        this.setState({
          serviceRequest: value,
        })
      }
      handleSelectService = () =>{
        if(this.state.serviceRequest && this.state.serviceRequest.trim().length !== 0){
          this.props.pushHistory.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+"/serviceRequestStatus/"+ this.state.serviceRequest)
          this.props.setServiceRequestStatus(this.state.serviceRequest);           
        }
      }
    render() {

        console.log("this.state.serviceRequest")
        console.log(this.state.serviceRequest)        
        const inputProps = {
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
          if(window.location.pathname.indexOf("contact")>-1){
            return (
                <div className="container searchContainerRidCollection">
                    <Row className="searchRow">
                        <Col xs={12} md={12} className="searchCollectionParent">
                            <div id="TextureSquare">
                                <div id="innersquare">
                                    <ServiceRequestStatus classNameService = "contactFormServiceRequest" handleChange = {this.handleChangeService}/>
                                    <i className="fa fa-search collectionSearch" id="collectionSearchService" onClick ={()=> {this.handleSelectService()}}></i>
                                    <div style={this.state.serviceRequest.trim().length === 0 ||this.state.serviceRequest ==="" ? {display: 'block'}:{display:'none'}} className="exampleRidSearchService"> Search by the service request number you got when you submit the online request form. </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            )
          }
          else{
            return (
                <div className="container searchContainerRidCollection">
                    <Row className="searchRow">
                        <Col xs={12} md={12} className="searchCollectionParent">
                            <div id="TextureSquare">
                                <div id="innersquare">
                                    <PlacesAutocomplete inputProps={inputProps}
                                        onSelect={this.handleSelect}
                                        onEnterKeyDown={this.handleSelect}
                                        classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses}
                                    />
                                    <i className="fa fa-search collectionSearch" id="collectionSearch"></i>
                                    <div style={this.state.address ==""?{display: 'block'}:{display:'none'}} className="exampleRidSearch"> Example: 454 W 12th Ave, New York </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            )
          }
    }
}


function mapStateToProps(state) {
    return {
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,
    }
}

let actionList = {
    setServiceRequestStatus: actions.setServiceRequestStatus,    
    getRidOfSearchResults: actions.getRidOfSearchResults,
};

SearchBoxCollection = connect(mapStateToProps, actionList)(SearchBoxCollection);
export default SearchBoxCollection;
