import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Compare } from '../pages/Compare';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Home /> }
    ],
  },
  {
    path: '/compare',
    element: <Compare />,
    children: [
      { index: true, element: <Compare /> }
    ],
  },
]);