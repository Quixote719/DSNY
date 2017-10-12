import React, { Component } from 'react'
import ColorCard from '../../shared/ColorCard'
import TitleBanner from '../../shared/TitleBanner'
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Leadership extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.Leadership();
  }
  render() {
        let path = this.props.location.pathname;
        console.log('this.props.LeadershipData.data');
        console.log(this.props.LeadershipData);
        if(this.props.LeadershipData !== undefined){
          _.map(this.props.LeadershipData.data.sections.sections.cards, item =>{
            console.log('leadership.item.id');
            console.log(item.id);
          })
        }
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    LeadershipData: state.AboutDataReducer.LeadershipData,
  }
}

let actionList = {
  Leadership: actions.Leadership,
};

Leadership = connect(mapStateToProps, actionList)(Leadership);


export default Leadership;
