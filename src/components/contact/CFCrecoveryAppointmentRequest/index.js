import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_CFC_RECOVERY_APP_REQ
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
 this.props.GetUnavailableDates(`https://msdwvw-dsndny01.csc.nycnet/DSNYApi/api/cfcrecoveryappointment/CFCCalendar/${geoCoderAddressResult.sanitationRecyclingCollectionSchedule}`);
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
    const { error, success,unavailableDates,  geoCoderAddressResult, isAddressValidated} = this.props;

    if(success !== undefined) {
          return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
    }

    if (geoCoderAddressResult){
      if (typeof unavailableDates === 'undefined')
      this.updateValues(geoCoderAddressResult)
    }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} Dates={unavailableDates} success={success} customFormData={FormObject} isAddressValidated={isAddressValidated} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
    };
    if (error){
        return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success,unavailableDates:state.forms.unavailableDates, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,isAddressValidated: state.carouselDataReducer.addressValidator,
  error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject,GetUnavailableDates})(CFCRequestForm);
