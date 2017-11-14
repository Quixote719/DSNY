import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_DISABILITY_SERVICES_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';
import axios from 'axios';

const formTitles = Titles;

class DisabilityServices extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_FORM_DISABILITY_SERVICES_URL);
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

  componentDidMount() {
    const REST_WEBAPI_URL = 'http://msdwvw-dsndny01.csc.nycnet/DSNYApi/api/';
    `${REST_WEBAPI_URL}disabilityservices`
    axios
      .get(`${REST_WEBAPI_URL}disabilityservices`)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
      console.log(this.state.posts);
  }

  render() {
    
        //const {FormObject, error, success} = this.props;
        const {success,error} = this.props;
    
        if(success !== undefined) {           
            return(<ThankYou>???</ThankYou>);

          }
    
        if (FormObject && FormObject !== undefined) {
            return (<div className='container'><div className='form compostForm'>
                    <FormSteps formFields={formFields} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={formTitles} onSubmit={this.postForm}/>
                    </div></div>);
        };
        if (error){
            return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
        }
        return(<div className='loader container'></div>)
     };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(DisabilityServices);
