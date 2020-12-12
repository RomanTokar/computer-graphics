import Home from '../Home/Home';
import Fractal from '../Fractal/Fractal';
import ColorModels from '../ColorModels/ColorModels';
import AffineTransformation from '../AffineTransformation/AffineTransformation';

const routes = [
  {
    path: '/home',
    label: 'Home',
    component: Home
  },
  {
    path: '/fractal',
    label: 'Fractal',
    component: Fractal
  },
  {
    path: '/color-models',
    label: 'Color models',
    component: ColorModels
  },
  {
    path: '/affine-transformation',
    label: 'Affine transformation',
    component: AffineTransformation
  }
];

export default routes;