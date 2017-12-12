import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import MultiSelectInput from '../multiselect_field';
import * as action from '../../../actions/actions_home';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/eeo.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';

// Our inner form component which receives our form's state and updater methods as props
const eeoComplaintElements = (props) => {

  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  console.log(values.editMode);
  return (<fieldset className='disabledContactForm' >

    <FormHeaderSmallSize title='Equal Employment Opportunity Complaint' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>

    <FormSectionHeader title={Titles.sectionOne}/>
    <Field component={TextInput} name="FullNameLastFirstMi" {...props} maxlength="100" disabled={values.editMode}/>
    <Field component={TextInput} name="EmployeeId" {...props} maxlength="100" disabled={values.editMode}/>
    <Field component={TextInput} name="Title" {...props} maxlength="100" disabled={values.editMode}/>
    <Field component={TextInput} name="WorkLocation" {...props} maxlength="100"disabled={values.editMode} />
    <Field component={TextInput} name="Supervisor" {...props} maxlength="100" disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} maxlength="100" disabled={values.editMode}/>

    <FormSectionHeader title={Titles.SectionTwo} />
    <Field component={DateTimePickerInput} name="IncidentYear" {...props} onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={DropdownInput}  name="IncidentTime" timeField={true} {...props} ondropDownChange={handledropDown} onChange={setFieldValue}  options={values.IncidentTimesArray} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="IncidentDescription" {...props} disabled={values.editMode}/>

    <FormTitleCheckBoxes title={Titles.ReasonForEeoInvolvement} />
    <Field component={CheckBoxInput} name="Race" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Gender" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="PartnershipStatus" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Color" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Disability" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="GeneticPredisposition" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="NationalOrigin" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Age" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="SexualOrientation" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Alienage" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="MilitaryStatus" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="DomesticViolence" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="CitizenshipStatus" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="PriorArrestOrConviction" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="SexOffense" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Religion" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="MaritalStatus" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Stalking" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="Creed" {...props} checkBoxColor="green" checkBoxType="semiwidth" disabled={values.editMode}/>

    <Field component={TextAreaInput} name="PriorIncidents" {...props} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Witnesses" {...props} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="YourResponse" {...props} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="PersonsTold" {...props} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="OtherVictims" {...props} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="DesiredOutcome" {...props}disabled={values.editMode}/>

    <div className={values.editMode ? 'visible' : 'hidden'} disabled={!values.editMode}  >
    <FormSectionHeader title={Titles.SectionThree} />
    <Field component={CheckBoxInput} name="Affirmation" {...props} required={values.editMode} onChange={setFieldValue} />
    <Field component={TextInput} name="Signature" {...props} required={values.editMode}/>
    <Field component={DateTimePickerInput} name="SignatureDate" {...props} onChange={setFieldValue} required={values.editMode}/>
    </div>

  </fieldset>)
};

export default eeoComplaintElements;
