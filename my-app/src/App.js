import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CodeLab from './Components/CodeLab'
import Course from './Components/Course'
import Devlopers from './Components/Devlopers'
import Home from './Components/Home'
import RoadMap from './Components/RoadMap'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={ <Course/>}/>
        <Route path='/roadmap' element={ <RoadMap/>}/>
        <Route path='/codelab' element={<CodeLab/>}/>
        <Route path='/developers' element={<Devlopers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

