import React, {Component} from "react";

const FetchError = ({ message ,  onRetry}) => (
  <div className='container'>
    <img src={require('../../content/images/collectionschedule-recycling.svg')} alt='no server connection' width={100} className="recyclingIcon" />
    <h2>network error <br/> please check you connection or retyr</h2>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;
