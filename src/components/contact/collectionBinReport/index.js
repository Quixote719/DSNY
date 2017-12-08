import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_FORM_COLLECTION_BIN_REPORT, PSOT_FORM_DISABILITY_SERVICES_URL
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

class CollectionBinReport extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  generateNewFormObject(obj){
    obj.CollectionBins = [];
    for(let i = 1; i <= obj.BinCount; i++){
        let BinData = {};
        BinData.DsnyAssignedBinId = obj["DsnyAssignedBinId" + i];
        BinData.WeightInPounds = obj["WeightInPounds" + i];
        BinData.Removed = obj["Removed" + i];
        BinData.RemovalDate = obj["RemovalDate" + i];
        obj.CollectionBins.push(BinData);
    }
    return obj;
  }

  postForm(formObject){
      console.warn('What is this?');
      let newFormObject = this.generateNewFormObject(formObject);
      console.log(JSON.stringify(newFormObject));
      this.props.postFormObject(newFormObject, POST_FORM_COLLECTION_BIN_REPORT);
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

  render() {
        //const {FormObject, error, success} = this.props;
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;

        if(success!==undefined) {
          if(success && success.SRNo){
              return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`)
          }
          else{
            return displayThankYouPage(`<div><div class='thankyoubody'><p>Sorry we are not able to process your request at this time.</p></div></div>`)
          }
        }

        if (FormObject && FormObject !== undefined) {
          for(let i=0; i<25; i++){
                FormObject['DsnyAssignedBinId'+i] = 0;
                FormObject['WeightInPound'+i] = 0;
                FormObject['Removed'+i] = null;
                FormObject['RemovalDate'+i] = "";
          }

        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
        };

        if (error){
            return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
        }
        return(<div className='loader container'></div>)
     };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(CollectionBinReport);
