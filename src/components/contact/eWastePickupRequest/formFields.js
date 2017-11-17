import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import Nstepper from './pickup_request_stepper'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import {Col} from 'react-bootstrap';
const DisplayFormikState = props => <div style={{
		margin: '1rem 0'
	}}>
	<h3 style={{
			fontFamily: 'monospace'
		}}/>
	<pre
      style={{
        background: '#f6f8fa',
        fontSize: '2rem',
        padding: '.5rem',
      }}
    >
      <strong>values</strong> ={' '}

      {JSON.stringify(props.values, null, 2)}
    </pre>
  </div>;
//  <Nstepper disabled={values.editMode} header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category' onChange={setFieldValue} required/>
// Our inner form component which receives our form's state and updater methods as props
//   <Col xs={12}><DisplayFormikState {...props} /></Col>
const EwastePickUpRequestFormElements = (props) => {
	const {values, setFieldValue,} = props;

	function isCyclic(obj) {
		var seenObjects = [];

		function detect(obj) {
			if (obj && typeof obj === 'object') {
				if (seenObjects.indexOf(obj) !== -1) {
					return true;
				}
				seenObjects.push(obj);
				for (var key in obj) {
					if (obj.hasOwnProperty(key) && detect(obj[key])) {
						console.log(obj, 'cycle at ' + key);
						return true;
					}
				}
			}
			return false;
		}

		return detect(obj);
	}

	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete/></div>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} name="PickUpLocation" {...props} onChange={setFieldValue} options={values.CompostSitePermittingOrganizations} disabled={values.editMode}/>
		<Field component={DateTimePickerInput} name="AppointmentDate" {...props} onChange={setFieldValue}/>
		<Field component={Nstepper} name="ElectronicCategory" header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category' {...props} required="required" categories={values.categories} disabled={values.editMode} onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required="required"/>
		<Field component={TextInput} name="LastName" {...props} required="required"/>
		<Field component={TextInput} name="Email" {...props} required="required"/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required="required"/>
		<Field component={TextInput} name="Phone" {...props} required="required"/>
		
	</fieldset>)
};

export default EwastePickUpRequestFormElements;
