import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FundProgrammPage from './pages/FundProgrammPage';
import FundAssistancePage from './pages/FundAssistancePage';
import ReportPage from './pages/ReportPage';
import ContactsPage from './pages/ContactsPage';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/programs" element={<FundProgrammPage />} />
          <Route path="/assistance" element={<FundAssistancePage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
