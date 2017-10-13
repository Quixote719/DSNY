import React, { Component } from 'react'
import ColorCard from '../../shared/ColorCard'
import TitleBanner from '../../shared/TitleBanner'
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
        if(this.props.LeadershipData !== undefined){
            cards = this.renderCards(this.props.LeadershipData.data.sections.sections[0].cards);
        }
    return (
      <div className="SContainer">
        {cards}
      </div>
    )
  }

    renderCards(cards = []) {
      return _.map(cards, item => {
          return (
            <span key={item.id}>
                <ProfileCard name={item.title} duty={item.content} image={item.image.file}/>
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
