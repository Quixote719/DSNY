import React, {Component} from "react";
import PropTypes from 'prop-types';

class ContentCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '460px',
        'min-height': '200px',
        'padding': '15px 20px',
        'background-color':'#FFFFFF',
        'display':'inline-block'
      },
      wide:{
        'width': '617px',
        'min-height': '200px',
        'padding': '20px',
        'background-color':'#FFFFFF',
        'display':'inline-block'
      }
    }
    return (
        <div style = {this.props.type=='2'?styles.wide:styles.narrow} className='CardContent'
            dangerouslySetInnerHTML={{__html: this.props.content}}>
        </div>
    );
  };
};



export default ContentCard;
