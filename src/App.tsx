import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './pages/common/Footer'
import Header from './pages/common/Header'
import LocationPage from './pages/company/LocationPage'
import MessagePage from './pages/company/MessagePage'
import OverviewPage from './pages/company/OverviewPage'
import ContactPage from './pages/contact/ContactPage'
import MainPage from './pages/index/MainPage'
import ServicePage from './pages/service/ServicePage'
import SolutionPage from './pages/solution/SolutionPage'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/company/message" element={<MessagePage />} />
          <Route path="/company/overview" element={<OverviewPage />} />
          <Route path="/company/location" element={<LocationPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
