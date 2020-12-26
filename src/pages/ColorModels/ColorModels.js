import React, {useState} from 'react';
import MainWrapper from '../../layous/MainWrapper';
import Properties from './Properties';
import View from './View';

const ColorModels = () => {
  const [fileSrc, setFileSrc] = useState('');
  const [blueFilterSaturation, setBlueFilterSaturation] = useState(50);
  const [blueFilterBrightness, setBlueFilterBrightness] = useState(50);
  const [hsl, setHsl] = useState('');
  const [cmyk, setCmyk] = useState('');

  return (
    <MainWrapper
      Properties={
        <Properties {...{
          setFileSrc, setBlueFilterBrightness, setBlueFilterSaturation,
          blueFilterSaturation, blueFilterBrightness, hsl, cmyk
        }}
        />
      }
      View={
        <View {...{
          fileSrc,
          blueFilterBrightness,
          blueFilterSaturation,
          setHsl, setCmyk
        }}/>
      }
    />
  );
};

export default ColorModels;