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
      <Grid item>
        <div
          style={{
            height: 80, width: 80, borderRadius: '50%', border: '1px solid gray',
            backgroundColor: `hsl(${
              hsl.split(' ').map((el, i) => i > 0 ? `${el}%` : el).join(' ')
            })`
          }}
        />
      </Grid>
    </Grid>
  );
});

export default ConvertProperties;