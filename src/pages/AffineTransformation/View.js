import React, {useEffect, useRef, useState} from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import {select, scaleLinear, min, max, axisBottom, axisLeft, line} from 'd3';

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

const View = ({properties}) => {
  const classes = useStyles();
  const ref = useRef();
  const [points, setPoints] = useState(null);
  const [animating, setAnimating] = useState(false);
  const center = useRef([]);

  useEffect(() => {
    const {ax, ay, bx, by, cx, cy} = properties;

    center.current = [(ax + bx + cx) / 3, (ay + by + cy) / 3];

    setPoints([[ax, ay], [bx, by], [cx, cy], [ax, ay]]);
  }, [properties]);

  useEffect(() => {
    if (points) {
      const svg = select(ref.current);

      const width = 600, height = 600;

      const x = points.map(p => p[0]);
      const y = points.map(p => p[1]);

      const xScale = scaleLinear().domain([min(x) - 3, max(x) + 3]).range([0, width]);
      const yScale = scaleLinear().domain([min(y) - 3, max(y) + 3]).range([height, 0]);

      const xAxis = axisBottom(xScale);
      const yAxis = axisLeft(yScale);

      const myLine = line()
        .x(([x, y]) => xScale(x))
        .y(([x, y]) => yScale(y));

      svg
        .style('overflow', 'visible')
        .attr('width', width)
        .attr('height', height)
        .selectAll('path')
        .data([points])
        .join('path')
        .attr('d', myLine)
        .attr('fill', 'none')
        .attr('stroke', 'blue');

      svg
        .select('.x-axis')
        .style('transform', `translateY(${height}px)`)
        .call(xAxis);

      svg
        .select('.y-axis')
        .call(yAxis);
    }

    const timerId = setTimeout(() => {
      setAnimating(true)
    }, 500)

    return () => {
        clearTimeout(timerId)
    }
  }, [points]);

  useEffect(() => {
    if (animating) {

    }
  })

  return (
    <Grid container direction={'column'} style={{height: '100%'}}>
      <Grid item className={classes.viewTitleContainer}>
        <Typography className={classes.viewTitle}>View</Typography>
      </Grid>
      <Grid item container justify={'center'} alignItems={'center'} style={{height: '90%'}}>
        <Grid item>
          <svg ref={ref}>
            <path/>
            <g className={'x-axis'}/>
            <g className={'y-axis'}/>
          </svg>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default View;