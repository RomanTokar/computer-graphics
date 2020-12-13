import React from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  filterImage: {
    width: 300,
    height: 300,
    backgroundSize: 'cover',
    backgroundImage: ({fileSrc}) => `linear-gradient(blue, blue), url(${fileSrc})`,
    backgroundBlendMode: 'color',
    filter: ({blueFilterBrightness, blueFilterSaturation}) => (
      `saturate(${blueFilterSaturation / 100}) brightness(${blueFilterBrightness / 100})`
    )
  },
  image: {
    width: 300,
    height: 300,
    backgroundSize: 'cover',
    backgroundImage: ({fileSrc}) => `url(${fileSrc})`
  },
  imageTitle: {
    fontSize: 24,
    fontWeight: 700
  },
  imageTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#E6E6E6',
    padding: 10,
    border: '1px solid #C9C9C9'
  }
});

const View = ({fileSrc, blueFilterSaturation, blueFilterBrightness}) => {
  const classes = useStyles({fileSrc, blueFilterBrightness, blueFilterSaturation});

  return (
    <Grid container direction={'column'} style={{height: '100%'}}>
      <Grid item container direction={'column'} style={{height: '50%'}}>
        <Grid item className={classes.imageTitleContainer}>
          <Typography className={classes.imageTitle}>Input Image</Typography>
        </Grid>
        <Grid item container justify={'center'} alignItems={'center'}>
          <Grid item>
            {fileSrc && <div className={classes.image}/>}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} style={{height: '50%'}}>
        <Grid item className={classes.imageTitleContainer}>
          <Typography className={classes.imageTitle}>Output Image</Typography>
        </Grid>
        <Grid item container justify={'center'} alignItems={'center'}>
          <Grid item>
          {fileSrc && <div className={classes.filterImage}/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default View;