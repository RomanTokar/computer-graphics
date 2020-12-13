import React, {useRef, useState} from 'react';

import MainWrapper from '../../layous/MainWrapper';
import FractalProperties from './Properties';
import View from './View';
import useWindowWidth from '../../hooks/useWindowWidth';

const Fractal = () => {
  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [colorScheme, setColorScheme] = useState('transparent');
  const [isClear, setIsClear] = useState(true);
  const viewWrapperRef = useRef();
  useWindowWidth();

  return (
    <MainWrapper
      Properties={
        <FractalProperties setIterationCount={setIterationCount} setFractal={setFractal}
                           setIsClear={setIsClear} setColorScheme={setColorScheme}
        />
      }
      View={
        <div ref={viewWrapperRef} style={{height: '100%', position: 'relative'}}>
          <View iterationCount={iterationCount} fractal={fractal} colorScheme={colorScheme}
                isClear={isClear} KochSnowflakeWidth={viewWrapperRef.current?.clientWidth}/>
        </div>
      }
    />
  );
};

export default Fractal;