import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_COMPOST_REQUEST_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import IDBox from './identityBox'
import {Field} from 'formik'
import DropdownInput from '../dropdown_field'
import formFields from './formFields'
import IdentitySelector from './identitySelector'
import FetchError from '../fetchError'
import CompostRequestFormElements from './propertyFormFields'
// import {IdentityTitles, IdentityValues} from './IdentityValues'
import {Titles, formObject as FormObject, PropertyManagementForm } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;
let IDNum = 0;
let showIDSelector = true;
class OrganicsCollectionApplication extends Component {
  constructor(props) {
    super(props);
    this.modifyFormObject = this.modifyFormObject.bind(this);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.stepFunc = this.stepFunc.bind(this);
    this.setFormType = this.setFormType.bind(this);
    this.state = {
    FormObject:{},
      editMode:true,
      step: false,
      formType: 0
    }
  }


  stepFunc(step){
    if(showIDSelector!=step){
      showIDSelector = step;
      this.forceUpdate();
    }
  }

  setFormType(ID){
      if(ID!=IDNum){
        IDNum = ID;
        this.forceUpdate();
      }
  }

  modifyFormObject(formObject){
    formObject.PropertyManagementForm  = {
      'PropertyName':formObject.PropertyName,
      'PropertyUnitCount': formObject.PropertyUnitCount,
      'SiteClassificationId': formObject.SiteClassificationId,
    }
  }

  postForm(formObject){
      let modifyFormObject = this.modifyFormObject(formObject);
      this.props.postFormObject(formObject, PSOT_FORM_COMPOST_REQUEST_URL);
  }

   validateForm(formObject, errors){
    //formObject & Values are same
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }


    return errors;
  }

   render() {
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;

        if(success !== undefined) {
          return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
        }

        if (FormObject && FormObject !== undefined) {
          let displayID = showIDSelector?{"display":"block"}:{"display":"none"}
        return (
          <div>
          {
              <div className='container' style={displayID}>
                <div className='form compostForm'>
                    <IDBox formFields={IdentitySelector} success={success} validateForm={this.validateForm} formTitles={Titles} customFormData={FormObject} onSubmit={this.postForm} setFormType={this.setFormType}/>
                </div>
              </div>
          }
          {
            (IDNum==1) &&
            <div className='container'>
              Resident, 1-9 Unit Building
            </div>
          }
          {
            (IDNum==2 || IDNum==3 || IDNum==4|| IDNum==5) &&
            <div className='container'>
              <div className='form compostForm'>
                <FormSteps formFields={CompostRequestFormElements} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
              </div>
            </div>
          }
          {
            (IDNum==6 || IDNum==8 || IDNum==11) &&
            <div className='container'>
                NonProfit, Community Group, Other
            </div>
          }
          {
            (IDNum==7) &&
            <div className='container'>
                City Agency
            </div>
          }
          {
            (IDNum==9) &&
            <div className='container'>
                School (pre-K-12)
            </div>
          }
          {
            (IDNum==10) &&
            <div className='container'>
                Business
            </div>
          }
          </div>
        );
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


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(OrganicsCollectionApplication);
