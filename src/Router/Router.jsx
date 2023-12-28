import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../ui/Component/Header/Header'
import Home from '../ui/Pages/Home/Home'
import MovieList from '../ui/Component/MovieList/MovieList'
import MovieDetails from '../ui/Component/MovieDetails/MovieDetails'

export default function Router() {
  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Home/>} />
        <Route path='movie/:id' element={<MovieDetails/>} />
        <Route path='movies/:type' element={<MovieList/>} />
        <Route path='*' element={<h2>ERROR</h2>} />
    </Routes>
    </>
  )
}
