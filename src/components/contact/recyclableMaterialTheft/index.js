import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import { POST_FORM_RECYCLABLE_MATERIAL_URL } from '../../../constants/ApiConstants';
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class RecyclableMaterialTheft extends Component {
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
    console.log(formObject);
    console.log(JSON.stringify(formObject));
    // formObject =
    // {
    //   "AdditionalLocationInfo": "string",
    //   "RemovedMaterialsDescription": "string",
    //   "IncidentDate": "2017-11-24T15:10:18.424Z",
    //   "VehicleLicensePlateNumber": "string",
    //   "VehicleState": "string",
    //   "IsVehicleCommercial": true,
    //   "VehicleMake": "string",
    //   "VehicleModel": "string",
    //   "VehicleColor": "string",
    //   "VehicleType": "string",
    //   "AdditionalVehicleInfo": "string",
    //   "IsAnonymous": true,
    //   "Id": 0,
    //   "SRNumberId": 0,
    //   "SRNo": "string",
    //   "ServiceRequestStatusId": 0,
    //   "Source": "string",
    //   "CreatedDate": "2017-11-24T15:10:18.424Z",
    //   "FirstName": "string",
    //   "LastName": "string",
    //   "Phone": "string",
    //   "Email": "string",
    //   "FullName": "string",
    //   "FullNameLastFirst": "string",
    //   "AddressAsEntered": "string",
    //   "HouseNumber": "string",
    //   "Street": "string",
    //   "Apartment": "string",
    //   "Borough": "string",
    //   "City": "string",
    //   "State": "string",
    //   "Zip": "string",
    //   "District": "string",
    //   "Section": "string",
    //   "BBL": "string",
    //   "Latitude": 0,
    //   "Longitude": 0,
    //   "AddressText": "string",
    //   "AddressTextOneLine": "string"
    // }
      this.props.postFormObject(formObject, POST_FORM_RECYCLABLE_MATERIAL_URL);
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


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(RecyclableMaterialTheft);
