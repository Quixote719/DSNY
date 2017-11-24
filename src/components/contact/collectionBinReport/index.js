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


  postForm(formObject){
      console.warn('What is this?');
      console.log(JSON.stringify(formObject));
      formObject={
        "Id": 0,
        "SRNumberId": 0,
        "SRNo": "string",
        "ServiceRequestStatusId": 0,
        "CreatedDate": "2017-11-21T20:15:30.338Z",
        "FirstName": "string",
        "LastName": "string",
        "Phone": "string",
        "Email": "string",
        "FullName": "string",
        "FullNameLastFirst": "string",
        "CompanyName": "string",
        "Title": "string",
        "CollectionBins": [
          {
            "Id": 0,
            "CollectionBinAnnualReportId": 0,
            "DsnyAssignedBinId": "string",
            "WeightInPounds": 0,
            "Removed": true,
            "RemovalDate": "2017-11-21T20:15:30.338Z"
          }
        ]
      }
      console.log(JSON.stringify(formObject));
      this.props.postFormObject(formObject, POST_FORM_COLLECTION_BIN_REPORT);
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

        if(success !== undefined) {
          return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
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
     };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(CollectionBinReport);
