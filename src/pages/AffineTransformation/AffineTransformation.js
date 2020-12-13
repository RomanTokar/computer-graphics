import React, {useState} from 'react';
import MainWrapper from '../../layous/MainWrapper';
import AffineTransformationProperties from './AffineTransformationProperties';
import AffineTransformationView from './AffineTransformationView';

const AffineTransformation = () => {
  const [properties, setProperties] = useState({
    rotation: '',
    ax: '',
    ay: '',
    bx: '',
    by: '',
    cx: '',
    cy: ''
  });

  return (
    <MainWrapper
      Properties={
        <AffineTransformationProperties
          setProperties={setProperties} properties={properties}
        />
      }
      View={
        <AffineTransformationView
          properties={properties}
        />
      }
    />
  );
};

export default AffineTransformation;