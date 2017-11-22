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
      this.state = {
        BinCount: 1,
      }
      this.renderComp.bind(this);
      this.addBin.bind(this);
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
        <Field component={TextInput} name={"CollectionBinAnnualReportId" + i} maxlength={50} {...this.props} />
        <Field component={TextInput} name={"WeightInPounds" + i} maxlength={50} {...this.props} />
        <Field component={DropdownInput} name={"Removed" + i} {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode}  />
      </div>
    )
  }

  addBin(Bins){
    let temp = this.state.BinCount;
    ++temp;
    this.setState({BinCount: temp},()=>{this.forceUpdate()});
  }

  render(){
    const { values, setFieldValue, handledropDown} = this.props;

    console.log("Bin " + this.state.BinCount)
    const dom = [];
    for(let i=2; i<=this.state.BinCount; i++){
      // dom.push(<ChildComponent key={i} number={i} props={this.props}/>);
        dom.push(this.renderComp(i))
    }
    console.log(dom);
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

            <Field component={TextInput} name="CollectionBinAnnualReportId" maxlength={50} {...this.props} />
            <Field component={TextInput} name="WeightInPounds" maxlength={50} {...this.props} />
            <Field component={DropdownInput} name="Removed" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode}  />
            {dom}
            <Col xs={12} md={12}>
              <div className="fa fa-plus-circle" onClick={()=>{this.addBin(this.state.BinCount)}}></div>
            </Col>
        </fieldset>
      )
  }

};



export default formFields;
