import React, {useState} from 'react';
import MainWrapper from '../../layous/MainWrapper';
import Properties from './Properties';
import View from './View';

const ColorModels = () => {
  const [fileSrc, setFileSrc] = useState('');
  const [blueFilterSaturation, setBlueFilterSaturation] = useState(100);
  const [blueFilterBrightness, setBlueFilterBrightness] = useState(100);

  return (
    <MainWrapper
      Properties={
        <Properties {...{
          setFileSrc, setBlueFilterBrightness, setBlueFilterSaturation,
          blueFilterSaturation, blueFilterBrightness
        }}
        />
      }
      View={
        <View {...{fileSrc, blueFilterBrightness, blueFilterSaturation}}/>
      }
    />
  );
};

export default ColorModels;