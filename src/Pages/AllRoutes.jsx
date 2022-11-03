import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Login from './Login'
import Movies from './Movies'
import Music from './Music'
import Payment from './Payment'
import PremiumPlan from './PremiumPlan'
import Register from './Register'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/music" element={<Music/>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/premiumplan" element={<PremiumPlan />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  )
}
