import React,{Component} from "react";
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

class IdentitySelector extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          // BinCount: 1,
        }
    }

    componentWillMount() {
    }


  // setFormType(values.Identity);
    render(){
          const {
            values,
            handledropDown,
            setFieldValue,
            setFormType
          } = this.props;

          return (
            <fieldset className='disabledContactForm' disabled={values.editMode}>
              <Field component={DropdownInput} name="CustomerTypeId" title="WHO ARE YOU" disabled={values.editMode} {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue}  options={values.IdentityTypes} disabled={values.editMode}/>
            </fieldset>
          )
    }

    componentDidUpdate(){
      const {
        values,
        handledropDown,
        setFieldValue,
        setFormType
      } = this.props;
      setFormType(values.CustomerTypeId);
    }


}

export default IdentitySelector;
