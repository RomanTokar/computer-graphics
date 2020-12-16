import React, {useState} from 'react';
import MainWrapper from '../../layous/MainWrapper';
import Properties from './Properties';
import View from './View';

const AffineTransformation = () => {
  const [properties, setProperties] = useState({
    rotationInDegrees: 0,
    points: [[0, 0], [0, 0], [0, 0]]
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