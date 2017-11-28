import React, { Component } from 'react'
import TitleBanner from '../../shared/TitleBanner'
import ColorCard from '../../shared/ColorCard'
import CardBox from '../../shared/card_box'
import ProfileCard from '../../shared/ProfileCard'
import Header from '../../shared/Breadcrumb/breadcrumb_container'
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
        let cards = null;
        let leadersCard = [];
        let staffCard = [];
        let LeaderObject = {};
        let StaffObejct = {};
        let banner;
        if(this.props.LeadershipData !== undefined){
          let data = this.props.LeadershipData.data;
          banner = (
                      <div key={data.id}>
                        <Header title={data.title} breadCrumbList={data.breadcrumb} body={data.header_content}/>
                      </div>
                   )
            // cards = this.renderCards(data.sections.sections.cards);
            leadersCard = data.sections.sections[0].cards;
            // ProfileCards.CardSize = 1;
            // ProfileCards.CardType = 'staff-card';

            staffCard = leadersCard.splice(2);
            LeaderObject.cards = leadersCard;
            StaffObejct.cards = staffCard;
            LeaderObject.CardSize = 1;
            LeaderObject.CardType = data.sections.sections[0].card_data.card_type;
            StaffObejct.CardSize = 1;
            StaffObejct.CardType = data.sections.sections[0].card_data.card_type;
            console.log("Leader");
            console.log(LeaderObject);
            console.log("Staff");
            console.log(StaffObejct);
        }
    return (
      <div className="LeadershipPage greyBcg">
        {banner}
        <div className="SContainer">
          <div><CardBox info={LeaderObject}/></div>
          <div><CardBox info={StaffObejct}/></div>
        </div>
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
