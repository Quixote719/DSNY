import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      narrow:{
        'height': '90px',
        'display':'inline-block',
      },
      narrow_border:{
        'height': '90px',
        'display':'inline-block',
        'border': '1px solid #7CC04B'
      },
      wide:{
        'height': '90px',
        'display': 'inline-block',
      },
      wide_border:{
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
      default:{
        break;
      }
    }

    let link = this.props.link||'/about/bureaus';
    return (
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + this.props.link}>
              <div style = {CardType} className='CardTitle'>
                      {this.props.title}
              </div>
          </Link>
    );
  };
};


export default TitleCard;
