import React from 'react'
import Navbar from '../home_components/Navbar'
import {Routes,Route} from"react-router-dom"
import Home from '../pages/Home'
import Fotter from '../home_components/Fotter'
import Support from '../pages/Support'
const MainRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path={"/"} element={<Home/>}/>
           <Route path={"/support"} element={<Support/>}/>
        </Routes>
        <Fotter/>
    </div>
  )
}

export default MainRoute