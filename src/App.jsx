import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Doctors from './components/Doctors';
import FeatureVideo from './components/FeatureVideo';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleOpenBookingModal = (dept = '') => {
    setSelectedDepartment(dept);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <TopBar />
      <Header onOpenBookingModal={handleOpenBookingModal} />
      <Hero onOpenBookingModal={handleOpenBookingModal} />
      <About onOpenBookingModal={handleOpenBookingModal} />
      <Services onOpenBookingModal={handleOpenBookingModal} />
      <Gallery />
      <Doctors onOpenBookingModal={handleOpenBookingModal} />
      <FeatureVideo onOpenVideoModal={() => setIsVideoModalOpen(true)} />
      <Testimonials />
      <Blog />
      <Footer onOpenBookingModal={handleOpenBookingModal} />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedDepartment={selectedDepartment}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
