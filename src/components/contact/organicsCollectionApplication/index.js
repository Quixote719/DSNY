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
// import {IdentityTitles, IdentityValues} from './IdentityValues'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;
let AK="Fire in the hole"
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

  // componentDidMount() {
  //   this.props.fetchFormObject();
  // }

  stepFunc(){
    this.setState({
      step: true
    });
  }

  setFormType(ID){
    // this.setState({
    //   formType: 1
    // },()=>{
    //   console.log("SetFormType");
    //   console.log(ID);
    // });
      console.log("SetFormType");
      console.log(ID+"^^^");
  }

  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_FORM_COMPOST_REQUEST_URL);
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
        alert(AK);
        //const {FormObject, error, success} = this.props;
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;

        if(success !== undefined) {
          return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
        }

        if (FormObject && FormObject !== undefined) {

        return (
          <div>
          {  !this.state.step &&
              <div className='container'>
                <div className='form compostForm'>
                    <IDBox formFields={IdentitySelector} success={success} validateForm={this.validateForm} formTitles={Titles} customFormData={FormObject} onSubmit={this.postForm} setFormType={this.setFormType}/>
                </div>
              </div>
          }
          {
            !this.state.formType==1 &&
            <div className='container'>
              <div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
              </div>
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
