import React from 'react'
import './App.css'

import Content from './components/Content'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>
  )
}

export default App
