import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_SITE_VISIT_REQUEST
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps,{displayThankYouPage}  from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class SiteVisitRequestForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  postForm(formObject){
      let modifyFormObject = this.modifyFormObject(formObject);
      this.props.postFormObject(formObject, PSOT_FORM_SITE_VISIT_REQUEST);
  }

   validateForm(formObject, errors){
    //formObject & Values are same
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

   /* A method that moifies formObject to make it proper for Submission */
  modifyFormObject(formObject){
    formObject.PrimaryContact  = {
      'FirstName':formObject.PfirstName,
      'LastName':formObject.PLastName,
      'Phone':formObject.PPhone,
      'Title':formObject.PTitle,
      'SelectedPhoneType':formObject.PhoneTypeId,
      'Email':formObject.PEmail,
    }


    formObject.SecondaryContact = {
      'FirstName':formObject.SfirstName,
      'LastName':formObject.SLastName,
      'Phone':formObject.SPhone,
      'Title':formObject.STitle,
      'SelectedPhoneType':formObject.SPhoneTypeId,
      'Email':formObject.SEmail,
    }

   

    
  }

  render() {
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
       
        if(success !== undefined && success !== null) {
            return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your ${Titles.formTitle} form has submitted successfully. </p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`);
        }
    
        if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
        };

        if (error){
            return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
        }
        return(<div className='loader container'></div>)
    }
};

function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success,  geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator, error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(SiteVisitRequestForm);
