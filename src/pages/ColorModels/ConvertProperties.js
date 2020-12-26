import React, {memo} from 'react';
import {Grid, TextField} from '@material-ui/core';

const ConvertProperties = memo(({hsl, cmyk}) => {
  return (
    <Grid container direction={'column'} spacing={4} alignItems={'center'}>
      <Grid item>
        <TextField disabled value={hsl} name={'hsl'} label={'HSL'} variant={'outlined'}/>
      </Grid>
      <Grid item>
        <TextField disabled value={cmyk} name={'cmyk'} label={'CMYK'} variant={'outlined'}/>
      </Grid>
    </Grid>
  );
})

export default ConvertProperties;