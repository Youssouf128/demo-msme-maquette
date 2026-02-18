import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GuichetUnique from './pages/GuichetUnique'
import StartupPortal from './pages/StartupPortal'
import StartupDashboard from './pages/StartupDashboard'
import LabellisationForm from './pages/LabellisationForm'
import IncitationsForm from './pages/IncitationsForm'
import AidesFinancieres from './pages/AidesFinancieres'
import NetworkingHub from './pages/NetworkingHub'
import AuthorityDashboard from './pages/AuthorityDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/g2b" element={<GuichetUnique />} />
        <Route path="/startup" element={<StartupPortal />} />
        <Route path="/startup/dashboard" element={<StartupDashboard />} />
        <Route path="/startup/labellisation" element={<LabellisationForm />} />
        <Route path="/startup/incitations" element={<IncitationsForm />} />
        <Route path="/startup/aides" element={<AidesFinancieres />} />
        <Route path="/startup/networking" element={<NetworkingHub />} />
        <Route path="/authority/dashboard" element={<AuthorityDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
