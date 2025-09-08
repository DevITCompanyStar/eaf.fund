import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FundProgrammPage from './pages/FundProgrammPage';
import FundAssistancePage from './pages/FundAssistancePage';
import ReportPage from './pages/ReportPage';
import ContactsPage from './pages/ContactsPage';
import PaymentPage from './pages/PaymentPage';
import PublicOffer from './pages/PublicOffer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import './App.css';

const ScrollToTop = () => {
  const searchParams = useSearchParams();
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, location, searchParams]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/programs" element={<FundProgrammPage />} />
          <Route path="/assistance" element={<FundAssistancePage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/public-offer" element={<PublicOffer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
