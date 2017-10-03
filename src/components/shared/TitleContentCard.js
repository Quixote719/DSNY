import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'background-color':'#FFFFFF',
        'display':'inline-block',
        'min-height': '90px'
      },
      wide:{
        'width': '303px',
        'background-color':'#FFFFFF',
        'display':'inline-block',
        'min-height': '90px'
      }
    }
    return (
        <div style={styles.narrow} className='ContentCard'>
           <div className="CardTitle">James</div>
           <div className="CardContent">Bond</div>
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default TitleContentCard;
