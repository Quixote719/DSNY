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
    // Property Management Form
    formObject.PropertyManagementForm  = {
      'PropertyName':formObject.PropertyName,
      'PropertyUnitCount': formObject.PropertyUnitCount,
      'SiteClassificationId': formObject.SiteClassificationId,
      'OtherSiteClassification': formObject.OtherSiteClassification,
      'HasInformedStaffAboutProgram': formObject.PropertyHasInformedStaffAboutProgram,
    }
    formObject.PropertyManagementForm.ManagementContact = {
      'CompanyName': formObject.CompanyName,
      'Title': formObject.CompanyPersonTitle,
      'FirstName': formObject.CompanyPersonFirstName,
      'LastName': formObject.CompanyPersonLastName,
      'Phone': formObject.CompanyPersonPhone,
      'Email': formObject.CompanyPersonEmail,
      'AddressAsEntered': formObject.CompanyAddressAsEntered,
      'Apartment': formObject.CompanyApartment,
      'PhoneTypeId': formObject.CompanyPhoneTypeId,
    }
    
    // Non-profit Form
    formObject.NonprofitForm  = {
      'OrganizationName':formObject.OrganizationName,
      'OrganizationTypeId': formObject.OrganizationTypeId,
      'OtherOrganizationType': formObject.OtherOrganizationType,
      'HasInformedStaffAboutProgram': formObject.NonProfitHasInformedStaffAboutProgram,
      'Title': formObject.OrganizationTitle1,
    }
    formObject.NonprofitForm.SecondaryContact = {
      'Title': formObject.OrganizationTitle2,
      'FirstName': formObject.OrganizationPersonFirstName,
      'LastName': formObject.OrganizationPersonLastName,
      'Phone': formObject.OrganizationPersonPhone,
      'Email': formObject.OrganizationPersonEmail,
      'PhoneTypeId': formObject.OrganizationPhoneTypeId,
    }

    // City Agency Form
    formObject.CityAgencyForm  = {
      'AgencyName':formObject.AgencyName,
      'OtherAgencyType': formObject.OtherAgencyType,
      'Title': formObject.AgencyTitle1,
      "ParticipatingFloorsCount": formObject.ParticipatingFloorsCount,
      'HasInformedStaffAboutProgram': formObject.AgencyHasInformedStaffAboutProgram,
    }
    formObject.CityAgencyForm.ManagementContact = {
      'CompanyName': formObject.CompanyName,
      'Title': formObject.AgencyTitle2,
      'FirstName': formObject.AgencyPersonFirstName,
      'LastName': formObject.AgencyPersonLastName,
      'Phone': formObject.AgencyPersonPhone,
      'Email': formObject.AgencyPersonEmail,
      'PhoneTypeId': formObject.AgencyPhoneTypeId,
    }

    // School form
    formObject.SchoolForm = {
      'SchoolName':formObject.SchoolName,
      'Title': formObject.SchoolTitle1,
      'IsNonprofitSchool': formObject.IsNonprofitSchool,
      'ReceivesDsnyCollection': formObject.ReceivesDsnyCollection,
      'UsesPrivateFoodServiceVendor': formObject.UsesPrivateFoodServiceVendor,
      'PrivateFoodServiceVendorDescription': formObject.PrivateFoodServiceVendorDescription,
    }
    formObject.SchoolForm.FacilitiesContact = {
      'Title': formObject.SchoolTitle2,
      'FirstName': formObject.SchoolPersonFirstName,
      'LastName': formObject.SchoolPersonLastName,
      'Phone': formObject.SchoolPersonPhone,
      'Email': formObject.SchoolPersonEmail,
      'PhoneTypeId': formObject.SchoolPhoneTypeId,
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
