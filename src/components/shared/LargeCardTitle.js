import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';

class LargeCardTitle extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'background-color':'lightblue',
        'display':'inline-block',
        'min-height': '90px'
      },
      wide:{
        'width': '303px',
        'background-color':'lightblue',
        'display':'inline-block',
        'min-height': '90px'
      }
    }
    return (
        <div style={styles.narrow} className='ContentCard'>
            Title
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default LargeCardTitle;
