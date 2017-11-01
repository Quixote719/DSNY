import React, { Component } from 'react';
import ContentCard from '../shared/ContentCard'


class GetInvolvedSection extends Component {


  render() {
    const style = {
                    'backgroundImage': `url(${this.props.GetInvolvedProps.image})`,
                    'backgroundSize': '100% 900px',
                    'height': '500px',
                    'background-position': '50% 50%;',
                    'margin-top': '25px'
                  }

    const cardStyle = {
                        'float': 'left',
                        'marginTop': '25px'
                      }

    return (
      <div className='ImageSection' style={style} >
        <div className = 'SContainer'>
            <div className = 'whiteTitle'>Get Involved</div>
            <div style={cardStyle}>
                <ContentCard type='2' content={this.props.GetInvolvedProps.content}/>
            </div>

        </div>
      </div>
    )
  }
}

export default GetInvolvedSection;
