import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Hooks from '../Pages/Hooks/Hooks'
import Redux from '../Pages/Redux/Redux'
import Datatrans from '../Pages/Datatrans/Datatrans'
import Reactcomps from '../Pages/Reactcomps/Reactcomps'
const Routefile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/redux' element={<Redux/>}/>
        <Route path='/datatransfer' element={<Datatrans/>}/>
        <Route path='/components' element={<Reactcomps/>}/>
    </Routes>
  )
}

export default Routefile