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
     console.log(files);
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
          <Dropzone onDrop={this.onDrop.bind(this)} className='fileDropzone' activeClassName='fileDropzoneAcpt' acceptClassName='fileDropzoneAcpt' rejectClassName='fileDropzoneRej' accept="image/jpeg, image/png,.pdf">
  {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
    if (isDragActive) {

      return (<div className='alignCenter'>this file is accepted</div>);
    }
    if (isDragReject) {
      return "This file is not authorized";
    }
    return acceptedFiles.length
      ?  this.state.files.map(f => <div className='alignCenter filedropZoneinfo' key={f.name}> Name: {f.name}, Type: {f.type} Size:{f.size} bytes</div>)
      : rejectedFiles.length ? <div className='alignCenter filedropZoneinfo'>this file is not authorized type</div> : <div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/collectionschedule-recycling.svg')} alt='upload File' width={40} className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>;
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
