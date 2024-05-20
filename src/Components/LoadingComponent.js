import React from 'react';
import Ebqw from './Ebqw.gif';

const LoadingComponent = () => {
  return (
    <div>
      <div className="container d-flex flex-row flex-wrap justify-content-center align-item-center">
        <img src={Ebqw} alt="Loading" />
      </div>
    </div>
  )
}

export default LoadingComponent
