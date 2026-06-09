import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Footer from './pages/common/Footer'
import Header from './pages/common/Header'
import LocationPage from './pages/company/LocationPage'
import MessagePage from './pages/company/MessagePage'
import OverviewPage from './pages/company/OverviewPage'
import ContactPage from './pages/contact/ContactPage'
import MainPage from './pages/index/MainPage'
import PrivacyPage from './pages/privacy/PrivacyPage'
import RecruitPage from './pages/recruit/RecruitPage'
import SolutionPage from './pages/solution/SolutionPage'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/company/message" element={<MessagePage />} />
          <Route path="/company/overview" element={<OverviewPage />} />
          <Route path="/company/location" element={<LocationPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/solution/e-erp" element={<SolutionPage />} />
          <Route path="/solution/e-scm" element={<SolutionPage />} />
          <Route path="/solution/e-procurement" element={<SolutionPage />} />
          <Route path="/solution/e-marketplace" element={<SolutionPage />} />
          <Route path="/solution/e-shoppingmall-wizard" element={<SolutionPage />} />
          <Route path="/solution/e-homepage-wizard" element={<SolutionPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
