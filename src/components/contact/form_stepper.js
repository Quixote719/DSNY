import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';


class FormStepper extends Component {

    constructor(props) {
      super(props);
      this.state =  {
        count: props.obj.RequestedQty,
        object:props.obj
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    };

    increment(){
      var {count, object} = this.state
      var i = count += 1
      object.RequestedQty = i
      this.setState({count:i , object:object},()=>{this.props.onIncDec(this.state.object)});
    }

    decrement() {
      var {count, object} = this.state
      var i = count > 0 ? count -= 1 : 0
      object.RequestedQty = i
      this.setState({count:i, object:object},()=>{this.props.onIncDec(this.state.object)});
    }

    renderItem(){

      if (this.props.disabled && this.props.header){
        return (
        <div className='FormStepper'>
          <Col xs={12}><div className='incDecFieldtext'>{this.props.title}</div></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }

      if (this.props.disabled && this.state.count > 0){
        return (
        <div className='FormStepper'>
          <Col xs={10} sm={10} md={10}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
            <Col className='FormStepperNoEdit' xs={2}>{this.state.count}</Col>
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
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }
      return (
        <div className='FormStepper'>
          <Col xs={10} sm={10} md={10}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
          <Col className='FormFieldIncDec' xs={2}>
          <div className='decrement' onClick={this.decrement}></div>
          <input className='incDecField' type="number" value={this.state.count} readOnly />
            <div className='increment' onClick={this.increment}></div>
          </Col>
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
  header: PropTypes.bool
};

export default FormStepper;
