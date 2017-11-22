import React from "react";
import { Col} from 'react-bootstrap';
import Parser from 'html-react-parser';
const FormAddressValidatorError = props => {
  return (
    <div>
      <Col xs={12}>
        <div className='formStateError'>
          {Parser(props.children)}
        </div>
      </Col>
    </div>
  );
};

export default FormAddressValidatorError;
