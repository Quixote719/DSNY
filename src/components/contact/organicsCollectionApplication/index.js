import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_COLLECTION_BIN_REGISTRATION_URL
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
import PropertyFormFields from './propertyFormFields'
import NonprofitFormFields from './nonprofitFormFields'
import CityAgencyFormFields from './cityAgencyFormFields'
import SchoolFormFields from './schoolFormFields'
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

  componentWillMount(){
    IDNum = 0;
    showIDSelector = true;
  }

  componentWillUpdate(){
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
    formObject.CustomerTypeId = IDNum;
    if (formObject.CustomerTypeId === 2 || formObject.CustomerTypeId === 3 || formObject.CustomerTypeId === 4 || formObject.CustomerTypeId === 5){
      formObject.PropertyManagementForm  = {
        'Id': formObject.PropertyFormId,
        "OrganicsCollectionRequestId": formObject.PropertyFormOrganicsCollectionRequestId,
        'PropertyName':formObject.PropertyName,
        'PropertyUnitCount': formObject.PropertyUnitCount,
        'SiteClassifications': formObject.SiteClassifications,
        'SiteClassificationId': formObject.SiteClassificationId,
        'SelectedSiteClassification': formObject.SelectedSiteClassification,
        'OtherSiteClassification': formObject.OtherSiteClassification,
        'HasInformedStaffAboutProgram': formObject.PropertyHasInformedStaffAboutProgram,
        'CreatedDate': formObject.CompanyCreatedDate,
      }
      formObject.PropertyManagementForm.ManagementContact = {
        'CompanyName': formObject.CompanyName,
        'Title': formObject.CompanyPersonTitle,
        'FirstName': formObject.CompanyPersonFirstName,
        'LastName': formObject.CompanyPersonLastName,
        'Phone': formObject.CompanyPersonPhone,
        'Email': formObject.CompanyPersonEmail,
        "FullName": formObject.CompanyFullName,
        "FullNameLastFirst": formObject.CompanyFullNameLastFirst,
        'AddressAsEntered': formObject.CompanyAddressAsEntered,
        "HouseNumber": formObject.CompanyHouseNumber,
        "Street": formObject.CompanyStreet,
        'Apartment': formObject.CompanyApartment,
        "Borough": formObject.CompanyBorough,
        "City": formObject.CompanyCity,
        "State": "NY",
        "Zip": formObject.CompanyZip,
        "AddressText": ", NY",
        "AddressTextOneLine": ", NY",
        'PhoneTypes': formObject.CompanyPhoneTypes,
        'PhoneTypeId': formObject.CompanyPhoneTypeId,
        'SelectedPhoneType': formObject.CompanySelectedPhoneType,
      }
    }
    // Non-profit Form
    if(formObject.CustomerTypeId === 6 || formObject.CustomerTypeId === 8 || formObject.CustomerTypeId === 11){
      formObject.NonprofitForm  = {
        "Id": formObject.NonprofitFormId,
        "OrganicsCollectionRequestId": formObject.NonprofitFormIdOrganicsCollectionRequestId,
        "CreatedDate": formObject.OrganizationCreatedDate,
        'HasInformedStaffAboutProgram': formObject.NonProfitHasInformedStaffAboutProgram,
        "OrganizationTypes": formObject.OrganizationTypes,
        'OrganizationTypeId': formObject.OrganizationTypeId,
        "SelectedOrganizationType": formObject.SelectedOrganizationType,
        'OtherOrganizationType': formObject.OtherOrganizationType,
        'OrganizationName':formObject.OrganizationName,
        'Title': formObject.OrganizationTitle1,
      }
      formObject.NonprofitForm.SecondaryContact = {
        'Title': formObject.OrganizationTitle2,
        "PhoneTypes": formObject.OrganizationPhoneTypes,
        'PhoneTypeId': formObject.OrganizationPhoneTypeId,
        'SelectedPhoneType': formObject.OrganizationSelectedPhoneType,
        'FirstName': formObject.OrganizationPersonFirstName,
        'LastName': formObject.OrganizationPersonLastName,
        'Phone': formObject.OrganizationPersonPhone,
        'Email': formObject.OrganizationPersonEmail,
        "FullName": formObject.OrganizationPersonFullName,
        "FullNameLastFirst": formObject.OrganizationPersonFullNameLastFirst,
      }
    }

    // City Agency Form
    if(formObject.CustomerTypeId === 7) {
      formObject.CityAgencyForm  = {
        "Id": formObject.CityAgencyFormId,
        "OrganicsCollectionRequestId": formObject.CityAgencyFormOrganicsCollectionRequestId,
        "CreatedDate": formObject.AgencyCreatedDate,
        'AgencyName':formObject.AgencyName,
        'OtherAgencyType': formObject.OtherAgencyType,
        'Title': formObject.AgencyTitle1,
        "ParticipatingFloorsCount": formObject.ParticipatingFloorsCount,
        'HasInformedStaffAboutProgram': formObject.AgencyHasInformedStaffAboutProgram,
      }
      formObject.CityAgencyForm.ManagementContact = {
        'CompanyName': formObject.AgencyCompanyName,
        'Title': formObject.AgencyTitle2,
        'FirstName': formObject.AgencyPersonFirstName,
        'LastName': formObject.AgencyPersonLastName,
        'Phone': formObject.AgencyPersonPhone,
        'Email': formObject.AgencyPersonEmail,
        "PhoneTypes": formObject.AgencyPhoneTypes,
        'PhoneTypeId': formObject.AgencyPhoneTypeId,
        'SelectedPhoneType': formObject.AgencySelectedPhoneType,
        "FullName": formObject.AgencyFullName,
        "FullNameLastFirst": formObject.AgencyFullNameLastFirst
      }
    }

    // School form
    if(formObject.CustomerTypeId === 9){
      formObject.SchoolForm = {
        "Id": formObject.SchoolFormId,
        "OrganicsCollectionRequestId": formObject.SchoolFormIdOrganicsCollectionRequestId,
        'HasInformedStaffAboutProgram': formObject.SchoolHasInformedStaffAboutProgram,
        "CreatedDate": formObject.SchoolCreatedDate,
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
        "PhoneTypes": formObject.SchoolPhoneTypes,
        'PhoneTypeId': formObject.SchoolPhoneTypeId,
        'SelectedPhoneType': formObject.SchoolSelectedPhoneType,
        "FullName": formObject.SchoolFullName,
        "FullNameLastFirst": formObject.SchoolFullNameLastFirst
      }
    }
  }
  postForm(formObject){
      this.modifyFormObject(formObject);
      console.log(formObject)
      this.props.postFormObject(formObject, PSOT_FORM_COLLECTION_BIN_REGISTRATION_URL);
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

        if(success!==undefined) {
          if(success && success.SRNo){
              return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`)
          }
          else{
            return displayThankYouPage(`<div><div class='thankyoubody'><p>Sorry we are not able to process your request at this time.</p></div></div>`)
          }
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
              <div className="formContent">
                <div>Thank you for your interest in joining DSNY’s curbside organics program.</div>
                <div className="topSpace">Most residents living in buildings with 1-9 units will automatically be enrolled in the program,
                as we expand to all neighborhoods across New York City. To find out if your neighborhood is currently eligible to participate,
                check our list of participating neighborhoods. If your neighborhood is currently eligible and you have not received a brown bin, you can request a bin here.</div>
                <div className="smallTopSpace">Please note that 1-9 unit buildings in Manhattan or in certain Bronx neighborhoods are not eligible to join the curbside program.
                We encourage you and the residents of your building to bring your food waste to a neighborhood-based food scrap drop off site, or learn how to compost at home at a NYC Compost Project workshop.</div>
                <div className="smallTopSpace">If you live in a 1-9 unit building along a commercial block, your building must enroll to receive your free brown bins.
                Submit your building's information, and DSNY will follow up with more information on how to join the program.</div>
              </div>
            </div>
          }
          {
            (IDNum==2 || IDNum==3 || IDNum==4|| IDNum==5) &&
            <div className='container'>
              <div className='form compostForm'>
                <FormSteps formFields={PropertyFormFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
              </div>
            </div>
          }
          {
            (IDNum==6 || IDNum==8 || IDNum==11) &&
            <div className='container'>
              <div className='form compostForm'>
                <FormSteps formFields={NonprofitFormFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
              </div>
            </div>
          }
          {
            (IDNum==7) &&
            <div className='container'>
              <div className='form compostForm'>
                <FormSteps formFields={CityAgencyFormFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
              </div>
            </div>
          }
          {
            (IDNum==9) &&
            <div className='container'>
                <div className='form compostForm'>
                  <FormSteps formFields={SchoolFormFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
                </div>
            </div>
          }
          {
            (IDNum==10) &&
            <div className='container'>
              <div className="formContent">
                <div>  Organic waste — such as food waste, food-soiled paper and yard waste — makes up approximately one-third of the waste generated by businesses in New York City.</div>
                <div className="smallTopSpace">Some New York City businesses are required by law to separate their organic waste, which can be processed to create soil-enhancing compost or used as an energy source in aerobic and anaerobic digesters.</div>
                <div className="smallTopSpace">Learn more about organics rules and resources for businesses.</div>
                <div className="smallTopSpace">Additionally, businesses may choose to donate certain food items, which can save on waste hauling costs.</div>
              </div>
            </div>
          }
          {
            <div style={{'marginTop':'140px'}}></div>
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
