import React, {Component} from "react";
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
import {Row, Col, Tooltip} from 'react-bootstrap'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
class formFields extends Component {

  constructor(props, context) {
      super(props, context);
      this.renderComp.bind(this);
      this.changeBin.bind(this);
  }
  componentWillMount() {
    const { values, setFieldValue} = this.props;
    console.log(values);
    console.log(setFieldValue);
  }

  renderComp(i){
    const { values, setFieldValue, handledropDown} = this.props;
    return(
      <div>
        <Col xs={12} md={12}></Col>
        <Field component={TextInput} title={"DSNY ASSIGNED BIN ID "+i} name={"DsnyAssignedBinId" + i} maxlength={50} {...this.props} />
        <Field component={TextInput} title={Titles.WeightInPounds1} name={"WeightInPounds" + i} maxlength={50} {...this.props} />
        <Field component={DropdownInput} title={Titles.Removed1} name={"Removed" + i} {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode}  />
        {values["Removed" + i] && <Field component={DateTimePickerInput} title={Titles.RemovalDate1} name={"RemovalDate" + i} {...this.props} onChange={setFieldValue} defaultValue={values.InstallationDate}  required/>}
      </div>
    )
  }

  changeBin(Bin){
    const { values, setFieldValue, handledropDown} = this.props;

    if(Bin){
      if(values.BinCount < 25){
        ++values.BinCount;
      }
    }
    else{
      if(values.BinCount > 1){
        --values.BinCount;
      }
    }
    console.log(values.BinCount);
    this.forceUpdate()
  }

  render(){
    const { values, setFieldValue, handledropDown} = this.props;

    const MoreBins = [];
    for(let i=2; i<=values.BinCount; i++){
      // MoreBins.push(<ChildComponent key={i} number={i} props={this.props}/>);
        MoreBins.push(this.renderComp(i))
    }
    return (
      <fieldset className='disabledContactForm' disabled={values.editMode}>
          <FormHeader title='Online Reporting Form'/>
          <FormSectionHeader title={Titles.sectionOne}/>
            <Field component={TextInput} name="CompanyName" maxlength={50} {...this.props} required/>
            <Field component={TextInput} name="Title" maxlength={50} {...this.props} required/>
            <Field component={TextInput} name="FirstName" maxlength={50} {...this.props} required/>
            <Field component={TextInput} name="LastName" maxlength={50} {...this.props} required/>
            <Field component={TextInput} name="Email" maxlength={50} {...this.props} required/>
            <Field component={TextInput} name="Phone" maxlength={50} {...this.props} required/>
          <FormSectionHeader title={Titles.sectionTwo}/>

            <Field component={TextInput} name="DsnyAssignedBinId1" maxlength={50} {...this.props} />
            <Field component={TextInput} name="WeightInPounds1" maxlength={50} {...this.props} />
            <Field component={DropdownInput} name="Removed1" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}  />
            {values.Removed1 && <Field component={DateTimePickerInput} name="RemovalDate1" {...this.props} onChange={setFieldValue} defaultValue={values.InstallationDate}  required/>}

            {MoreBins}
            <Col xs={12} md={12}>
              {
                !values.editMode && values.BinCount < 25 &&
                <span>
                  <span className="fa fa-plus-circle" onClick={()=>{this.changeBin(true)}}></span>
                  <span className="MangeBinText">Add bin</span>
                </span>
              }
              {
                !values.editMode && values.BinCount > 1 &&
                <span>
                      <span className="fa fa-minus-circle" onClick={()=>{this.changeBin(false)}}></span>
                      <span className="MangeBinText">Remove bin</span>
                </span>
              }
            </Col>
        </fieldset>
      )
  }
};



export default formFields;
