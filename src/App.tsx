import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100">
      <header className="bg-navy-900 text-ivory-100 p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <div className="text-2xl font-serif text-gold-500">VKM</div>
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gold-500 transition-colors">{t('home')}</Link>
          <Link to="/about" className="hover:text-gold-500 transition-colors">{t('about')}</Link>
          <Link to="/practice-areas" className="hover:text-gold-500 transition-colors">{t('practiceAreas')}</Link>
          <Link to="/contact" className="hover:text-gold-500 transition-colors">{t('contact')}</Link>
          <Link to="/admin" className="hover:text-gold-500 transition-colors">{t('admin')}</Link>
          <button onClick={toggleLanguage} className="ml-4 px-3 py-1 border border-gold-500 rounded text-sm hover:bg-gold-500 hover:text-navy-900 transition-colors">
            {i18n.language === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-navy-900 text-ivory-200 p-8 text-center text-sm border-t border-gold-600/30">
        <p>&copy; {new Date().getFullYear()} Vineet Kumar Misra. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <Link to="/disclaimer" className="hover:text-gold-500 transition-colors">Disclaimer</Link>
          <Link to="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
