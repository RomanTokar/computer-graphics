import React, {useEffect, useRef, useState} from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import {axisBottom, axisLeft, line, max, min, scaleLinear, select} from 'd3';

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
    const [points, setPoints] = useState([[0, 0], [0, 0], [0, 0], [0, 0]]);
    const [animating, setAnimating] = useState(false);
    const triangleCenter = useRef([0, 0]);
    const rotationInRadians = useRef(0);
    const startAnimationTime = useRef(0);
    const initialPoints = useRef([[0, 0], [0, 0], [0, 0], [0, 0]]);
    const animationTime = 3000;
    const horizontalWayLength = 5;

    useEffect(() => {
      const {points: entryPoints, rotationInDegrees} = properties;

      triangleCenter.current = entryPoints
        .reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1]], [0, 0])
        .map(el => el / 3);

      rotationInRadians.current = rotationInDegrees / 180 * Math.PI;
      initialPoints.current = [...entryPoints, entryPoints[0]];

      setPoints(initialPoints.current);

      if (entryPoints.flat(2).filter(p => p !== 0).length) {
        const timerId = setTimeout(() => {
          startAnimationTime.current = performance.now();

          setAnimating(true);
        }, 1000);

        return () => {
          clearTimeout(timerId);
        };
      }
    }, [properties]);

    useEffect(() => {
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
    }, [points]);

    useEffect(() => {
      if (animating) {
        const requestId = requestAnimationFrame(() => {
          let timeDifference = performance.now() - startAnimationTime.current;

          const tc = triangleCenter.current;
          const initPoints = initialPoints.current;
          const rotation = rotationInRadians.current;

          if (timeDifference > animationTime) {
            setAnimating(false);
            timeDifference = animationTime;
          }

          const partTime = timeDifference / animationTime;

          setPoints(prevPoints => (
            prevPoints.map((p, i) => {
              const initX = initPoints[i][0];
              const initY = initPoints[i][1];
              const radius = Math.sqrt((tc[0] - initX) ** 2 + (tc[1] - initY) ** 2);
              const startAngle = Math.atan2(initY - tc[1], initX - tc[0]);
              const currentAngle = rotation * partTime;
              const nextAngle = startAngle - currentAngle;
              const currentHorizontalWayLength = horizontalWayLength * partTime;
              const x = radius * Math.cos(nextAngle) + tc[0] + currentHorizontalWayLength;
              const y = radius * Math.sin(nextAngle) + tc[1];

              return [x, y];
            })
          ));
        });

        return () => {
          cancelAnimationFrame(requestId);
        };
      }
      ;
    })
    ;

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
  }
;

export default View;