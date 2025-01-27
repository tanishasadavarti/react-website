import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Elite from '../pages/Elite'
import Brands from '../pages/Brands'
import Magazine from '../pages/Magazine'
import Offers from '../pages/Offers'
import Spurge from '../pages/Spurge'
import New from '../pages/New'
import Description from '../pages/Description'
import Addtocart from '../pages/Addtocart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Allroutes = () => {
  return (
    <div>  
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/brands'element={<Brands/>}></Route>
        <Route path='/offers'element={<Offers/>}></Route>
        <Route path='/new'element={<New />}></Route>
        <Route path='/spurgy'element={<Spurge/>}></Route>
        <Route path='/magazine'element={<Magazine/>}></Route>
        <Route path='/eliteoffers'element={<Elite/>}></Route>
        <Route path='/description/:id' element={<Description/>}></Route>
        <Route  path='/addtocart'element={<Addtocart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
