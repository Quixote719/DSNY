import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_BULK_PICKUP_REQUEST, REST_WEBAPI_EPICKUP_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject, GetUnavailableDates, PickupLocations} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';


class CRFLRequestForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
      this.updateValues = this.updateValues.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.geoCoderAddressResult !== this.props.geoCoderAddressResult) {
      const {geoCoderAddressResult} = nextProps
      if (geoCoderAddressResult){
        this.updateValues(geoCoderAddressResult)
      }
    }
}

updateValues(geoCoderAddressResult){

  this.props.PickupLocations();
 this.props.GetUnavailableDates(`${REST_WEBAPI_EPICKUP_URL}BulkPickups/GetUnavailableDates?GarbageSchedule=${geoCoderAddressResult.sanitationRegularCollectionSchedule}d&DistrictCode=${geoCoderAddressResult.sanitationDistrict}&RecyclingSchedule=${geoCoderAddressResult.sanitationRecyclingCollectionSchedule}&SectionAndSubsection=${geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection}`);
}



  postForm(formObject){
      this.props.postFormObject(formObject, POST_BULK_PICKUP_REQUEST);
  }

   validateForm(formObject, errors){
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }
    return errors;
  }

  render() {
    const { error, success,unavailableDates, pickupLocations,commercialAddress,  geoCoderAddressResult, isAddressValidated} = this.props;


        if(success !== undefined) {
              return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your collection request for large items form has been submitted succefully.</p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success}</p><p>Use this number when you check the status of your request.</p><p><b>Where to leave your Bulk items?</b></p><p>Place your Bulk items at the curb or alley (if that is where your collection occurs) for DSNY collection after 4PM the day before your appointment date. DSNY will not come inside your house or ring your bell; items to be picked up MUST BE AT THE CURB/ALLEY.</p></div></div>`)
        }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} commercialAddress={commercialAddress} pickupLocations={pickupLocations} geoCoderAddressResult={geoCoderAddressResult} Dates={unavailableDates} success={success} customFormData={FormObject} isAddressValidated={isAddressValidated} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
    };
    if (error){
        return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {
    FormObject: state.forms.formObject,
    pickupLocations:state.forms.pickupLocations,
    success:state.forms.success,
    unavailableDates:state.forms.unavailableDates,
    geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,
    isAddressValidated: state.carouselDataReducer.addressValidator,
    commercialAddress:state.carouselDataReducer.commercialAddress,
    error:state.error.type
  };
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject,GetUnavailableDates, PickupLocations})(CRFLRequestForm);
