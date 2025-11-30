import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from '../Pages/Portfolio.jsx'
import ResearchJointMotion from '../Pages/ResearchJointMotion.jsx'
import ResearchPendulumRobot from '../Pages/ResearchPendulumRobot.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/researchjointmotion" element={<ResearchJointMotion />} />
        <Route path="/researchpendulumrobot" element={<ResearchPendulumRobot />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
