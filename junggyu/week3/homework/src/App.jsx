import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mypage from './pages/Mypage'
import NotFound from './pages/NotFound'
import Top100 from './pages/Top100'
import Login from './pages/Login'
import MovieList from './pages/MovieList'
import { Layout } from './components/layouts/Layout'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/top100' element={<Top100 />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
