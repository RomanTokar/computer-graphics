import React, {useState} from 'react';

import MainWrapper from '../../layous/MainWrapper';
import FractalProperties from './Properties';
import View from './View';

const Fractal = () => {
  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [colorScheme, setColorScheme] = useState('transparent');
  const [isClear, setIsClear] = useState(true);

  return (
    <MainWrapper
      Properties={
        <FractalProperties setIterationCount={setIterationCount} setFractal={setFractal}
                           setIsClear={setIsClear} setColorScheme={setColorScheme}
        />
      }
      View={
        <View iterationCount={iterationCount} fractal={fractal} colorScheme={colorScheme}
              isClear={isClear}
        />
      }
    />
  );
};

export default Fractal;