import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_FORM_ADOPT_BASKET_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps,{displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class AdoptABasketForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      FormObject:{},
      editMode:true,
    }
  }


  postForm(formObject){
      console.log(formObject);
      this.modifyFormObject(formObject);
      this.props.postFormObject(formObject, POST_FORM_ADOPT_BASKET_URL);
  }

  /* BasketAddressAsEntered is a required field for the JSON */
  modifyFormObject(formObject){
     formObject.BasketAddressAsEntered = formObject.AddressAsEntered;
     formObject.BasketHouseNumber = formObject.HouseNumber;
     formObject.BasketStreet = formObject.Street;
     formObject.BasketApartment = formObject.Apartment;
     formObject.BasketBorough = formObject.Borough;
     formObject.BasketCity = formObject.City;
     formObject.BasketState = formObject.State;
     formObject.BasketZip = formObject.Zip;
  }


   validateForm(formObject, errors){
    if (formObject.Email != formObject.confirmEmail) {
        errors.confirmEmail = `The email addresses don't match`
    }
    return errors;
  }

render() {
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
       
        
    if(success !== undefined) {
          return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your ${Titles.formTitle} form has submitted successfully. </p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`)
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


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(AdoptABasketForm);
