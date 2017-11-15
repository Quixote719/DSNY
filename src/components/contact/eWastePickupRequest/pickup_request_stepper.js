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
    };

    componentDidMount() {
      this.props.PickupReqGetItemCategories();
    }

    updateState(obj) {
    var p = this.state.PickupRequestItems
    p = _.union(p, [obj]);
    this.setState({PickupRequestItems:p}, () => { this.props.onChange('PickupRequestItems', this.state.PickupRequestItems)});
    }

    renderCatg(ItemCatg) {
      if (ItemCatg)
      return _.map(ItemCatg, Item => {
        const subCatg = Item.hasSubCategory === 1
              if (subCatg){
              console.log(Item.CategoryId);
                return (<div><FormStepper  obj={Item} title={Item.Category} y='yeshu' onIncDec={ this.updateState} header={subCatg}/><SnStepper onIncDec={this.updateState} subCat={Item.CategoryId}/></div>)
              }

        return (<div><FormStepper obj={Item} title={Item.Category} y='yeshu' onIncDec={ this.updateState} header={subCatg}/></div>);
      });
    }

    render(){
      const {ItemCatg} = this.props;
      return (
        <div>
          <Col className='headerStepper' xs={12} >{this.props.header}</Col>
          <Col className='tableHeaderStepper' xs={10}  sm={10} md={10}>{this.props.tableHeader}</Col><Col className='tableHeaderStepper' xs={2} sm={2} md={2}>  {`Quantity`}</Col>
          <Col className='hairline' xs={12}></Col>
            {this.renderCatg(ItemCatg)}
        </div>
      );
    }
  }


function mapStateToProps(state) {

  return {ItemCatg: state.forms.eWastePickupreqCatgItems,ItemSubCatg:state.forms.eWastePickupreqSubCatgItems ?state.forms.eWastePickupreqSubCatgItems : undefined , error:state.error.type};
}


export default connect(mapStateToProps, {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject})(RequestStepper);
