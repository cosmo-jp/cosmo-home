import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './pages/common/Footer'
import Header from './pages/common/Header'
import LocationPage from './pages/company/LocationPage'
import MessagePage from './pages/company/MessagePage'
import OverviewPage from './pages/company/OverviewPage'
import ContactPage from './pages/contact/ContactPage'
import MainPage from './pages/index/MainPage'
import PrivacyPage from './pages/privacy/PrivacyPage'
import ServicePage from './pages/service/ServicePage'
import EerpPage from './pages/solution/EerpPage'
import EmarketplacePage from './pages/solution/EmarketplacePage'
import EprocurementPage from './pages/solution/EprocurementPage'
import EscmPage from './pages/solution/EscmPage'
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
          <Route path="/solution/e-erp" element={<EerpPage />} />
          <Route path="/solution/e-scm" element={<EscmPage />} />
          <Route path="/solution/e-procurement" element={<EprocurementPage />} />
          <Route path="/solution/e-marketplace" element={<EmarketplacePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
