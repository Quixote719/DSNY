import _ from "lodash";
import React, {Component} from "react";
import { Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {PickupReqGetItemSubCategories} from "../../../actions/contact_forms";
import FormStepper from '../form_stepper'

class RequestSubStepper extends Component {

    constructor(props) {
      super(props);
      this.renderCatg = this.renderCatg.bind(this);
    };

    componentDidMount() {
      this.props.PickupReqGetItemSubCategories(this.props.subCat);
    }

    renderCatg(ItemSubCatg) {
      if (ItemSubCatg)
      return _.map(ItemSubCatg, Item => {
        Item.CategoryId = this.props.subCat;
        return (<div><FormStepper subCat obj={Item} disabled={this.props.disabled} onIncDec={this.props.onIncDec} title={Item.SubCategory}/>{}</div>);
      });
    }

    render(){
      const {ItemSubCatg} = this.props;
      return (
        <div>
            {this.renderCatg(ItemSubCatg)}
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {ItemSubCatg:state.forms.eWastePickupreqSubCatgItems , error:state.error.type};
}

export default connect(mapStateToProps, {PickupReqGetItemSubCategories})(RequestSubStepper);
