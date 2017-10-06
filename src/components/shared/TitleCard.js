import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'height': '90px',
        'display':'inline-block',
      },
      narrow_border:{
        'width': '220px',
        'height': '90px',
        'display':'inline-block',
        'border': '1px solid #7CC04B'
      },
      wide:{
        'width': '303px',
        'height': '90px',
        'display': 'inline-block',
      },
      wide_border:{
        'width': '303px',
        'height': '90px',
        'display': 'inline-block',
        'border': '1px solid #7CC04B'
      }
    }
    let CardType = styles.narrow;
    switch(this.props.type){
      case '1':{
        CardType = styles.narrow;
        break;
      }
      case '2':{
        CardType = styles.wide;
        break;
      }
      case '3':{
        CardType = styles.narrow_border;
        break;
      }
      case '4':{
        CardType = styles.wide_border;
        break;
      }
    }
    return (
        <div style = {CardType} className='CardTitle'>
               {this.props.title}
        </div>
    );
  };
};


export default TitleCard;
