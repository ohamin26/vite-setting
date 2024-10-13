import { createBrowserRouter } from 'react-router-dom';
import { Test2 } from '@/test2';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Test2 />,
  },
];

export const router = createBrowserRouter(routes);
