import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Feed from './screens/feed';
import Trending from './screens/trending';

function App() {
  const routes = createBrowserRouter([
    { path: '/', children: [
      { path: '/', element: <Home />, index : true },
      { path: '/trending', element: <Trending /> }
    ]},
    { path: '/feed', element: <Feed /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
