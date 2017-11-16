import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import * as actions from '../../actions/actions_home';
import { connect } from 'react-redux';
import AddressAutocomplete from '../home/CollectionSchedule/addressAutocomplete'
import SubSectionButton from '../shared/sub_section_button';
import styles from '../../content/styles/collectionBinForm.css';
import _ from "lodash";
let errorFlag = 0;

var errorMessage =  (
        <div className = "pleaseEnterAddressForm">
        Please enter / select a valid address in order to complete the appointment request.
        </div>
    );

class FormAddressAutocomplete extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            address: "",                        
            placeholder: "Enter the address",
          };
    }
    handleChange = (address) =>{
        if(address.trim().length === 0 || address === ""){
            errorMessage = (
                <div className = "pleaseEnterAddressForm">
                Please enter / select a valid address in order to complete the appointment request.
                </div>
            );        
        }
        this.setState({
            address,
        })
    }
    resetPlaceHolder = () =>{
        this.setState({
          placeholder: "Enter the address"
        })
      }
    setPlaceHolder = () =>{
        this.setState({
          placeholder: " "
        })
    }
    suggestedAddressSelected = (value) =>{
        this.setState({
            address: value,
         });
        //  this.props.getCollectionSchedule(value); 
         this.props.getCollectionSchedule(value, this.successCallback);                                 
        }
    handleSelect =(address)=>{
        if(errorFlag == 0){
            this.setState({
                address: address,
             });
            // this.props.getCollectionSchedule(address);  
         this.props.getCollectionSchedule(address, this.successCallback);                                             
        }        
    }
    successCallback = (success)=>{
        if(this.props.collectionScheduleInfo == null ||this.props.suggestionAddress == null) {
            errorMessage = (<div className = "noOfSearchResults"> No search results found </div>);
        } else if((this.props.noResultsError.RegularCollectionSchedule == null) && (this.props.noResultsError.RecyclingCollectionSchedule) == null &&(this.props.noResultsError.OrganicsCollectionSchedule == null)){
            errorMessage = (<div className="errorMessageAddressForm">
            The address entered may be a commercial address. Please check again or select the checkbox to continue with the form.
            </div>);
        } else {
            errorMessage = (<div></div>);
        }
    }
    correctAddressList = () => {
        return _.map(this.props.suggestionAddress, (value,index)=> {
                return(
                <div className = "suggestedAddressListItem" key ={index} onClick = {()=>{this.suggestedAddressSelected(value)}}>
                    {value}
                </div>);
        } );
    }
    render() {
        const defaultBounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(40.915568,-73.699215),
            new window.google.maps.LatLng(40.495992,-74.257159));
        const cssClasses = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const cssClassesSelected = {
            root: "placesCollectionSchedule",            
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: {country: 'us'}
          }
        const inputProps = {
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
        }
        return (
            <div>
                <Row className = "formPlacesAutosuggestRow">
                    <Col xs={12} md={8}>
                    <AddressAutocomplete inputProps = {inputProps} options = {options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses} />
                    {errorMessage}
                    {this.correctAddressList()}
                    </Col>
                    <Col xs={12} md={4}>
                    <SubSectionButton title='VALIDATE' />
                    </Col>
                </Row>
            </div>

        );
    }
}
function mapStateToProps(state) { 
    return {
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,      
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,        
    }
  }
  
let actionList = {
    getCollectionSchedule: actions.getCollectionSchedule,    
  };

  FormAddressAutocomplete = connect(mapStateToProps, actionList)(FormAddressAutocomplete);
export default FormAddressAutocomplete;
