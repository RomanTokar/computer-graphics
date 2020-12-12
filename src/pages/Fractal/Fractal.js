import React, {useState} from 'react';

import MainWrapper from '../../layous/MainWrapper';
import FractalProperties from './FractalProperties';
import FractalView from './FractalView';

const Fractal = () => {
  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [isClear, setIsClear] = useState(true);

  return (
    <MainWrapper
      Properties={
        <FractalProperties setIterationCount={setIterationCount} setFractal={setFractal}
                           setIsClear={setIsClear}
        />
      }
      View={
        <FractalView iterationCount={iterationCount} fractal={fractal} isClear={isClear}/>
      }
    />
  );
};

export default Fractal;