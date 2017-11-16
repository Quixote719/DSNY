import _ from "lodash";
import React, {Component} from "react";
import { Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject} from "../../../actions/contact_forms";
import FormStepper from '../form_stepper'
import SnStepper from './pickup_request_sub_stepper'
class RequestStepper extends Component {


    constructor(props) {
      super(props);
      this.state = {

        PickupRequestItems:[]
      }
    this.renderCatg = this.renderCatg.bind(this);
      this.updateState = this.updateState.bind(this);
      this.updateValue = this.updateValue.bind(this);
    };

    componentDidMount() {
      this.props.PickupReqGetItemCategories();
    }


  updateValue(ItemCatg){
    console.log('varma');
    //this.props.onChange('categories', ItemCatg);
  }

    updateState(obj) {
    var p = this.state.PickupRequestItems
    p = _.union(p, [obj]);
    this.setState({PickupRequestItems:p}, () => { this.props.onChange('PickupRequestItems', this.state.PickupRequestItems)});
    }

    renderCatg(ItemCatg) {
      if (ItemCatg)
      return _.map(ItemCatg, Item => {
        const subCatg = Item.hasSubCategory !== 0
              if (subCatg){
              
                return (<div><FormStepper  disabled={this.props.disabled} obj={Item} title={Item.Category} onIncDec={ this.updateState} header={subCatg}/><SnStepper disabled={this.props.disabled} onIncDec={this.updateState} subCat={Item.hasSubCategory}/></div>)
              }

        return (<div><FormStepper obj={Item} disabled={this.props.disabled} title={Item.Category} onIncDec={ this.updateState} header={subCatg}/></div>);
      });
    }

    render(){
      const {ItemCatg} = this.props;
    if(ItemCatg){
      this.updateValue(ItemCatg);
    }
      return (
        <div>
          <Col className='headerStepper' xs={12} >{this.props.header}</Col>
          <Col className='tableHeaderStepper' xs={10}  sm={10} md={10}>{this.props.tableHeader}</Col><Col className='tableHeaderStepper' xs={2} sm={2} md={2}>  {`Quantity`}</Col>
          <Col className='hairline' xs={12}></Col>
            {this.renderCatg(this.props.categories)}
        </div>
      );
    }
  }


function mapStateToProps(state) {

  return {ItemCatg: state.forms.eWastePickupreqCatgItems,ItemSubCatg:state.forms.eWastePickupreqSubCatgItems ?state.forms.eWastePickupreqSubCatgItems : undefined , error:state.error.type};
}


export default connect(mapStateToProps, {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject})(RequestStepper);
