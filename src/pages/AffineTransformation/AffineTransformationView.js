import React from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  viewTitle: {
    fontSize: 24,
    fontWeight: 700
  },
  viewTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#E6E6E6',
    padding: 10,
    border: '1px solid #C9C9C9'
  }
});

const AffineTransformationView = ({properties}) => {
  const classes = useStyles();

  return (
    <Grid container direction={'column'}>
      <Grid item className={classes.viewTitleContainer}>
        <Typography className={classes.viewTitle}>View</Typography>
      </Grid>
      <Grid item>

      </Grid>
    </Grid>
  );
};

export default AffineTransformationView;