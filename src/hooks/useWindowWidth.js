import {useCallback, useEffect, useState} from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  const handleResizeWindow = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  })

  return width;
}

export default useWindowWidth;