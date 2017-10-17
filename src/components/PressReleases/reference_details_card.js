import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/card.css';

class CardReferenceDetails extends Component {

  render() {
    return (
      <Col xs={12} sm={4} md={3}>
        <div className='PressReleaseBodySubHeaders'>
          {this.props.title}
        </div>
        < div className='PressReleaseBodycontact' dangerouslySetInnerHTML={{
          __html: this.props.body
        }}/>
        <div className='patternLineGreen'></div>
      </Col>
    );
  };
};

CardReferenceDetails.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default CardReferenceDetails;
