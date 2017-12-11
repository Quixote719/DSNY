import _ from "lodash";
import React, {Component} from "react";
import {Col, Tooltip} from 'react-bootstrap';
import FormStepper from '../form_stepper'
import SnStepper from './pickup_request_sub_stepper'
import {requestedQtyMessage} from './index';

class RequestStepper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			PickupRequestItems: props.PickupRequestItems ? props.PickupRequestItems : []
		}
		this.renderCatg = this.renderCatg.bind(this);
		this.updateState = this.updateState.bind(this);
	};

	updateState(obj) {
		var p = this.state.PickupRequestItems
		p = _.union(p, [obj]);
		this.setState({
			PickupRequestItems: p
		}, () => {
			this.props.onAppend('PickupRequestItems', this.state.PickupRequestItems)
		});
	}

	subSecItemsavilable(hasSubCategory){
    return _.find(hasSubCategory, function(o) { return o.RequestedQty > 0 });
	}

	renderCatg(ItemCatg) {
		if (ItemCatg)
			return _.map(ItemCatg, Item => {
				const subCatg = Item.hasSubCategory !== 0
				if (subCatg) {
					return (<div key={Item.Category}><FormStepper hasSubCategory={this.subSecItemsavilable(Item.hasSubCategory)} Category={Item.Category} disabled={this.props.disabled} obj={Item} title={Item.Category} onIncDec={this.updateState} header={subCatg}/><SnStepper disabled={this.props.disabled} maxValu='5' onIncDec={this.updateState} subCat={Item.hasSubCategory}/></div>)
				}
				return (<div key={Item.Category}><FormStepper obj={Item} total='20' maxValue='20' disabled={this.props.disabled} title={Item.Category} onIncDec={this.updateState} header={subCatg}/></div>);
			});
		}

	render() {
      return (
				<div>
        <Col className='headerStepper' xs={12}>{this.props.header}</Col>
        <Col className='tableHeaderStepper' xs={7} sm={10} md={10}>{this.props.tableHeader}</Col>
        <Col className='tableHeaderStepper QuantityTitle' xs={5} sm={2} md={2}>
          {`Quantity`}
					{requestedQtyMessage?<Tooltip placement="top" id="recaptchaTooltip" className={requestedQtyMessage?"in":""}>Requested Qty should be greater than Zero</Tooltip>:""}
					</Col>
        <Col className='hairline' xs={12}></Col>
        {this.renderCatg(this.props.categories)}
      </div>
		);
    }

}


const StepperInput = ({
  field: { name, ...field },
  form: { touched, errors },
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
