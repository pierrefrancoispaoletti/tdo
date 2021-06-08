import React from 'react';
import HeartTDO from './COEUR_TDO_GIF.gif';

import './loader.scss';

const LoaderComponent = () => (
  <div className="box">
    <img
      src={HeartTDO}
      width="100%"
      height="100%"
      alt=""
    />
  </div>
);

export default LoaderComponent;
