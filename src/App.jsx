import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import Projects from './components/pages/Projects/Projects'
import Team from './components/pages/Team'
import Settings from './components/pages/Settings'
import Messages from './components/pages/message/Messages'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
