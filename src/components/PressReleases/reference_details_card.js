import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/card.css';

class CardReferenceDetails extends Component {

  render() {

    return (
      <div>
        <Col className='nopadding' xs={12}>
          <div className='PressReleaseBodySubHeaders'>
            {this.props.title}
          </div>
          < div className='PressReleaseBodycontact' dangerouslySetInnerHTML={{
            __html: this.props.body
          }}/>
          <div className='patternLineGreen'></div>
        </Col>
      </div>
    );
  };
};

CardReferenceDetails.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default CardReferenceDetails;
