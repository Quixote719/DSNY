import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_CFC_RECOVERY_APP_REQ, REST_WEBAPI_URL, Env
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject,GetUnavailableDates, postFormObject} from "../../../actions/contact_forms";
import FormSteps , {displayThankYouPage}from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';


class CFCRequestForm extends Component {
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
 this.props.GetUnavailableDates(`${REST_WEBAPI_URL(Env)}cfcrecoveryappointment/CFCCalendar/${geoCoderAddressResult.sanitationRecyclingCollectionSchedule}`);
}

  postForm(formObject){
      this.props.postFormObject(formObject, POST_CFC_RECOVERY_APP_REQ);
  }

   validateForm(formObject, errors){
    //formObject & Values are same
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }


    return errors;
  }

  render() {
    const { error, success,unavailableDates, commercialAddress,  geoCoderAddressResult, isAddressValidated} = this.props;

    if(success !== undefined && success.SRNo) {
          return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your CFC Recovery Appointment Request form has been submitted succefully.</p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`)
    }


    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} commercialAddress={commercialAddress} geoCoderAddressResult={geoCoderAddressResult} Dates={unavailableDates} success={success} customFormData={FormObject} isAddressValidated={isAddressValidated} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
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
    unavailableDates:state.forms.unavailableDates,
    geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,
    isAddressValidated: state.carouselDataReducer.addressValidator,
    commercialAddress:state.carouselDataReducer.commercialAddress,
    error:state.error.type
  };
 }

export default connect(mapStateToProps, {fetchFormObject, postFormObject,GetUnavailableDates})(CFCRequestForm);
