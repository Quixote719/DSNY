import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_E_WASTE_PICKUP_REQUEST, REST_WEBAPI_EPICKUP_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject, IsDistrictActive,GetBulidingUnits, GetUnavailableDates} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';


class EwasteRequestForm extends Component {
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
   this.props.IsDistrictActive(geoCoderAddressResult.sanitationDistrict)
   this.props.GetUnavailableDates(`${REST_WEBAPI_EPICKUP_URL}PickupRequest/GetUnavailableDates?District=${geoCoderAddressResult.sanitationDistrict}&IsInsert=true`)
   this.props.GetBulidingUnits(geoCoderAddressResult.bbl)
  }




  postForm(formObject){
      this.props.postFormObject(formObject, POST_E_WASTE_PICKUP_REQUEST);
  }

   validateForm(formObject, errors){
    //formObject & Values are same
    //if(formObject.buildingStatus && !formObject.overideAddressValidation)
      //errors.overideAddressValidation = 'Please check to confirm this is not a 10+ building'
    if(formObject.commercialAddress && !formObject.overideAddressValidation)
      errors.overideAddressValidation = 'Please check to confirm this is not a Coomercial building'
    else if (formObject.Email !== formObject.ConfirmEmail) {
      errors.ConfirmEmail = `The email addresses don't match`
    }

    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }




  render() {
    const { error, success, isDistrictActive, buildingStatus,commercialAddress, unavailableDates, geoCoderAddressResult, isAddressValidated} = this.props;

    if(success !== undefined) {
          return displayThankYouPage( `<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>The Service Request number is</p><p class='SRNumberThankYou'>${success}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p><p><b>Where to leave your E-Waste items?</b></p><p>Place your E-Waste items at the curb for DSNY collection after 4 PM the day before your appointment date. DSNY will NOT come inside your house or ring your bell; items to be picked up MUST BE AT THE CURB.</p></div></div>`)
    }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} commercialAddress={commercialAddress} buildingStatus={buildingStatus} isDistrictActive={isDistrictActive} Dates={unavailableDates} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
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
    success:state.forms.success,
    isDistrictActive:state.forms.isDistrictActive,
    unavailableDates:state.forms.unavailableDates,
    buildingStatus:state.forms.buildingStatus,
    geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,
    isAddressValidated: state.carouselDataReducer.addressValidator,
    commercialAddress:state.carouselDataReducer.commercialAddress,
    error:state.error.type
    };
}


export default connect(mapStateToProps, {fetchFormObject,IsDistrictActive,GetBulidingUnits, GetUnavailableDates, postFormObject})(EwasteRequestForm);
