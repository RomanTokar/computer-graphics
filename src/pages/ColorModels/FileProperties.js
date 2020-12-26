import React, {useRef} from 'react';
import {Button, Grid, Slider, Typography} from '@material-ui/core';

const FileProperties = ({
  setBlueFilterBrightness, setBlueFilterSaturation, setFileSrc,
  blueFilterBrightness, blueFilterSaturation
}) => {
  const inputRef = useRef();

  const handleUploadFile = () => {
    const file = inputRef.current.files[0];

    if (file) {
      const src = URL.createObjectURL(file);
      setFileSrc(src);
    }
  };

  const handleSaturationChange = (event, newValue) => {
    setBlueFilterSaturation(newValue);
  };

  const handleBrightnessChange = (event, newValue) => {
    setBlueFilterBrightness(newValue);
  };

  return (
    <Grid container direction={'column'} spacing={4} alignItems={'center'}>
      <Grid item>
        <input type="file" ref={inputRef}/>
      </Grid>
      <Grid item>
        <Button type={'button'} color={'primary'}
                variant={'contained'} onClick={handleUploadFile}
        >
          Upload
        </Button>
      </Grid>
      <Grid item>
        <Typography>Blue Filter Saturation ({blueFilterSaturation})</Typography>
        <Slider value={blueFilterSaturation} onChange={handleSaturationChange}/>
      </Grid>
      <Grid item>
        <Typography>Blue Filter Brightness ({blueFilterBrightness})</Typography>
        <Slider value={blueFilterBrightness} onChange={handleBrightnessChange}/>
      </Grid>
    </Grid>
  );
};

export default FileProperties;