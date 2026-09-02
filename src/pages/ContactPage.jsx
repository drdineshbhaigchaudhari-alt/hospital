import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import { 
  contactBanner, 
  contactInfoCards, 
  letsConnectData, 
  emergencyBannerData 
} from '../data/contactPageData';
import { Phone, Mail, Clock, MapPin, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';

const iconMap = {
  phone: Phone,
  mail: Mail,
  clock: Clock
};

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <TopBar />
      <Header currentPage="contact" onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* 1. Page Banner */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            {contactBanner.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-cyan-300 font-semibold uppercase tracking-wider">
            <a href="index.html" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-300">Contact</span>
          </div>
        </div>
      </section>

      {/* 2. Info Strip (3 Cards) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {contactInfoCards.map((card) => {
              const IconComp = iconMap[card.iconName] || Phone;
              return (
                <div
                  key={card.id}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0298b9] flex items-center justify-center mb-6 group-hover:bg-[#0298b9] group-hover:text-white transition-colors shadow-inner">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0298b9] transition-colors">
                      {card.title}
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div>
                        <a href={card.ctaHref} className="font-bold text-slate-900 hover:text-[#0298b9] transition-colors block">
                          {card.line1}
                        </a>
                        <span className="text-slate-500 font-medium text-xs">{card.line1Sub}</span>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60">
                        <a href={card.ctaHref} className="font-bold text-slate-900 hover:text-[#0298b9] transition-colors block">
                          {card.line2}
                        </a>
                        <span className="text-slate-500 font-medium text-xs">{card.line2Sub}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60">
                    <a
                      href={card.ctaHref}
                      className="inline-flex items-center gap-2 text-[#0298b9] font-bold text-xs hover:text-[#00829f] transition-colors"
                    >
                      <span>{card.ctaText}</span>
                      <Send className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "Let's Connect" & Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-md">
              <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs block mb-2">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                {letsConnectData.heading}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                {letsConnectData.subheading}
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our desk has received your message regarding <span className="font-semibold">{formData.subject}</span> and will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Select Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                      >
                        {letsConnectData.subjectOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0298b9] hover:bg-[#00829f] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-cyan-500/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Google Maps */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md">
                <iframe
                  title="LifeV24Care Hospital Location Map"
                  src={letsConnectData.mapEmbedUrl}
                  className="w-full h-[380px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="p-5 bg-slate-900 text-white flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {letsConnectData.directionsNote}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Emergency Reminder Banner */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 animate-pulse">
              <AlertTriangle className="w-6 h-6 text-yellow-300" />
            </div>
            <p className="text-xs sm:text-sm font-semibold">
              {emergencyBannerData.text} <span className="font-extrabold text-white text-base block sm:inline ml-1">{emergencyBannerData.phone}</span>
            </p>
          </div>

          <a
            href={`tel:${emergencyBannerData.phone}`}
            className="bg-white text-red-700 hover:bg-red-50 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-colors flex-shrink-0"
          >
            Call Emergency Desk Now
          </a>
        </div>
      </section>

      <Footer onOpenBookingModal={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedDepartment={selectedDept}
      />
    </div>
  );
}
