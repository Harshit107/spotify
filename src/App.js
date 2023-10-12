import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './screens/home/home';
import Feed from './screens/feed/feed';
import Trending from './screens/trending/trending';
import Sidebar from './components/sidebar/sidebar';
import Library from './screens/library/library';
import Favorites from './screens/favorites/favorites'
import Player from './screens/player/player'

function App() {

  return (
    <BrowserRouter>
      <div className="main-div">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/player' element={<Player />} />
          <Route path='/favorites' element={<Favorites />} />


        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;










/* const routes = createBrowserRouter([
    { path: '/', children: [
      { path: '/', element: <Library />, index : true },
      { path: '/trending', element: <Trending /> }
    ]},
    { path: '/feed', element: <Feed /> },
  ]);

  return (
    <div className='main-div'>
       <RouterProvider router={routes} />
    </div>
  );
  */
