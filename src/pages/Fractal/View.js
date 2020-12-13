import React, {useRef} from 'react';
import KochSnowflake from './KochSnowflake';
import useWindowWidth from '../../hooks/useWindowWidth';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import {AnimatedPythagorasTree} from './PifagorasTree';

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

const View = ({fractal, iterationCount, colorScheme, isClear}) => {
  const classes = useStyles();
  const viewWrapperRef = useRef();
  useWindowWidth();

  return (
    <Grid container direction={'column'} style={{height: '100%'}}>
      <Grid item className={classes.viewTitleContainer}>
        <Typography className={classes.viewTitle}>View</Typography>
      </Grid>
      <Grid item style={{height: '90%'}}>
        {!isClear &&
        <div ref={viewWrapperRef} className={'dfjdk'} style={{height: '100%', position: 'relative'}}>
          {fractal === 'pifagoras-tree' &&
          <AnimatedPythagorasTree animating={true} colorScheme={colorScheme} totalLevels={iterationCount}/>}
          {fractal === 'knoch-snowflake' &&
          <KochSnowflake width={viewWrapperRef.current?.clientWidth}
                         zoom={iterationCount}
                         colorScheme={colorScheme}
          />}
        </div>
        }
      </Grid>
    </Grid>
  );
};

export default View;