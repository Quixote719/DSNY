import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'height': '90px',
        'background-color': '#FFFFFF',
        'display':'inline-block',
        'box-sizing': 'border-box'
      },
      wide:{
        'width': '303px',
        'height': '90px',
        'background-color': '#FFFFFF',
        'display': 'inline-block',
        'box-sizing': 'border-box'
      }
    }

    return (
        <div style = {this.props.type=='2'?styles.wide:styles.narrow} className='CardTitle'>
               {this.props.title}
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default TitleCard;
