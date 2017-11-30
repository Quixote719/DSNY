import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_COMPOST_REQUEST_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject, GetUnavailableDates, PickupLocations} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';


class CRFLRequestForm extends Component {
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

  this.props.PickupLocations();
 this.props.GetUnavailableDates(`http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/BulkPickups/GetUnavailableDates?GarbageSchedule=${geoCoderAddressResult.sanitationRegularCollectionSchedule}d&DistrictCode=${geoCoderAddressResult.sanitationDistrict}&RecyclingSchedule=${geoCoderAddressResult.sanitationRecyclingCollectionSchedule}&SectionAndSubsection=${geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection}`);
}



  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_FORM_COMPOST_REQUEST_URL);
  }

   validateForm(formObject, errors){
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }
    return errors;
  }

  render() {
    const { error, success,unavailableDates, pickupLocations,  geoCoderAddressResult} = this.props;


        if(success !== undefined) {
              return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
        }

        if (geoCoderAddressResult){
          console.log(this.props);
          if (typeof unavailableDates === 'undefined')
          this.updateValues(geoCoderAddressResult)
        }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} pickupLocations={pickupLocations} geoCoderAddressResult={geoCoderAddressResult} Dates={unavailableDates} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
    };
    if (error){
        return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
console.log('varma',state.forms.pickupLocations);
  return {FormObject: state.forms.formObject,pickupLocations:state.forms.pickupLocations,success:state.forms.success,unavailableDates:state.forms.unavailableDates, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,isAddressValidated: state.carouselDataReducer.addressValidator,
  error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject,GetUnavailableDates, PickupLocations})(CRFLRequestForm);
