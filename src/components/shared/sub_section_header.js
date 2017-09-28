import React from "react";
import '../../content/styles/subSectionHeader.css';

const SubSectionHeader = props => {
  return (
    <div >
      <div className='sectionHeader'>
        {props.title}
      </div>
      <div className='patternLineGreen'></div>
    </div>

  );
};

export default SubSectionHeader;
