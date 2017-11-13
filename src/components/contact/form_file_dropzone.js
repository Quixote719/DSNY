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
    
    
    body(type,name){
      switch (type) {
        case 'placeHolder':
      
      return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_default.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
      break;
      case 'error':
      return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_error.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
    
          break;
      
        case 'Success':
        console.log(name);
        if (_.includes(name, '.pdf')) {
          return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_pdf.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
          
        }
        if (_.includes(name, '.png')) {
          return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
          
        }
        if (_.includes(name, '.jpeg')) {
          return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
          
        }
        if (_.includes(name, '.jpg')) {
          return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
          
        }
        return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_default.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
      
            break;
          default:
          return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_default.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        
      }
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
      ?  this.state.files.map(f => this.body('Success', f.name))
      : rejectedFiles.length ? this.body('error'): this.body('placeHolder');
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
