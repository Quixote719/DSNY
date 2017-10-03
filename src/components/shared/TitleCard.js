import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'min-height': '90px',
        'background-color': '#FFFFFF',
        'display':'inline-block',
        'box-sizing': 'border-box'
      },
      wide:{
        'width': '303px',
        'min-height': '90px',
        'background-color': '#FFFFFF',
        'display': 'inline-block',
        'box-sizing': 'border-box'
      }
    }

    return (
        <div style = {this.props.type=='2'?styles.wide:styles.narrow} className='TitleCard'>
             <div className='CardTitle'>
               {this.props.title}
             </div>
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default TitleCard;
