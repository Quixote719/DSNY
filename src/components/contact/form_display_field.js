import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'

class TextdisplayField extends Component {

  renderField() {
           return (<div >{
               !this.props.isHidden
                 ? <div className='TextdisplayField'><Col className={!this.props.fullRow?'FormField col-xs-12 col-sm-6 col-md-6': 'FormField col-xs-12 col-sm-12 col-md-12'}>
                <div className='FormMultiSelectTitle'>{this.props.title}</div>
                   </Col>
                   <Col xs={12}><div>{this.props.body}</div><div className='hairline'></div></Col>
                   </div>
                 : null
             }
           </div>)
      }

  render() {
    return (<div>{this.props.body ?  this.renderField() : ''}</div>);
  };
};


const TextInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  body,
  label,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]
  return (
    <div >
      {<TextdisplayField disabled={props.editMode} title={props.formTitles[name]} body={body} name={name} {...field}  {...props}  touch={touch} error={error}/>}
    </div>
  )
}


export default TextdisplayField;
