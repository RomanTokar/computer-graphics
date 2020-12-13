import React from 'react';
import {AnimatedPythagorasTree} from 'react-armory-pythagoras-tree';
import KochSnowflake from './KochSnowflake';

const View = ({fractal, iterationCount, colorScheme, isClear, KochSnowflakeWidth}) => {
  return (
    !isClear &&
    <>
      {fractal === 'pifagoras-tree' &&
      <AnimatedPythagorasTree colorSchema={colorScheme} totalLevels={iterationCount}/>}
      {fractal === 'knoch-snowflake' && <KochSnowflake width={KochSnowflakeWidth} zoom={iterationCount}/>}
    </>

  );
};

export default View;