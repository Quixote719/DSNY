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
          <div className='fileDropZoneHeader'>#File1</div>
            <div className='fileDropZoneBody'>you can upload up to 3 files,but the total size of all files uploaded cannot exceed 10 MB.</div>
          <Dropzone
  accept="image/jpeg, image/png,  .doc,.pdf"
>
  {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
    if (isDragActive) {
      return "This file is authorized";
    }
    if (isDragReject) {
      return "This file is not authorized";
    }
    return acceptedFiles.length || rejectedFiles.length
      ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
      : "Try dropping some files.";
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
