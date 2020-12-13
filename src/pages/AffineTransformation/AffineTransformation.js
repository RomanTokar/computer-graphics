import React from 'react';
import MainWrapper from '../../layous/MainWrapper';
import AffineTransformationProperties from './AffineTransformationProperties';
import AffineTransformationView from './AffineTransformationView';

const AffineTransformation = () => {
  return (
    <MainWrapper
      Properties={
        <AffineTransformationProperties/>
      }
      View={
        <AffineTransformationView/>
      }
    />
  );
};

export default AffineTransformation;