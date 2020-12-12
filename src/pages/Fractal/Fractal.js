import React, {useRef, useState} from 'react';

import MainWrapper from '../../layous/MainWrapper';
import FractalProperties from './FractalProperties';
import FractalView from './FractalView';
import useWindowWidth from '../../hooks/useWindowWidth';

const Fractal = () => {
  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [isClear, setIsClear] = useState(true);
  const viewWrapperRef = useRef();
  useWindowWidth();

  return (
    <MainWrapper
      Properties={
        <FractalProperties setIterationCount={setIterationCount} setFractal={setFractal}
                           setIsClear={setIsClear}
        />
      }
      View={
        <div ref={viewWrapperRef} style={{height: '100%', position: 'relative'}}>
          <FractalView iterationCount={iterationCount} fractal={fractal}
                       isClear={isClear} KochSnowflakeWidth={viewWrapperRef.current?.clientWidth}/>
        </div>
      }
    />
  );
};

export default Fractal;