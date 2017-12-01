import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_COMPOST_REQUEST_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import {Field} from 'formik'
import DropdownInput from '../dropdown_field'
import formFields from './formFields'
import FetchError from '../fetchError'
// import {IdentityTitles, IdentityValues} from './IdentityValues'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class OrganicsCollectionApplication extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.stepFunc = this.stepFunc.bind(this);
    this.state = {
    FormObject:{},
      editMode:true,
      step: 1
    }
  }

  // componentDidMount() {
  //   this.props.fetchFormObject();
  // }

  stepFunc(){
    let temp = this.state.step;
    ++temp;
    this.setState({
      step: temp
    });
  }

  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_FORM_COMPOST_REQUEST_URL);
  }

  validateForm(formObject, errors){
    //formObject & Values are same
    if (formObject.Email !== formObject.ConfirmEmail) {
      errors.ConfirmEmail = `The email addresses don't match`
    }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

   render() {

        //const {FormObject, error, success} = this.props;
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;

        if(success !== undefined) {
          return displayThankYouPage(success, Titles.SuccessMessage, Titles.FailureMessage)
        }

        if (FormObject && FormObject !== undefined) {

        return (<div className='container'><div className='form compostForm'>
                {  this.state.step==1 &&
                  <div>
                    <div>step 1</div>
                  </div>
                }

                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm} stepFunc={this.stepFunc}/>
                </div></div>);
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
