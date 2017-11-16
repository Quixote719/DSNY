import _ from "lodash";
import React, {Component} from "react";
import {Col} from 'react-bootstrap';
import {connect} from "react-redux";
//import {PickupReqGetItemCategories, PickupReqGetItemSubCategories, PickupReqGetItemSubCategoriesNew, fetchFormObject,} from "../../../actions/contact_forms";
import FormStepper from '../form_stepper'
import SnStepper from './pickup_request_sub_stepper'

//let initialCall = false;
//let subList = false;
class RequestStepper extends Component {



	constructor(props) {
		super(props);

		this.state = {

			PickupRequestItems: []
		}
		this.renderCatg = this.renderCatg.bind(this);
		this.updateState = this.updateState.bind(this);
		//this.updateValue = this.updateValue.bind(this);
	};

	componentWillMount() {
		// this.props.PickupReqGetItemCategories();
    // this.props.PickupReqGetItemSubCategories(1);
    // this.props.PickupReqGetItemSubCategoriesNew(17);
	}

	// updateValue(ItemCatg) {
  //   if (ItemCatg) {
  //     	 _.map(ItemCatg, Item => {
	// 			const subCatg = Item.hasSubCategory !== 0
	// 			if (subCatg) {
	// 			this.props.PickupReqGetItemSubCategories(Item.CategoryId)
	// 			}
	// 		});
  //   }
	// }

  // updateSubCatg(ItemCatg,ItemSubCatg, ItemSubCatgNew){
  //   if (ItemCatg && ItemSubCatg) {
  //        _.map(ItemCatg, Item => {
  //       const subCatg = Item.hasSubCategory !== 0
       
  //       if (subCatg) {
  //         if (Item.Category === "Televisions LCD") {
  //                _.map(ItemSubCatg, I => {
  //                    I.CategoryId = Item.CategoryId
  //            });
  //               Item.hasSubCategory = ItemSubCatg
  //             }
  //       }
  //   if (Item.Category === "Televisions CRT") {
    
  //         _.map(ItemSubCatgNew, I => {
  //             I.CategoryId = Item.CategoryId
  //     });
  //        Item.hasSubCategory = ItemSubCatgNew
  //      }
       
  //    });
  //    	this.props.onAppend('categories', ItemCatg);
  //   }
  // }

	updateState(obj) {
		var p = this.state.PickupRequestItems
		p = _.union(p, [obj]);
		this.setState({
			PickupRequestItems: p
		}, () => {
			this.props.onAppend('PickupRequestItems', this.state.PickupRequestItems)
		});
	}

	renderCatg(ItemCatg) {
		if (ItemCatg)
			return _.map(ItemCatg, Item => {
				const subCatg = Item.hasSubCategory !== 0
				if (subCatg) {
					console.log('test', Item);
					return (<div><FormStepper disabled={this.props.disabled} obj={Item} title={Item.Category} onIncDec={this.updateState} header={subCatg}/><SnStepper disabled={this.props.disabled} onIncDec={this.updateState} subCat={Item.hasSubCategory}/></div>)
				}

				return (<div><FormStepper obj={Item} disabled={this.props.disabled} title={Item.Category} onIncDec={this.updateState} header={subCatg}/></div>);
			});
		}

	render() {
    
    // const {ItemCatg, ItemSubCatg, ItemSubCatgNew} = this.props;

    //  //const ItemSubCatgNew = ItemSubCatg;
    //  if (ItemCatg && ItemSubCatg && ItemSubCatgNew && !subList){

    //   this.updateSubCatg(ItemCatg, ItemSubCatg, ItemSubCatgNew);
    //   subList = true;
    //  }

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

// function mapStateToProps(state) {

// 	return {
// 		ItemCatg: state.forms.eWastePickupreqCatgItems,
// 		ItemSubCatg: state.forms.eWastePickupreqSubCatgItems,
//     ItemSubCatgNew: state.forms.eWastePickupreqSubCatgItemsNew,
// 		error: state.error.type,
// 	};
// }


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


//export default connect(mapStateToProps, {PickupReqGetItemCategories, PickupReqGetItemSubCategories, PickupReqGetItemSubCategoriesNew, fetchFormObject,})(StepperInput);
export default StepperInput;
