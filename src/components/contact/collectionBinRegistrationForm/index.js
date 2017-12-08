import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_COLLECTION_BIN_REGISTRATION_URL
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

class CollectionBinRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  // componentDidMount() {
  //   this.props.fetchFormObject();
  // }


  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_COLLECTION_BIN_REGISTRATION_URL);
  }

  validateForm(formObject, errors){
    //formObject & Values are same
    if (formObject.Email !== formObject.ConfirmEmail) {
      errors.ConfirmEmail = `The email addresses don't match`
    }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

  render() {

    //const {FormObject, error, success} = this.props;
    const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
    
    if(success !== undefined) {
      return displayThankYouPage( `<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your Collection Bin Registration form has been submitted succeffuly.</p><p>&nbsp;</p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>&nbsp;</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`)
    }

    if (FormObject && FormObject !== undefined) {
      return (<div className='container'><div className='form compostForm'>
              <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
              </div></div>);
    };
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(CollectionBinRegistrationForm);
