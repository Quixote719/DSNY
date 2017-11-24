import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../../content/styles/dsnyCard.css';
import PropTypes from 'prop-types';

class TitleCardExternalLink extends Component {
  render() {
    const styles={
      without_border:{
        'height': '90px',
        'display':'inline-block',
      },
      with_border:{
        'height': '90px',
        'display':'inline-block',
        'border': '1px solid #7CC04B'
      }
    }
    let CardType = styles.without_border;
    switch(this.props.type){
      case '1':{
        CardType = styles.without_border;
        break;
      }
      case '2':{
        CardType = styles.with_border;
        break;
      }
      default:{
        break;
      }
    }

    let link = this.props.link;
    return (
        <Link to={link}>
            <div style = {CardType} className='CardTitle'>
                {this.props.title}
            </div>
        </Link>
    );
  };
};

export default TitleCardExternalLink;
