import React from 'react';
import {AnimatedPythagorasTree} from 'react-armory-pythagoras-tree';
import KochSnowflake from './KochSnowflake';

const FractalView = ({fractal, iterationCount, isClear}) => {
  return (
    !isClear &&
    <>
      {fractal === 'pifagoras-tree' &&
      <AnimatedPythagorasTree totalLevels={iterationCount}/>}
      {fractal === 'knoch-snowflake' && <KochSnowflake zoom={iterationCount}/>}
    </>

  );
};

export default FractalView;