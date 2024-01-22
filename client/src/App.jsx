import { useState } from 'react'
import './App.css'
import Newentry from './assets/components/Newentry'
import Table from './assets/components/Table'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './assets/components/Update'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table/>}/>
        <Route path='/newdata' element={<Newentry/>}/>
        <Route path='/update' element={<Update/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
