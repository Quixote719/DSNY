import React, {Component} from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
class formFields extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          // BinCount: 1,
        }
    }

    componentWillMount() {
      const { values, setFieldValue} = this.props;
    }

    render(){
        const { values, setFieldValue, handledropDown} = this.props;

        return (
            <fieldset className='disabledContactForm' disabled={values.editMode}>
              <FormSectionHeader title={Titles.sectionTwo}/>
              <div>
                <FormAddressAutocomplete name="AddressAsEntered"  {...this.props}   value="" disabled={values.editMode}/>
              </div>
            </fieldset>
        )
    }
};

export default formFields;
