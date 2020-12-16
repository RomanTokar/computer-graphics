import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 636
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
  },
  footer: {
    width: '100%',
    height: 204,
    background: '#333333'
  },
  footerTitle: {
    fontSize: 24,
    padding: '32px 42px',
    color: '#828282'
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.homeContainer}>
        <Typography className={classes.welcomeTitle} gutterBottom>Welcome!</Typography>
        <Typography className={classes.description}>
          {'I created this web site to pass CG exam. And it also covers fractal display, particularly Koch snowflake, color models (HSL, CMYK) and affine transformation.'}
        </Typography>
      </div>
      <footer className={classes.footer}>
        <Typography className={classes.footerTitle}>2020 copyright Yurii matus</Typography>
      </footer>
    </>
  );
};

export default Home;