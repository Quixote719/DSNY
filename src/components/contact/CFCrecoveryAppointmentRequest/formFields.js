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
import moment from 'moment';
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

const EwastePickUpRequestFormElements = (props) => {
	const {values, setFieldValue, Dates,  geoCoderAddressResult } = props;

	if (Dates && geoCoderAddressResult){
     values.Dates = Dates;
		 values.AppointmentDate = moment(Dates[0].StartDate);
		 values.SectionAndSubsection = geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection;
		 values.RecyclingPickupDay = geoCoderAddressResult.sanitationRecyclingCollectionSchedule;
	}

	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/></div>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} required name="RecyclingLocation" options={geoCoderAddressResult ? geoCoderAddressResult.pickupStreets :[]} {...props} onChange={setFieldValue} disabled={values.editMode}/>
		<Field component={DateTimePickerInput} value={values.AppointmentDate ? values.AppointmentDate : ''} Dates={values.Dates} required name="AppointmentDate" {...props} onChange={setFieldValue}/>
		<Field component={Nstepper} name="Appliances" header='APPLIANCES' tableHeader='Electronic Category' {...props} required="required" categories={values.categories} disabled={values.editMode} onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required="required"/>
		<Field component={TextInput} name="LastName" {...props} required="required"/>
		<Field component={TextInput} name="Email" {...props} required="required"/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required="required"/>
		<Field component={TextInput} name="Phone" {...props} required="required"/>
    <Col xs={12}><DisplayFormikState {...props} /></Col>
	</fieldset>)
};

export default EwastePickUpRequestFormElements;
