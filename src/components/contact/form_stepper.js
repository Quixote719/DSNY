import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';


class FormStepper extends Component {


    constructor(props) {
      super(props);
      this.state =  {
        count: 0
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    };

    increment(){
      this.setState({count: this.state.count += 1});
    }
    decrement() {
      var {count} = this.state
      this.setState({count:count > 0 ? count -= 1 : 0});
    }

    render(){
      return (
        <div>
          <Col xs={10} sm={10} md={10}><div className='incDecFieldtext'>{this.props.title}</div></Col>
          <Col className='FormField' xs={2} sm={2} md={2}>
          <div className='increment' onClick={this.increment}></div>
          <input className='incDecField' type="number" value={this.state.count} readOnly />
          <div className='decrement' onClick={this.decrement}></div>
          </Col>
        </div>
      );
    }
  }

FormStepper.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default FormStepper;
