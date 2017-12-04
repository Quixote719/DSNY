import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {TenPlusTitles, Titles, PropertyManagementForm} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import _ from "lodash";
import FormStepper from '../form_stepper';
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
import formFields from './formFields'
import IdentitySelector from './identitySelector'
import FetchError from '../fetchError'
import CompostRequestFormElements from './propertyFormFields'
// import {IdentityTitles, IdentityValues} from './IdentityValues'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';


class organicsCollectionStepper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PropertyManagementForm: {}
        }
        this.renderFormField = this.renderCatg.bind(this);
        this.updateState = this.updateState.bind(this);
    };
    
    updateState(obj) {
        var ocf = this.state.PropertyManagementForm;
        ocf = _.union(ocf, [obj]);
        this.setState({
            PropertyManagementForm: ocf
        }, () => {
            this.props.onAppend("PropertyManagementForm", this.state.PropertyManagementForm)
        });
    }

    render() {
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
        return (
            <div>
                <FormSteps formFields={CompostRequestFormElements} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={PropertyManagementForm} validateForm={this.validateForm} formTitles={Titles} stepFunc={this.stepFunc}/>
            </div>
        );
    }
}

const StepperInput = ({
    field: { name, ...field }, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    className,
    label,
    ...props
  })  => {
    const error = errors[name]
    const touch = touched[name]
    return (
      <div >
        {<organicsCollectionStepper title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
      </div>
    )
  }
  export default StepperInput;