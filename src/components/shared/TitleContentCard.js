import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
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
    return (
        <div className="TitleContentCard" style={CardType}>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + link}>
            <div className="TitleContentLink">
             <div className="CardTitle">{dataObject.title}</div>
             <div className="CardContent" >
                <Dotdotdot clamp={3}>
                    <div dangerouslySetInnerHTML={{__html: dataObject.content}}></div>
                </Dotdotdot>
             </div>
            </div>
          </Link>
        </div>
    );
  };
};



export default TitleContentCard;
