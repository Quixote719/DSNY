import React, {Component} from "react";
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
import {TenPlusTitles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import {Row, Col, Tooltip} from 'react-bootstrap'

// Our inner form component which receives our form's state and updater methods as props
class formFields extends Component {

  constructor(props, context) {
    super(props, context);
    this.renderComp.bind(this);
  }

  componentWillMount() {
    const { values, setFieldValue} = this.props;
  }

  renderComp(){
    const { values, setFieldValue, handledropDown} = this.props;
    return(
      <div>
        <Col xs={12} md={12}></Col>
        <Field component={TextInput} title="MANAGEMENT COMPANY" name="CompanyName" {...this.props} maxlength={"50"} disabled={values.editMode}/>
        <Field component={TextInput} title="CONTACT PERSON TITLE" name="Title" {...this.props} maxlength={"25"} disabled={values.editMode}/>
        <Field component={TextInput} title="CONTACT PERSON FIRST NAME" name="FirstName2" {...this.props} maxlength={"25"} disabled={values.editMode}/>
        <Field component={TextInput} title="CONTACT PERSON LAST NAME" name="LastName2" {...this.props} maxlength={"25"} disabled={values.editMode}/>
        <Field component={TextInput} title="ADDRESS (OPTIONAL)" name="AddressAsEntered2" {...this.props} fullRow={true} maxlength={"50"} disabled={values.editMode}/>  
        <Field component={TextInput} title="FLOOR/SUITE/APT (OPTIONAL)" name="Apartment2" {...this.props}  maxlength={"25"} disabled={values.editMode}/>  
        <Field component={TextInput} title="E-MAIL" name="Email2" {...this.props}  maxlength={"25"} disabled={values.editMode}/>  
        <Field component={TextInput} title="PHONE" name="Phone2" {...this.props}  maxlength={"25"} disabled={values.editMode}/>  
        <Field component={DropdownInput} title="PHONE TYPE" name="PhoneTypeId2" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes2} disabled={values.editMode} required/> 
        <Field component={DropdownInput} name="HasInformedStaffAboutProgram" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/> 
      </div>
    )
  }

  render(){
    const { values, setFieldValue, handledropDown} = this.props;
    return (<fieldset className='disabledContactForm' disabled={values.editMode}>
      <FormSectionHeader title={TenPlusTitles.sectionTwo}/>
      <div>
        <FormAddressAutocomplete name="AddressAsEntered" title={TenPlusTitles.AddressAsEntered} {...this.props} value="" disabled={values.editMode}/>
      </div>
      <Field component={TextInput} name="PropertyName" {...this.props} maxlength={"100"} disabled={values.editMode}/>
      <Field component={TextInput} name="PropertyUnitCount" {...this.props} maxlength={"100"} disabled={values.editMode} required/>
      <Field component={DropdownInput} name="SiteClassificationId" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SiteClassifications} disabled={values.editMode} required/>
      <FormSectionHeader title={TenPlusTitles.sectionThree}/>
      <Field component={TextInput} name="FirstName" {...this.props}  maxlength={"25"} disabled={values.editMode}/>
      <Field component={TextInput} name="LastName" {...this.props}  maxlength={"25"} disabled={values.editMode}/>
      <Field component={TextInput} name="Email" {...this.props}  maxlength={"50"} disabled={values.editMode}/>
      <Field component={TextInput} name="ConfirmEmail" {...this.props} maxlength={"50"} disabled={values.editMode}/>
      <Field component={TextInput} name="Phone" {...this.props} maxlength={"21"} disabled={values.editMode}/>
      <Field component={DropdownInput} name="PhoneTypeId" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>
      <FormSectionHeader title={TenPlusTitles.sectionFour}/>
      {this.renderComp()}

    </fieldset>
    )
  }
};

export default formFields;
