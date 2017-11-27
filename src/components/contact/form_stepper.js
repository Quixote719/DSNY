import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col, Tooltip} from 'react-bootstrap';

var fieldTotal = 0;
class FormStepper extends Component {

    constructor(props) {
      super(props);
      this.state =  {
        count: props.obj.RequestedQty,
        object:props.obj,
        hideToolTip: true
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
    };

    increment(){

      var {count, object} = this.state
      fieldTotal += 1;
      var i = count += 1
      console.log(fieldTotal);
      console.log(this.props);
      object.RequestedQty = i
      if(fieldTotal < 20 && i <= this.props.maxValue)
      this.setState({count:i , object:object, hideToolTip: false},()=>{this.props.onIncDec(this.state.object)});

   /*   var inputs = document.querySelectorAll('#form input.incDecField');

      let total = 1;
      inputs.forEach(input => {
        //if(input.type === "number")
        //{
          total +=  parseInt(input.value, 10);
        //}
      });
      console.log(total); */

    }

    decrement() {

      fieldTotal -= 1;
      console.log(fieldTotal);
      var {count, object} = this.state
      var i = count > 0 ? count -= 1 : 0
      object.RequestedQty = i
        if(fieldTotal < 20 && i <= this.props.maxValue)
      this.setState({count:i, object:object, hideToolTip: false},()=>{this.props.onIncDec(this.state.object)});
    }

    onBlur(e) {
     this.setState({hideToolTip: true});
      if (e === '') this.setState({count:0});
    }

    onInputChange(e) {


      var inputs = Array.from(document.querySelectorAll('#form input.incDecField, #form input.incDecSubField'));

      let total = 0;
      inputs.forEach(input => {
        //if(input.type === "number")
        //{
          total +=  parseInt(input.value, 10);
        //}
      });
      fieldTotal = total;
      console.log(fieldTotal);


      if(!isNaN(e) && parseInt(e,10)  && (parseInt(e, 10) > this.props.maxValue || fieldTotal > 20))
      {
        this.setState({count:0,hideToolTip: false})
      }
      else if(!isNaN(e) && parseInt(e,10))
      {
        this.setState({count:parseInt(e, 10), hideToolTip: false})
      }
      else
      {
        this.setState({count:''})
      }

    }

    renderItem(){

      if (this.props.disabled && this.props.header){

        if (this.props.hasSubCategory){
          return (
          <div className='FormStepper'>
            <Col xs={12}><div className='incDecFieldtext'>{this.props.title}</div></Col>
            <Col xs={12}><div className='incDecFieldbody'>{this.props.body}</div></Col>
            <Col xs={12} className='hairline'></Col>
          </div>
          );
        }
        return (  <div></div>);
      }

      if (this.props.disabled && this.state.count > 0){
        return (
        <div className='FormStepper'>
          <Col xs={10} sm={10} md={10}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
            <Col className='FormStepperNoEdit' xs={2}>{this.state.count}</Col>
              <Col xs={10}><div className={this.props.subCat ? 'incDecSubFieldbody':'incDecFieldbody'}>{this.props.body}</div></Col>
                <Col xs={2}></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }else if (this.props.disabled && this.state.count === 0){
        return(<div></div>)
      }

      if (this.props.header){
        return (
        <div className='FormStepper'>
          <Col xs={12}><div className='incDecFieldtext'>{this.props.title}</div></Col>
            <Col xs={12}><div className='incDecFieldbody'>{this.props.body}</div></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }
      return (
        <div className='FormStepper'>
          <Col xs={6} sm={8} md={8}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
          <Col className='FormFieldIncDec' xs={6} sm={4} md={4}>
          <div className='MarnageIncDec'>
            <div className='decrement' onClick={this.decrement}></div>
            <input className={this.props.subCat ? 'incDecSubField':'incDecField'} onChange={event => this.onInputChange(event.target.value)}  value={this.state.count} onBlur={event => this.onBlur(event.target.value)} />
            <Tooltip placement="bottom" id="tooltip-bottom" className={!this.state.hideToolTip && fieldTotal > this.props.maxValue ?"in":''}>{this.props.subCat ? `${this.props.maxValue}`:`${this.props.maxValue}`}</Tooltip>
            <div className='increment' onClick={this.increment}></div>
          </div>
          </Col>
          <Col xs={6}><div className='incDecFieldbody'>{this.props.body}</div></Col>
            <Col xs={6}></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
      );
    }

    render(){
      return (
        <div>
          {this.renderItem()}
        </div>
      );
    }
  }

FormStepper.propTypes = {
  title: PropTypes.string,
  obj:PropTypes.any,
  header: PropTypes.bool,
  maxValue:PropTypes.any
};

export default FormStepper;
