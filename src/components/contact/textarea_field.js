import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col, Tooltip} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty'

class FormTextarea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideToolTip: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }
  
  onInputChange(e) {
    console.log(e);
  }

  handleChange(event){
    //console.log("DINESH" + this.refs.myinput.value )
    (isEmpty(this.props.value) || this.props.value.trim() === "" || this.props.error) ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  renderField() {    
    console.log(isEmpty(this.props.value) , this.props.value , this.props.error);      
    return (<div>
     <textarea ref={this.props.name} onFocus={this.handleChange} onKeyUp={this.handleChange} type="text" name={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
         ? this.props.value
         : ''} disabled={this.props.disabled} required={this.props.required} className={((isEmpty(this.props.value) || this.props.value.trim() === "") && this.props.error) ? "formTextarea error":'formTextarea'} error={this.props.error}
         />
         {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
         <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
   </div>)
}

//   renderField() {          
//     return (<div>
//      <textarea type="text" ref={this.props.name} name={this.props.name} onFocus={this.handleChange} onKeyUp={this.handleChange} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value 
//             ? this.props.value 
//             : ''} disabled={this.props.disabled ? this.props.disabled : false} required={this.props.required} className={this.props.error ? 'formTextarea error' : 'formTextarea'} error={this.props.error}></textarea>

//           <div>{this.props.children}</div>
//    </div>)
// }

  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}{this.props.required?<span class="requiredAsterik"> *</span>:<span></span>}</div>
          <div>{this.renderField()}</div>
        </fieldset>
      </Col>

    </div>);
  };
};

FormTextarea.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

const TextAreaInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  label,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]
  return (
    <div >
      {<FormTextarea disabled={props.editMode} title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error} />}
      
    </div>
  )
}


export default TextAreaInput;
