import { createContext, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { FloatingActions, ScrollToTop } from './components/ui';

import Home from './pages/Home';
import About from './pages/About';
import Specialities from './pages/Specialities';
import SpecialityDetail from './pages/SpecialityDetail';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import Facilities from './pages/Facilities';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

import api from './lib/api';
import { useApi } from './lib/hooks';

const SiteContext = createContext({ data: null, loading: true, error: null });
export const useSite = () => useContext(SiteContext);

export default function App() {
  const { data, loading, error } = useApi(() => api.bootstrap(), []);
  const specialities = data?.specialities ?? [];

  return (
    <SiteContext.Provider value={{ data, loading, error }}>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header specialities={specialities} />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialities/:slug" element={<SpecialityDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<DoctorDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/health-packages" element={<Packages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer specialities={specialities} />
      <FloatingActions />
    </SiteContext.Provider>
  );
}
