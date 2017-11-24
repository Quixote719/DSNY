import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubSectionHeader from '../shared/sub_section_header';
import SubSectionButton from '../shared/sub_section_button';
import '../../content/styles/ContactPage.css';

class Complaints extends Component {
    render() {
      return (
        <div className="Complaints">
          <SubSectionHeader title = {this.props.ComplaintsProps.title}/>
          <div dangerouslySetInnerHTML={{__html: this.props.ComplaintsProps.content}}></div>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact/complaints"}>
            <div className='viewAllComplaints'> <SubSectionButton title='VIEW ALL COMPLAINTS'/></div>
          </Link>
        </div>
      )
    }
  }
  
  export default Complaints;