import _ from "lodash";
import React, {Component} from "react";
import {Col} from 'react-bootstrap';
import {connect} from "react-redux";
import FormStepper from '../form_stepper'

class RequestStepper extends Component {

	constructor(props) {
		super(props);

		this.state = {
			AppointmentItems: []
		}
		this.renderCatg = this.renderCatg.bind(this);
		this.updateState = this.updateState.bind(this);

	};


	updateState(obj) {
		var p = this.state.AppointmentItems
		p = _.union(p, [obj]);
		this.setState({
			AppointmentItems: p
		}, () => {
			this.props.onAppend('AppointmentItems', this.state.AppointmentItems)
		});
	}

	subSecItemsavilable(hasSubCategory){
    return _.find(hasSubCategory, function(o) { return o.RequestedQty > 0 });
	}

	renderCatg(ItemCatg) {
		if (ItemCatg)
			return _.map(ItemCatg, Item => {
				return (<div key={Item.Category}><FormStepper   total='99'  maxValue='99' obj={Item} disabled={this.props.disabled} title={Item.Category} onIncDec={this.updateState}/></div>);
			});

		}

	render() {
      return (<div>
        <Col className='headerStepper' xs={12}>{this.props.header}</Col>
        <Col className='tableHeaderStepper' xs={10} sm={10} md={10}>{this.props.tableHeader}</Col>
        <Col className='tableHeaderStepper' xs={2} sm={2} md={2}>
          {`Quantity`}</Col>
        <Col className='hairline' xs={12}></Col>
        {this.renderCatg(this.props.categories)}
      </div>);
    }
}

const StepperInput = ({
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
      {<RequestStepper title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
    </div>
  )
}
export default StepperInput;
