import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/pressReleaseListItem.css';
import moment from 'moment';

class PressReleaseListItem extends Component {


  /* Render a different CSS class if the last of the Press Releases are reached & when there is a View All button,
     involved in the bottom of the Press Releases Section */
  renderPRLIHairLine(index,length,maxCards){
    let style="";
    let lastElement = length - 1;

    if(maxCards == 0){
       return style ='PRLIhairline';
    }

    if(index < lastElement){
        return style ='PRLIhairline';
    } 
      return style ='PRLIhairlineLast';
  }


  render() {

    return (
      <div >
        <Row>
          <Col xs={12} md={8}>
            <div >
              <Link className='PressReleaseTitle' to={process.env.REACT_APP_SITE_RELATIVE_URL + `${this.props.slug}`}>
                <div dangerouslySetInnerHTML={{
                  __html: this.props.title
                }}/>

              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className='PressReleaseDate'>{moment(this.props.date).format('dddd, MMMM Do, YYYY')}</div>
            <div className='listItemTag'>Press Release #{this.props.prid}</div>
          </Col>
        </Row>
        <div className={this.renderPRLIHairLine(this.props.arrayIndex,this.props.arraylength,this.props.maxCards)}></div>
      </div>
    );
  };
};

export default PressReleaseListItem;
