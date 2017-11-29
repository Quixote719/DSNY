import React, { Component } from 'react';
import RoundProfile from '../shared/RoundProfile';
import SubSectionHeader from '../shared/sub_section_header'
import { Link } from 'react-router-dom';


class LeadershipSection extends Component {
  render() {
    return (
      <div className="Leadership">
          <SubSectionHeader className='paddingRight' title = {this.props.LeadershipProps.title}/>
          <RoundProfile ProfileUrl = {this.props.LeadershipProps.ProfileUrl}/>
          <div className="LeadershipRight" >
            <div dangerouslySetInnerHTML={{__html: this.props.LeadershipProps.content}}></div>
            <span>Learn more about &nbsp;
              <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/about-commissioner"}>
                  Commissioner Kathryn Garcia
              </Link>
              <div style={{'marginTop': '20px'}}>
                <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/leadership"}>
                        ALL SENIOR STAFF
                </Link>
              </div>
            </span>
           </div>
      </div>
    )
  }
}

export default LeadershipSection;
