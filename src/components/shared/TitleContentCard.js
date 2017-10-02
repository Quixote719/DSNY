import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'height': '90px',
        'background-color':'lightblue',
        'display':'inline-block',
        'min-height': '90px'
      },
      wide:{
        'width': '303px',
        'height': '90px',
        'background-color':'lightblue',
        'display':'inline-block',
        'min-height': '90px'
      }
    }
    return (
        <div style={styles.narrow} className='ContentCard'>
           <div className="CardTitle"></div>
           <div className="CardContent"></div>
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default TitleContentCard;
