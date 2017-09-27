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

// const styles = {
//   sectionHeader: {
//     display: 'flex',
//     height: 33,
//     color: '#000000',
//     fontFamily: "Helvetica Neue",
//     fontSize: 36,
//     fontWeight: 800,
//     letterSpacing: -1
//   },
//   patternLineGreen: {
//     height: 10,
//     marginTop: 20,
//     marginBottom: 25,
//     background: 'repeating-linear-gradient(135deg, white 0px, white 1px,  #7cc04b 2px,  #7cc04b 2px)'
//   }
// };

export default SubSectionHeader;
