import _ from "lodash";
import React, {Component} from "react";
import { Col} from 'react-bootstrap';
import Dropzone from 'react-dropzone'


class FormFileDropZone extends Component {

  constructor() {
     super()
     this.state = {
       file: []
      }
   }

  onDrop(file) {
    this.state = { file: [] }
    var f = this.state.file;
    f = _.union(f, [file]);
    this.setState({file: f}, () => { this.props.onChange(this.props.name, this.state.file) });
  }

  renderFile() {
    return (
      <Col xs={12}>
        <div className='fileDropZoneHeader'>{this.props.header}</div>
        <div className='fileDropZoneNote'>{this.props.note}</div>
        <Dropzone onDrop={this.onDrop.bind(this)} className='fileDropzone' activeClassName='fileDropzoneAcpt' acceptClassName='fileDropzoneAcpt' rejectClassName='fileDropzoneRej' accept="image/jpeg, image/png,.pdf">

          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (this.props.value[0]){
            return (this.body('Success', this.props.value[0][0].name));
            }
            if (isDragActive) {
              return (<div className='alignCenter'>this file is accepted</div>);
            }
            if (isDragReject) {
              return "This file is not authorized";
            }
            return acceptedFiles.length
              ?  this.state.file.map(f => this.body('Success', f[0].name))
              : rejectedFiles.length ? this.body('error'): this.body('placeHolder');
          }}
        </Dropzone>
      </Col>)
  }

  body(type,name){
    switch (type) {
      case 'placeHolder':

      return(<div className='alignCenter filedropZoneinfo'><img src={require('../../content/images/file_upload_default.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
      break;
      case 'error':
      return(<div className='alignCenter filedropZoneinfo fileDropzoneRej'><img src={require('../../content/images/file_upload_error.png')} alt='upload File'  className="recyclingIcon" /><div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
      case 'Success':
        if (_.includes(name, '.pdf')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_pdf.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }
        if (_.includes(name, '.PDF')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_pdf.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }
        if (_.includes(name, '.png')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }
        if (_.includes(name, '.PNG')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }

        if (_.includes(name, '.jpeg')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }
        if (_.includes(name, '.JPEG')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }

        if (_.includes(name, '.jpg')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
        }
        if (_.includes(name, '.JPG')) {
          return(<div className='alignCenter filedropZoneinfo fileDropzoneAcpt'><img src={require('../../content/images/file_upload_image.png')} alt='upload File'  className="recyclingIcon" /><div><div>{name}</div><div className='click-on-the-icon'>CLICK ON THE ICON OR DRAG & DROP AN IMAGE / PDF FILE</div><div className='file-types'>Max File Size: 10MB  Images: .PNG .JPG .EPS .GIF</div></div></div>)
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
        {this.renderFile()}
      </div>
    );
  };
};



const FileDropZone = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  header,
  note,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]

  return (
    <div >
      {<FormFileDropZone header={header} note={note} value={props.values[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
    </div>
  )
}

export default FileDropZone;
