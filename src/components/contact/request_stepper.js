import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject} from "../../actions/contact_forms";
import FormStepper from './form_stepper'
class RequestStepper extends Component {


    constructor(props) {
      super(props);
      this.state =  {
        header:'',
        tableHeader:'',
        category:[{name:'',list:[{name:'', value:0}]}]
      }

      // this.renderCatg = this.renderCatg.bind(this);
      // this.fetchSubCatg = this.fetchSubCatg.bind(this);
    };


    componentDidMount() {
      //this.props.PickupReqGetItemSubCategories(1);
    }

    // fetchSubCatg(id) {
    //
    //
    // }

    renderCatg(ItemCatg) {
this.props.PickupReqGetItemSubCategories(1);
    //   if (ItemCatg){
    //   return _.map(ItemCatg, Item => {
    //
    //     // const subCatg = Item.hasSubCategory === 1
    //     //
    //     //     const {ItemSubCatg} = this.props;
    //     //     if (subCatg){
    //     //         this.props.PickupReqGetItemSubCategories(Item.CategoryId);
    //     //       console.log(Item.CategoryId);
    //     //     }
    //
    //
    //     return (<div><FormStepper title={Item.Category} />{}</div>);
    //
    //       return (<div><FormStepper title={Item.Category}/></div>);
    //   });
    // }
    }

    // renderSubCatg(SubItemCatg) {
    //   if (SubItemCatg)
    //   debugger;
    //   return _.map(SubItemCatg, (Item,index) => {
    //   return (<div><FormStepper title={Item.Category} /></div>);
    //   });
    // }

    render(){
      //const {ItemCatg} = this.props;
      debugger;
      return (
        <div>
          <div><Col>{this.props.header}</Col></div>
          <div><Col xs={10}  sm={10} md={10}>{this.props.tableHeader}</Col><Col xs={2} sm={2} md={2}>Quantity</Col></div>
            {this.renderCatg()}
        </div>
      );
    }
  }


function mapStateToProps(state) {
  console.log(state);
  return {ItemSubCatg:state.forms.eWastePickupreqSubCatgItems , error:state.error.type};
}


export default connect(mapStateToProps, { PickupReqGetItemSubCategories})(RequestStepper);
