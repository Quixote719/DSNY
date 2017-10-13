import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import '../../../content/styles/cardType.css';

class CardType extends Component {

  constructor() {
    super();
    this.className = this.className.bind(this);
  }

  className(type) {
    switch (type) {
      case 'eUrl':
        return ("fa fa-external-link fa-2x file-pdf-o-font-awesome");
      case 'iUrl':
        return ("fa fa-link fa-2x file-pdf-o-font-awesome");
      case 'pdf':
        return ("fa fa-file-pdf-o fa-2x file-pdf-o-font-awesome");
      case 'xlsx':
        return ("fa fa-file-excel-o fa-2x file-pdf-o-font-awesome");
      case 'zip':
        return ("fa fa-file-archive-o  fa-2x file-pdf-o-font-awesome");
      default:
        return (" ");
    }
  }

  render() {

    return (
      <Col className='nopadding' xs={12} sm={6} md={4}>
        <div className={this.props.className}>
          <Row className='nopadding'>
            <Col className='nopadding' xs={8}>
              <div className='cardTypeTitle'>
                <div className='cardTitleText' dangerouslySetInnerHTML={{
                  __html: this.props.title
                }}/>
              </div>
            </Col>
            <Col className='nopadding' xs={4}>
              <div>
                <i className={this.className(this.props.type)}></i>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    );
  };
};

CardType.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['pdf', 'xlsx', 'zip', 'eUrl', 'iUrl'])
};

export default CardType;
