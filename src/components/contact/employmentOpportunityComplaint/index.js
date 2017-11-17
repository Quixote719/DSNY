import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { PSOT_FORM_EEO_COMPLAINTS_URL } from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class eeoComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      FormObject:{},
      editMode:true,
    }
  }

  postForm(formObject){
      console.log(formObject);
      this.props.postFormObject(formObject, PSOT_FORM_EEO_COMPLAINTS_URL);
  }

  
  



   validateForm(formObject, errors){

    //const adress = actionList.getCollectionSchedule(formObject.);
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
    const {success} = this.props;
    
    if(success !== undefined) {
          if(success != null) {
            let message = 'Your response No. is: ' + success.SRNo;
            return(<ThankYou>{message}</ThankYou>);
          } else {
            return(<ThankYou>Please make sure your message is correct.</ThankYou>);
          }          
        }

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={formTitles} onSubmit={this.postForm}/>
                </div></div>);
    };

  
    // if (error){
    //     return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    // }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(eeoComplaintForm);
