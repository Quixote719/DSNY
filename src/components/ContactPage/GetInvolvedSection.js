import React, { Component } from 'react';
import ContentCard from '../shared/ContentCard'
import {Link} from "react-router-dom";
import _ from "lodash";
import CardTitle from '../shared/Card_title';
import {Row} from 'react-bootstrap';
import '../../content/styles/ContactPage.css';

class GetInvolvedSection extends Component {

  // renderCards() {
  //   return _.map(this.props.GetInvolvedProps.cards, Item => {
  //     return (
  //       <Link key={Item.id} to={process.env.REACT_APP_SITE_RELATIVE_URL + `/contact/adopt-a-basket`} className='getInvolvedCards'><CardTitle title={Item.title} key={Item.id}/></Link>
  //     );
  //   });
  // }
  render() {
    const style = {
                    'backgroundImage': `url(${this.props.GetInvolvedProps.image})`,
                    'backgroundSize': '100% 900px',
                    'height': '500px',
                    'backgroundPosition': '50% 50%',
                  }

    const cardStyle = {
                        'float': 'left',
                        'marginTop': '25px'
                      }

    return (
      <div className='ImageSection' style={style} >
        <div className = 'SContainer'>
            <div className = 'whiteTitle'>Get Involved</div>
            <div style={cardStyle}>
                <ContentCard type='2' content={this.props.GetInvolvedProps.content}/>
            </div>
        </div>
        {/* <div className='renderInvolvedCards'>
          <div className='SContainer'>
            <Row>
              {this.renderCards()}
            </Row>
          </div>
        </div> */}
      </div>
    )
  }
}

export default GetInvolvedSection;
