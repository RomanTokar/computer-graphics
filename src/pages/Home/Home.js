import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  welcomeTitle: {
    fontSize: 64,
    fontWeight: 400
  },
  description: {
    fontSize: 48,
    fontWeight: 400,
    height: 425,
    width: '80%',
    wordWrap: 'break-word'
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Typography className={classes.welcomeTitle} gutterBottom>Welcome!</Typography>
      <Typography className={classes.description}>
        {'I created this web site to pass CG exam. And it also covers fractal display, particularly Koch snowflake, color models (HSL, CMYK) and affine transformation.'}
      </Typography>
    </div>
  );
};

export default Home;