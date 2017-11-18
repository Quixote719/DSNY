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


class FormAddressAutocompleteNoValidation extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            address: '',                        
          };
    }
    
    handleChange = (address) =>{
        this.setState({
            address,
        });
    }
  
    suggestedAddressSelected = (value) =>{
        
         this.setState(prevState => ({
            address: value,
        }));   
                                 
    }


    handleSelect =(address)=>{
            this.setState(prevState => ({
            address: address,
        }));                                                  
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
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const cssClassesSelected = {
            root: "placesCollectionSchedule",            
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
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
        }
        return (
            <div>
                <Row className = "formPlacesAutosuggestRow">
                    <AddressAutocomplete inputProps = {inputProps}  options = {options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses} />
                    <div style= {this.props.suggestionAddress == null || this.props.suggestionAddress.length <=0 ?{display:'none'}:{display: 'block'}} className = "errorUserAddressParent">
                        {this.correctAddressList()}
                    </div>
                </Row>
            </div>

        );
    }
}
function mapStateToProps(state) { 
    return {
        addressValidator: state.carouselDataReducer.addressValidator,
        DSNYGeoCoder: state.carouselDataReducer.DSNYGeoCoder,        
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,      
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,
        value:state.address,        
    }
  }
  
let actionList = {
    checkAddressValidator: actions.checkAddressValidator,
    getCollectionSchedule: actions.getCollectionSchedule,    
  };

FormAddressAutocompleteNoValidation = connect(mapStateToProps, actionList)(FormAddressAutocompleteNoValidation);

export default FormAddressAutocompleteNoValidation;
