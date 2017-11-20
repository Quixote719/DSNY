import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Dotdotdot from 'react-dotdotdot'
import '../../content/styles/cardType.css';

class FormRow extends Component {

  constructor() {
    super();
    this.className = this.className.bind(this);
    this.cardLayout = this.cardLayout.bind(this);
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

  cardLayout(type, style) {

    switch (type) {
      case 'iUrl':
        return (
          <Col className='nopadding' xs={12} sm={style == 'FullWidth'
            ? 6
            : 12} md={style == 'FullWidth'
            ? 4
            : 12}>
            <div className={this.props.className}>
              <Row className='nopadding'>
                <Col className='nopadding' xs={8}>
                  <div className='cardTypeTitle'>
                    <Dotdotdot clamp={3}>
                      <div className='cardTitleText' dangerouslySetInnerHTML={{
                        __html: this.props.title
                      }}/>
                    </Dotdotdot>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        );
      default:
        return (
          <Col className='nopadding' xs={12} sm={style == 'FullWidth'
            ? 6
            : 12} md={style == 'FullWidth'
            ? 4
            : 12}>
            <div className={this.props.className}>
              <Row className='nopadding'>
                <i className={this.className(this.props.type)}></i>
                <div className='cardTypeTitle'>
                  <Dotdotdot clamp={3}>
                    <div className='cardTitleText' dangerouslySetInnerHTML={{
                      __html: this.props.title
                    }}/>
                  </Dotdotdot>
                </div>
                <i className='fa fa-caret-right'></i>
              </Row>
            </div>
            <div className='patternLineGreen'></div>
          </Col>
        );
    }
  }

  render() {
    return (
     <div className = "FormRow">
       {this.cardLayout(this.props.type, this.props.style)}
     </div>
    );
  };
};

FormRow.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
    style: PropTypes.string,
  type: PropTypes.oneOf(['pdf', 'xlsx', 'zip', 'eUrl', 'iUrl'])
};

export default FormRow;
