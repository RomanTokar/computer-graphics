import React from 'react';
import {Divider} from '@material-ui/core';
import FileProperties from './FileProperties';
import ConvertProperties from './ConvertProperties';

const Properties = ({
  setFileSrc, setBlueFilterBrightness, setBlueFilterSaturation,
  blueFilterBrightness, blueFilterSaturation, hsl, cmyk
}) => {
  return (
    <>
      <FileProperties {...{
        setFileSrc, setBlueFilterSaturation, setBlueFilterBrightness,
        blueFilterSaturation, blueFilterBrightness
      }}
      />
      <Divider style={{margin: '20px 0'}}/>
      <ConvertProperties {...{hsl, cmyk}}/>
    </>
  );
};

export default Properties;