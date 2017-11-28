import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_E_WASTE_PICKUP_REQUEST
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject, IsDistrictActive,GetBulidingUnits, GetUnavailableDates} from "../../../actions/contact_forms";
import FormSteps from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';


class EwasteRequestForm extends Component {
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
   this.props.IsDistrictActive(geoCoderAddressResult.sanitationDistrict)
   this.props.GetUnavailableDates(geoCoderAddressResult.sanitationDistrict)
   this.props.GetBulidingUnits(geoCoderAddressResult.bbl)
  }




  postForm(formObject){
      this.props.postFormObject(formObject, POST_E_WASTE_PICKUP_REQUEST);
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
    const { error, success, isDistrictActive, buildingStatus, unavailableDates, geoCoderAddressResult, isAddressValidated} = this.props;

    if (geoCoderAddressResult){
      console.log(this.props);
      if (typeof unavailableDates === 'undefined')
      this.updateValues(geoCoderAddressResult)
    }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} buildingStatus={buildingStatus} isDistrictActive={isDistrictActive} Dates={unavailableDates} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
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
    isDistrictActive:state.forms.isDistrictActive,
    unavailableDates:state.forms.unavailableDates,
    buildingStatus:state.forms.buildingStatus,
    geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,
    isAddressValidated: state.carouselDataReducer.addressValidator,
    error:state.error.type
    };
}


export default connect(mapStateToProps, {fetchFormObject,IsDistrictActive,GetBulidingUnits, GetUnavailableDates, postFormObject})(EwasteRequestForm);
