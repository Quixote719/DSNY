import React, {Component} from "react";
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import styles from '../../content/styles/dsnyCard.css';

class TitleContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'background-color':'#FFFFFF',
        'display':'inline-block',
        'min-height': '200px'
      },
      wide:{
        'width': '303px',
        'background-color':'#FFFFFF',
        'display':'inline-block',
        'min-height': '200px'
      }
    }
    let CardType = styles.narrow;
    return (
        <div className="TitleContentCard" style={CardType}>
           <div className="CardTitle">{this.props.title}</div>
           <div className="CardContent" >
              <Dotdotdot clamp={3}>
                  <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
              </Dotdotdot>
           </div>
        </div>
    );
  };
};



export default TitleContentCard;
