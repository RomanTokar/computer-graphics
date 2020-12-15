import React, {useState} from 'react';
import MainWrapper from '../../layous/MainWrapper';
import Properties from './Properties';
import View from './View';

const AffineTransformation = () => {
  const [properties, setProperties] = useState({
    rotation: 0,
    ax: 0,
    ay: 0,
    bx: 0,
    by: 0,
    cx: 0,
    cy: 0
  });

  return (
    <MainWrapper
      Properties={
        <Properties
          setProperties={setProperties} properties={properties}
        />
      }
      View={
        <View
          properties={properties}
        />
      }
    />
  );
};

export default AffineTransformation;