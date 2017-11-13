import _ from "lodash";
import React, {Component} from "react";
import { Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject} from "../../actions/contact_forms";
import FormStepper from './form_stepper'
class RequestStepper extends Component {


    constructor(props) {
      super(props);
      const {ItemCatg} = props ;

      this.state =  {
        header:'',
        tableHeader:'',
        category:null
      }

      this.renderCatg = this.renderCatg.bind(this);

    };


    componentDidMount() {
      console.log(this.props);
      if (this.props.subCat) {
        debugger;
              this.props.PickupReqGetItemSubCategories(this.props.subCat);
      }else {
            this.props.PickupReqGetItemCategories();
      }
    }


    renderCatg(ItemCatg) {
      if (ItemCatg)
      return _.map(ItemCatg, Item => {
        const subCatg = Item.hasSubCategory === 1

            const {ItemSubCatg} = this.props;
            if (subCatg){
            console.log(Item.CategoryId);
              <RequestStepper subCat={Item.CategoryId}/>
            }

            //this.props.PickupReqGetItemSubCategories(Item.CategoryId);
        return (<div><FormStepper title={Item.Category} header={subCatg}/>{}</div>);
      });
    }

    renderSubCatg(SubItemCatg) {
      if (SubItemCatg)

      return _.map(SubItemCatg, (Item,index) => {
      return (<div><FormStepper title={Item.Category} /></div>);
      });
    }

    render(){
      const {ItemCatg} = this.props;

      return (
        <div>
          <div><Col>{this.props.header}</Col></div>
          <div><Col xs={10}  sm={10} md={10}>{this.props.tableHeader}</Col><Col xs={2} sm={2} md={2}>Quantity</Col></div>
            {this.renderCatg(ItemCatg)}
        </div>
      );
    }
  }


function mapStateToProps(state) {

  return {ItemCatg: state.forms.eWastePickupreqCatgItems,ItemSubCatg:state.forms.eWastePickupreqSubCatgItems ?state.forms.eWastePickupreqSubCatgItems : undefined , error:state.error.type};
}


export default connect(mapStateToProps, {PickupReqGetItemCategories, PickupReqGetItemSubCategories, fetchFormObject})(RequestStepper);
