import React, {Component} from "react";
import PropTypes from 'prop-types';

class ContentCard extends Component {
  render() {
    const styles={
      small:{
        'width': '303px',
        'min-height': '200px',
        'padding': '15px 20px',
        'display':'inline-block'
      },
      normal:{
        'width': '460px',
        'min-height': '200px',
        'padding': '15px 20px',
        'display':'inline-block'
      },
      large:{
        'width': '617px',
        'min-height': '200px',
        'padding': '20px',
        'display':'inline-block'
      }
    }
    let cardType = styles.small;
    if(this.props.type=='1'){
       cardType = styles.small;
    }
    else if(this.props.type=='2'){
      cardType = styles.normal;
    }
    else if(this.props.type=='3'){
      cardType = styles.large;
    }

    return (
        <div style = {cardType} className='CardContent'
            dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
    );
  };
};



export default ContentCard;
