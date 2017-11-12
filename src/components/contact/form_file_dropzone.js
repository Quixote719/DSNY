import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import Dropzone from 'react-dropzone'


class FormFileDropZone extends Component {

  constructor() {
     super()
     this.state = { files: [] }
   }

   onDrop(files) {
      this.setState({
        files
      });
    }

  render() {
    return (
      <div>
        <Col xs={12}>
          <div className='fileDropZoneHeader'>{this.props.name}</div>
          <div className='fileDropZoneNote'>{this.props.note}</div>
          <Dropzone className='fileDropzone' activeClassName='fileDropzoneAcpt' acceptClassName='fileDropzoneAcpt' rejectClassName='fileDropzoneRej' accept="image/jpeg, image/png,.pdf">
  {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
    if (isDragActive) {

      return "This file is authorized";
    }
    if (isDragReject) {
      return "This file is not authorized";
    }
    return acceptedFiles.length
      ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length}`
      : <div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/collectionschedule-recycling.svg')} alt='upload File' width={40} className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>;
  }}
       </Dropzone>
        </Col>
      </div>
    );
  };
};

FormFileDropZone.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default FormFileDropZone;
