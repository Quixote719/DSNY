import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
import '../../content/styles/dsnyCard.css';

class TitleContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px'
      },
      wide:{
        'width': '303px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px'
      }
    }
    let CardType = styles.narrow;
    let link = this.props.link||'/about/bureaus';
    return (
      <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + link}>
        <div className="TitleContentCard" style={CardType}>
           <div className="CardTitle">{this.props.title}</div>
           <div className="CardContent" >
              <Dotdotdot clamp={3}>
                  <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
              </Dotdotdot>
           </div>
        </div>
      </Link>
    );
  };
};



export default TitleContentCard;
