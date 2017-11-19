import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_COMPOST_REQUEST_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
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
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    //this.props.fetchFormObject();
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
    const { error, success, geoCoderAddressResult} = this.props;
     
    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
    };
    if (error){
        return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(EwasteRequestForm);
