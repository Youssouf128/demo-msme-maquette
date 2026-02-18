import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GuichetUnique from './pages/GuichetUnique'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/g2b" element={<GuichetUnique />} />
      </Routes>
    </Router>
  )
}

export default App
