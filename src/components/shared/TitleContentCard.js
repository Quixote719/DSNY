import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';
import '../../content/styles/dsnyCard.css';

class TitleContentCard extends Component {
  render() {

    const {dataObject} = this.props;

    const styles={
      narrow:{
        'width': '220px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px'
      },
      narrow_border:{
        'width': '220px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px',
        'border': '1px solid #7CC04B'
      },
      wide:{
        'width': '303px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px'
      },
      wide_border:{
        'width': '303px',
        'backgroundColor':'#FFFFFF',
        'display':'inline-block',
        'height': '200px',
        'border': '1px solid #7CC04B'
      }
    }
    let CardType = this.props.type!==undefined?styles[this.props.type]:styles.narrow
    let link = dataObject.linked_page.url||'/about/bureaus';
    let content = dataObject.content||'';
    return (
        <div className="TitleContentCard" style={CardType}>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + link}>
            <div className="TitleContentLink">
             <div className="CardTitle">{dataObject.title}</div>
             <div className="CardContent" >
             <TruncateMarkup lines={3}>
               <div>
                 {Parser(content)}
               </div>
             </TruncateMarkup>
             </div>
            </div>
          </Link>
        </div>
    );
  };
};



export default TitleContentCard;
