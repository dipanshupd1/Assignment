import { useState } from 'react'
import './App.css'
import Newentry from './assets/components/Newentry'
import Table from './assets/components/Table'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/newdata' element={<Newentry/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
