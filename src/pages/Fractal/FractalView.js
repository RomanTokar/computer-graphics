import React from 'react';
import {AnimatedPythagorasTree} from 'react-armory-pythagoras-tree';
import KochSnowflake from './KochSnowflake';

const FractalView = ({fractal, iterationCount, isClear, KochSnowflakeWidth}) => {
  return (
    !isClear &&
    <>
      {fractal === 'pifagoras-tree' &&
      <AnimatedPythagorasTree totalLevels={iterationCount}/>}
      {fractal === 'knoch-snowflake' && <KochSnowflake width={KochSnowflakeWidth} zoom={iterationCount}/>}
    </>

  );
};

export default FractalView;