import React, {useCallback, useEffect, useRef, useState} from 'react';

export const PythagorasTree = () => {
  const [animating, setAnimating] = useState(false);

  const toggleAnimation = () => {
    setAnimating(prev => !prev);
  };

  return (
    React.createElement(AnimatedPythagorasTree, {animating},
      React.createElement('button', {
        onClick: toggleAnimation,
        type: 'button'
      }, animating ? 'Stop animation' : 'Start animation')
    )
  );
};

// This Component expects to receive a function on its `onChange` prop.
// It then calls that function from its own event handlers.
export function NumericInput({value, onChange}) {
  const numericValue = !value ? 0 : parseFloat(value);
  const setSway = (event) => onChange(event.target.value);
  const decreaseSway = () => onChange(String(numericValue - 0.02));
  const increaseSway = () => onChange(String(numericValue + 0.02));

  return (
    React.createElement('div', {},
      React.createElement('button', {type: 'button', onClick: decreaseSway}, '<'),
      React.createElement('input', {value: value, onChange: setSway}),
      React.createElement('button', {type: 'button', onClick: increaseSway}, '>')
    )
  );
}

export const AnimatedPythagorasTree = ({
  totalLevels = 5,
  baseLean = 0,
  baseHeightFactor = 0.37,
  size = 100,
  sprout = 0.01,
  sway = 0.04,
  children,
  animating,
  colorScheme = 'transparent'
}) => {
  const [time, setTime] = useState(0);
  const nextFrame = useRef(0);
  const lastFrame = useRef(0);

  const scheduleFrame = useCallback(() => {
    nextFrame.current = window.requestAnimationFrame(() => {
      const now = new Date().getTime();
      const delta = now - lastFrame.current;
      if (delta > 25) {
        // Max out at 40fps to conserve CPU cycles
        lastFrame.current = now;
        setTime(prev => prev + delta / 25);
      } else {
        scheduleFrame();
      }
    });
  }, []);

  useEffect(() => {
    if (animating) {
      lastFrame.current = new Date().getTime();
      scheduleFrame();
    }
    return () => {
      if (nextFrame.current) {
        window.cancelAnimationFrame(nextFrame.current);
        nextFrame.current = 0;
      }
    };
  });

  return (
    React.createElement('div', {},
      React.createElement(TreeBox, {
        heightFactor: Math.cos(time / 43) * sprout + baseHeightFactor,
        lean: Math.sin(time / 50) * sway + baseLean,
        size: size,
        totalLevels: totalLevels,
        level: 0,
        colorScheme
      }),
      React.createElement('div', {
        style: {
          position: 'absolute',
          right: 10,
          bottom: 10,
          left: 10
        }
      }, children)
    )
  );
};

export const TreeBox = (props) => {
  const style = getBoxStyle(props);
  const baseProps = Object.assign({}, props, {
    level: props.level + 1
  });
  const leftChild =
    props.level < props.totalLevels &&
    React.createElement(TreeBox, Object.assign({}, baseProps, {right: false}));
  const rightChild =
    props.level < props.totalLevels &&
    React.createElement(TreeBox, Object.assign({}, baseProps, {right: true}));

  return React.createElement('div', {style},
    leftChild,
    rightChild
  );
};

export function getBoxStyle({size, heightFactor, left, lean, level, totalLevels, right, colorScheme}) {
  const color = getColor(colorScheme, level, totalLevels)
  const scale = right
    ? Math.sqrt((size * heightFactor) ** 2 + (size * (0.5 + lean)) ** 2) / size
    : Math.sqrt((size * heightFactor) ** 2 + (size * (0.5 - lean)) ** 2) / size;
  const rotation =
    right
      ? Math.atan(heightFactor / (0.5 + lean))
      : -Math.atan(heightFactor / (0.5 - lean));

  const style = {
    position: 'absolute',
    bottom: 0,
    width: size,
    height: size,
    border: '2px solid black',
    transformOrigin: right ? `${size}px ${size}px` : `0 ${size}px`,
    transform: level === 0 ? '' : `
      translate3d(0, ${-size}px, 0)
      scale3d(${scale}, ${scale}, 1)
      rotate(${rotation}rad)
    `,
    backgroundColor: color
  };

  if (level === 0) {
    style.left = `calc(50% - ${size / 2}px + ${left || 0}px)`;
  }

  return style;
}

export function interpolateColor(x, r1, r2, g1, g2, b1, b2) {
  const r = Math.round(clamp(x, r1, r2));
  const g = Math.round(clamp(x, g1, g2));
  const b = Math.round(clamp(x, b1, b2));
  return `rgb(${r}, ${g}, ${b})`;
}

function clamp(x, min, max) {
  return min + (max - min) * x;
}

function getColor(colorScheme, level, totalLevels){
  switch (colorScheme) {
    case 'transparent':
      return interpolateColor((level / totalLevels) ** 2, 255, 255, 255, 255, 255, 255);
    case 'colorScheme1':
      return interpolateColor((level / totalLevels) ** 2, 80, 120, 54, 240, 104, 64);
    case 'colorScheme2':
      return interpolateColor((level / totalLevels) ** 2, 54, 240, 104, 64, 80, 120);
    case 'colorScheme3':
      return interpolateColor((level / totalLevels) ** 2, 104, 64, 80, 120, 54, 240);
    default:
      return interpolateColor((level / totalLevels) ** 2, 255, 255, 255, 255, 255, 255);
  }
}