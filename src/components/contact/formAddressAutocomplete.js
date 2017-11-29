import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Tooltip } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import * as actions from '../../actions/actions_home';
import { connect } from 'react-redux';
import AddressAutocomplete from '../home/CollectionSchedule/addressAutocomplete'
import SubSectionButton from '../shared/sub_section_button';
import styles from '../../content/styles/collectionBinForm.css';
import _ from "lodash";
import isEmpty from 'lodash/isEmpty';

import {addressValidationMessage} from './form_steps'

let errorFlag = 0;

var errorMessage =  (
        <div className = "pleaseEnterAddressForm">
        Please enter / select a valid address in order to complete the appointment request.
        </div>
    );

class FormAddressAutocomplete extends Component {
    constructor(props, context) {
        super(props, context);
        //const propName = props.name;
        console.log(props.disabled);
        this.state = {
            address: props.values[props.name] || "",
            hideToolTip: true,
          };
    }
 

    handleChange = (address) =>{
        //this.props.checkAddressValidator(0);
        this.props.checkAddressValidator(address);
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
        
        isEmpty(address) || address.trim() === "" ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
    }
    resetPlaceHolder = () =>{
        // this.setState({
        //   placeholder: "Enter the address"
        // })
        this.setState({hideToolTip: true});
      }
    setPlaceHolder = () =>{
        // this.setState({
        //   placeholder: " "
        // })
  
    //console.log("DINESH" + this.refs.myinput.value )
         this.setState({hideToolTip: false});
  
    }
    suggestedAddressSelected = (value) =>{
        this.setState({
            address: value,
         });
        //  this.props.getCollectionSchedule(value);
         this.props.getCollectionSchedule(value, this.successCallback);
        }
    handleSelect =(address)=>{
        this.props.checkAddressValidator(1);
        if(errorFlag == 0){
            this.setState({
                address: address,
             });
            // this.props.getCollectionSchedule(address);
         this.props.getCollectionSchedule(address, this.successCallback);
        }
    }

    handleVisiblity = (props) =>{
        alert(props.disabled);
    }
    
    validateButtonClicked =()=>{
         this.props.checkAddressValidator(1);
         this.props.getCollectionSchedule(this.state.address, this.successCallback);
    }
    successCallback = (success)=>{
        if(this.props.collectionScheduleInfo == null && this.props.suggestionAddress == null) {
            errorMessage = (<div className = "noOfSearchResults"> No search results found </div>);
            this.forceUpdate();
        } else if(
          (this.props.noResultsError.RegularCollectionSchedule == null || this.props.noResultsError.RegularCollectionSchedule == "") &&
          (this.props.noResultsError.RecyclingCollectionSchedule == null || this.props.noResultsError.RecyclingCollectionSchedule == "") &&
          (this.props.noResultsError.OrganicsCollectionSchedule == null || this.props.noResultsError.OrganicsCollectionSchedule === " ") &&
          this.props.suggestionAddress == null){
            errorMessage = (<div className="errorMessageAddressForm">
            The address entered may be a commercial address. Please check again or select the checkbox to continue with the form.
            </div>);
            this.forceUpdate();
        } else {
            errorMessage = (<div></div>);
            this.forceUpdate();
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
            input: ((this.props.errors[this.props.name] && this.state.address.trim() === "") || (this.props.errors[this.props.name] ==="Please enter NY address and click on Validate" && !this.state.hideToolTip))?'collectionSearchInput error':'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const cssClassesSelected = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: ((this.props.errors[this.props.name] && this.state.address.trim() === "") || (this.props.errors[this.props.name] ==="Please enter NY address and click on Validate" && !this.state.hideToolTip))?'collectionSearchInput error':'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: {country: 'us'}
          }
        const inputProps = {
            name:this.props.name,
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
            error: this.props.errors[this.props.name],
        }
        return (
            <div>
                {console.log("DDD" + this.props.addressValidator)}
                <Row className = "formPlacesAutosuggestRow">
                    <Col xs={12} md={this.props.disabled ? 12 : 10}>
                    <AddressAutocomplete inputProps = {inputProps} options = {options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses} />
                    {this.props.errors[this.props.name] && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.state.address.trim() !== ""?this.props.errors[this.props.name]:"This field is required"}</Tooltip>:null}
                    {errorMessage}
                    {(this.props.DSNYGeoCoder != null || this.props.suggestionAddress != null)?<div style= {this.props.suggestionAddress == null || this.props.suggestionAddress.length <=0 ?{display:'none'}:{display: 'block'}} className = "errorUserAddressParent">
                    <div className = "addressNotFound">
                    The address entered can not be found.
                    </div>
                    <div className = "selectFromAddressBelow">
                    Please select from the possible addresses below
                    </div>
                        {this.correctAddressList()}
                    </div>:null}
                    {/* {this.correctAddressList()} */}
                    </Col>
                    
                    <div style={this.props.disabled ? {display: 'none'}:{display: 'block'}} >
                    <Col xs={12} md={2} className = "validateButtonCol">
                    <SubSectionButton title='VALIDATE' onClick = {this.validateButtonClicked}/>
                    {/*<button id="validateBtn" onClick={this.validateButtonClicked} className='subSectionButton'>
                        VALIDATE
                    </button>
                    {(addressValidationMessage)?<Tooltip placement="bottom" id="tooltip-bottom" className={addressValidationMessage?"in":''}>{addressValidationMessage}</Tooltip>:null}*/}
                    </Col>
                    </div>

                </Row>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        recyclingCollectionScheduleForm: state.carouselDataReducer.recyclingCollectionScheduleForm,        
        addressValidator: state.carouselDataReducer.addressValidator,
        DSNYGeoCoder: state.carouselDataReducer.DSNYGeoCoder,
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,
    }
  }

let actionList = {
    checkAddressValidator: actions.checkAddressValidator,
    getCollectionSchedule: actions.getCollectionSchedule,
  };

  FormAddressAutocomplete = connect(mapStateToProps, actionList)(FormAddressAutocomplete);
export default FormAddressAutocomplete;
