import React from 'react';
import {Grid, makeStyles, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    height: 'calc(100vh - 160px)'
  },
  mainItems: {
    border: '1px solid #C9C9C9',
    height: '100%',
    background: '#FAFAFA'
  },
  propertiesContainer: {
    padding: '10px 30px',
    background: '#E6E6E6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  propertiesTitle: {
    fontSize: 24,
    fontWeight: 700
  },
  propertiesContent: {
    padding: '25px 20px'
  }
});

const MainWrapper = ({Properties, View}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer} spacing={2}>
      <Grid item container direction={'column'} xs={3}>
        <Paper className={classes.mainItems}>
          <Grid item className={classes.propertiesContainer}>
            <Typography className={classes.propertiesTitle}>Properties</Typography>
          </Grid>
          <Grid item className={classes.propertiesContent}>
            {Properties}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.mainItems}>{View}</Paper>
      </Grid>
    </Grid>
  );
};

export default MainWrapper;