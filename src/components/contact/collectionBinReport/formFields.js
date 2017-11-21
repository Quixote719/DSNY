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
      this.addBin.bind(this);
      this.createNewBin.bind(this);
      this.addOneBin.bind(this);
  }
  componentWillMount() {
    const { values, setFieldValue} = this.props;
    console.log(values);
    console.log(setFieldValue);
  }
  render(){
    const { values, setFieldValue, handledropDown} = this.props;
    const ChildComponent = props =>

        // console.log("key" + props.key)
        // console.log("this.props")
        // console.log(this.props)
        // return(
          <Col xs={12} md={12}>
          <Field component={TextInput} name={"CollectionBinAnnualReportId" + props.number} maxlength={50} {...this.props} />
          <Field component={TextInput} name={"WeightInPounds" + props.number} maxlength={50} {...this.props} />
          <Field component={DropdownInput} name={"Removed" + props.number} {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode}  />
          </Col>
    //   )
    // }

    console.log("Bin " + this.state.BinCount)
    const dom = [];
    for(let i=2; i<=this.state.BinCount; i++){
      dom.push(<ChildComponent key={i} number={i} props={this.props}/>);
    }
    console.log(dom);
    return (
      <fieldset className='disabledContactForm' disabled={values.editMode}>
          <FormHeader title='Online Reporting Form'/>
          <FormSectionHeader title={Titles.sectionOne}/>
            <Field component={TextInput} name="CompanyName" maxlength={50} {...this.props} />
            <Field component={TextInput} name="Title" maxlength={50} {...this.props} />
            <Field component={TextInput} name="FirstName" maxlength={50} {...this.props} />
            <Field component={TextInput} name="LastName" maxlength={50} {...this.props} />
            <Field component={TextInput} name="Email" maxlength={50} {...this.props} />
            <Field component={TextInput} name="Phone" maxlength={50} {...this.props} />
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
  addOneBin(){
    const { values, setFieldValue, handledropDown} = this.props;
    const ChildComponent = props => {
      <div>{"I am child " + props.number}</div>;
    }
    return(
      <div>
      <Field component={TextInput} name="CollectionBinAnnualReportId" maxlength={50} {...this.props} />
      <Field component={TextInput} name="WeightInPounds" maxlength={50} {...this.props} />
      <Field component={DropdownInput} name="Removed" {...this.props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode}  />
      </div>
    )
  }
  // const ChildComponent = props => {
  //   <div>{"I am child " + props.number}</div>;
  // }

  addBin(Bins){
    let temp = this.state.BinCount;
    ++temp;
    this.setState({BinCount: temp},()=>{this.forceUpdate()});
  }
  createNewBin(){
      const { values, setFieldValue, handledropDown} = this.props;
      console.log("this.state.BinCount  " + this.state.BinCount)
      let dom1 = null;
          for(let i=1; i<this.state.BinCount; i++){
            dom1 += this.addOneBin();
          }
      return dom1;
  }
};



export default formFields;
