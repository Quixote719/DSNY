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
import FormSectionHeader from '../form_section_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
// import {IdentityTitles, IdentityValues} from './IdentityValues'
import {Titles, formObject as FormObject, propertyManagementForm } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;
let IDNum = 0;
let showIDSelector = true;
class OrganicsCollectionApplication extends Component {
  constructor(props) {
    super(props);
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

  generateNewFormObject(obj){
    obj.ManagementContact = [];
    let ManagementData = {};
    ManagementData.CompanyName = obj["CompanyName"];
    ManagementData.Title = obj["Title"];
    ManagementData.PhoneTypes = obj["PhoneTypes2"];
    ManagementData.PhoneTypeId = obj["PhoneTypeId2"];
    ManagementData.SelectedPhoneType = obj["SelectedPhoneType2"];
    ManagementData.FirstName = obj["FirstName2"];
    ManagementData.Phone = obj["Phone2"];
    ManagementData.Email = obj["Email2"];
    ManagementData.FullName = obj["FullName2"];
    ManagementData.FullNameLastFirst = obj["FullNameLastFirst2"];
    ManagementData.AddressAsEntered = obj["AddressAsEntered2"];
    ManagementData.HouseNumber = obj["HouseNumber2"];
    ManagementData.Street = obj["Street2"];
    ManagementData.HouseNumber = obj["HouseNumber2"];
    ManagementData.Apartment = obj["Apartment2"];
    ManagementData.Borough = obj["Borough2"];
    ManagementData.City = obj["City2"];
    ManagementData.State = obj["State2"];
    ManagementData.Zip = obj["Zip2"];
    ManagementData.AddressText = obj["AddressText2"];
    ManagementData.AddressTextOneLine = obj["AddressTextOneLine2"];
    obj.ManagementContact.push(ManagementData);
    return obj;
  }

  postForm(formObject){
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
          propertyManagementForm["CompanyName"] = null;
          propertyManagementForm["Title"] = null;
          propertyManagementForm["PhoneTypes2"] = [
            {
              "Id": 1,
              "Name": "Work",
              "DisplayName": "Work",
              "Selected": false
            },
            {
              "Id": 2,
              "Name": "Mobile",
              "DisplayName": "Mobile",
              "Selected": false
            },
            {
              "Id": 3,
              "Name": "Home",
              "DisplayName": "Home",
              "Selected": false
            }
          ];
          propertyManagementForm["PhoneTypeId2"] = 0;
          propertyManagementForm["SelectedPhoneType2"] = null;
          propertyManagementForm["FirstName2"] = null;
          propertyManagementForm["LastName2"] = null;
          propertyManagementForm["Phone2"] = null;
          propertyManagementForm["Email2"] = null;
          propertyManagementForm["FullName2"] = null;
          propertyManagementForm["FullNameLastFirst2"] = null;
          propertyManagementForm["AddressAsEntered2"] = null;
          propertyManagementForm["HouseNumber2"] = null;
          propertyManagementForm["Street2"] = null;
          propertyManagementForm["HouseNumber2"] = null;
          propertyManagementForm["Apartment2"] = null;
          propertyManagementForm["Borough2"] = null;
          propertyManagementForm["City2"] = null;
          propertyManagementForm["State2"] = null;
          propertyManagementForm["Zip2"];
          propertyManagementForm["AddressText2"] = null;
          propertyManagementForm["AddressTextOneLine2"] = null;

          let displayID = showIDSelector?{"display":"block"}:{"display":"none"}
        return (
          <div>
          {
              <div className='container' style={displayID}>
              <div className="IDSelector">
                  <div className="row">
                    <FormHeaderSmallSize title='Online Application' information='All fields are required unless indicated as optional'/>
                    <FormSectionHeader title={Titles.sectionOne}/>
                  </div>
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
