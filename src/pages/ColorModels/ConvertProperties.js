import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';

const ConvertProperties = () => {
  return (
    <Grid container direction={'column'} spacing={4} alignItems={'center'}>
      <Grid item>
        <Typography>Convert HSL into CMYK</Typography>
      </Grid>
      <Grid item>

      </Grid>
      <Grid item>

      </Grid>
      <Grid item>
        <Button type={'submit'} color={'primary'} variant={'contained'}>Convert</Button>
      </Grid>
    </Grid>
  );
};

export default ConvertProperties;