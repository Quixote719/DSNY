import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'

class FormField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      hideToolTip: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);

  }

  onInputChange(e) {
    console.log(e);
  }

  handleChange(event){
    !isEmpty(this.refs.myinput.value) ? this.setState({hideToolTip: true}) : this.setState({hideToolTip: false});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  renderField(type) {

    if (type) {
      var name = 'input[' + type + ']';
      switch (type) {
        case "phone":
          return (<div>
            <MaskedInput mask={[
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
              ]} name={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value}/>
          </div>);

        default:

           return (<div>
            <input ref="myinput" onFocus={this.handleChange} onKeyUp={this.handleChange} type={type} name={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
                ? this.props.value
                : ''} disabled={this.props.disabledf} className={this.props.error?"input error":'input'} error={this.props.error}/>
                  <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
            <div>{this.props.children}</div>
          </div>)
      }
    }
  }
  render() {



    return (<div >{
        !this.props.isHidden
          ? <Col className='FormField' xs={12} sm={12} md={12}>
              <fieldset>
                <div className='FormMultiSelectTitle'>{this.props.title}</div>
                <div>{this.renderField(this.props.type)}</div>
              </fieldset>
            </Col>
          : null
      }

    </div>);
  };
};

FormField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  disabledf: PropTypes.bool
};

export default FormField;
