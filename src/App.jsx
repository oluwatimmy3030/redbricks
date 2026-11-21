import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SellProperty from './pages/SellProperty';
import BuyProperty from './pages/BuyProperty';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import InvestmentOpportunities from './pages/InvestmentOpportunities';
import Investors from './pages/Investors';
import Landlords from './pages/Landlords';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sell-property" element={<SellProperty />} />
            <Route path="/buy-property" element={<BuyProperty />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:slug" element={<PropertyDetails />} />
            <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/landlords" element={<Landlords />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;

