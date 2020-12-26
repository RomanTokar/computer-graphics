import React, {useEffect, useRef, useState} from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import * as convert from 'color-convert';

const useStyles = makeStyles({
  image: {
    width: 300
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

const View = ({fileSrc, blueFilterSaturation, blueFilterBrightness, setHsl, setCmyk}) => {
  const classes = useStyles();
  const canvasRef = useRef();
  const imageRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const initPixels = useRef(null);
  const imageData = useRef();

  const onMouseMove = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const offset = (imageRef.current.clientWidth * y + x) * 4;
    const rgb = imageData.current.data.slice(offset, offset + 3);

    const hsl = convert.rgb.hsl(rgb);
    const cmyk = convert.rgb.cmyk(rgb);

    setHsl(hsl.join(' '));
    setCmyk(cmyk.join(' '));
  };

  const onLoadImage = () => {
    setIsImageLoaded(true);
    setInitialCanvas();
  };

  const setInitialCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;
    const width = image.clientWidth;
    const height = image.clientHeight;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0, width, height);
    imageData.current = getPixels();
    initPixels.current = [...imageData.current.data];
  };

  const getPixels = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  };

  const getScrollValue = (initValue, percent) => {
    return percent > 50
      ? initValue + (percent - 50)
      : initValue - (50 - percent);
  };

  const filter = () => {
    for (let i = 0; i < imageData.current.data.length; i += 4) {
      let rgb = imageData.current.data.slice(i, i + 3);
      let hsl = convert.rgb.hsl(rgb);
      let initRgb = initPixels.current.slice(i, i + 3);
      let initHsl = convert.rgb.hsl(initRgb);

      const saturation = getScrollValue(initHsl[1], blueFilterSaturation)
      const brightness = getScrollValue(initHsl[2], blueFilterBrightness)

      hsl[0] = blueFilterSaturation === 50 && blueFilterBrightness === 50 ? initHsl[0] : 240;
      hsl[1] = Math.max(0, Math.min(saturation, 100));
      hsl[2] = Math.max(0, Math.min(brightness, 100));

      rgb = convert.hsl.rgb(hsl);

      imageData.current.data[i] = rgb[0];
      imageData.current.data[i + 1] = rgb[1];
      imageData.current.data[i + 2] = rgb[2];
    }
  };

  useEffect(() => {
    if (fileSrc) {
      setIsImageLoaded(false);
      imageRef.current.onload = onLoadImage;
    }
  }, [fileSrc]);

  useEffect(() => {
    if (isImageLoaded) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      filter();
      ctx.putImageData(imageData.current, 0, 0);
    }
  }, [isImageLoaded, blueFilterSaturation, blueFilterBrightness]);

  return (
    <Grid container direction={'column'} style={{height: '100%'}}>
      <Grid item container direction={'column'} style={{minHeight: '50%'}}>
        <Grid item className={classes.imageTitleContainer}>
          <Typography className={classes.imageTitle}>Input Image</Typography>
        </Grid>
        <Grid item container justify={'center'} alignItems={'center'}>
          <Grid item>
            {fileSrc &&
            <img ref={imageRef} className={classes.image} src={fileSrc} alt={'initImage'}/>
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={'column'} style={{minHeight: '50%'}}>
        <Grid item className={classes.imageTitleContainer}>
          <Typography className={classes.imageTitle}>Output Image</Typography>
        </Grid>
        <Grid item container justify={'center'} alignItems={'center'}>
          <Grid item>
            {fileSrc &&
            <canvas onMouseMove={onMouseMove} className={'filterImage'} ref={canvasRef}/>
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default View;