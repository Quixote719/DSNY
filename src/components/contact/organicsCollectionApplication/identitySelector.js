import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const IdentitySelector = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (
    <fieldset className='disabledContactForm' disabled={values.editMode}>
      <Field component={DropdownInput} name="Identity" title="WHO ARE YOU" disabled={values.editMode} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.IdentityTypes} disabled={values.editMode}/>
    </fieldset>)
};

export default IdentitySelector;
