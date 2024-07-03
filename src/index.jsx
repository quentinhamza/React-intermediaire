import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Freelances from './pages/Freelances'
import Survey from './pages/Survey'
import Error from './components/Error'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} /> {/* Default to error page */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
