import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_LITTER_BASKET_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class LitterBasketRequest extends Component {
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
      this.props.postFormObject(formObject, PSOT_FORM_LITTER_BASKET_URL);
  }

   validateForm(formObject, errors){
     
    //formObject & Values are same
    // if(formObject.IsAnonymous === false){
    //   if (formObject.Email !== formObject.ConfirmEmail) {
    //     errors.ConfirmEmail = `The email addresses don't match`
    //   }
    // }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

  render() {

    const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
    
    if(success !== undefined) {
      return displayThankYouPage( `<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your Litter Basket Request form has been submitted succeffuly.</p><p>&nbsp;</p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>&nbsp;<p><p>This serves as the office confirmation that we received your request. Your request will be acted on promptly. If it has not been resolved within 10 business days. you may call New York City Citizen Service Center at 311. Please NOTE: If we need additional information we may contact you, provided your supplied valid name, phone number and/or E-mail address.</p></div></div>`)
    }

    if (FormObject && FormObject !== undefined) {
      return (<div className='container'><div className='form compostForm'>
              <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
              </div></div>);
    };
    // if (error){
    //     return (<FetchError onRetry={ () => this.props.fetchLitterBasketForm()}/>);
    // }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(LitterBasketRequest);
