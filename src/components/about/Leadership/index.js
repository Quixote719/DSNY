import React, { Component } from 'react'
import TitleBanner from '../../shared/TitleBanner'
import ColorCard from '../../shared/ColorCard'
import CardBox from '../../shared/card_box'
import ProfileCard from '../../shared/ProfileCard'
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
        let ProfileCards = {};
        if(this.props.LeadershipData !== undefined){
            cards = this.renderCards(this.props.LeadershipData.data.sections.sections);
            ProfileCards.cards = this.props.LeadershipData.data.sections.sections;
            ProfileCards.CardSize = 1;
            ProfileCards.CardType = 'staff-card';
        }
    return (
      <div className="LeadershipPage greyBcg">
        <div className="SContainer">
            <CardBox info={ProfileCards}/>
        </div>
      </div>
    )
  }

  renderCards(cards = []) {
    return _.map(cards, item => {
        return (
          <span key={item.id}>
              <ProfileCard name={item.title} duty={item.content} image={item.featured_image.base_path + item.featured_image.file}/>
          </span>
        );
      })
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
