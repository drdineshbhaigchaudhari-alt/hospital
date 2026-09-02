import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import { 
  aboutBanner, 
  aboutIntro, 
  missionValues, 
  whyChooseUsData, 
  statsCounterData, 
  leadershipData, 
  closingCtaData 
} from '../data/aboutPageData';
import { 
  Clock, 
  Handshake, 
  Heart, 
  MapPin, 
  Home, 
  ThumbsUp, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Award,
  ShieldCheck
} from 'lucide-react';

const iconMap = {
  clock: Clock,
  handshake: Handshake,
  heart: Heart,
  'map-pin': MapPin
};

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState('');

  const openBooking = (dept = '') => {
    setSelectedDept(dept);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <TopBar />
      <Header onOpenBookingModal={openBooking} />

      {/* 1. Page Banner / Breadcrumb Header */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            {aboutBanner.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-cyan-300 font-semibold uppercase tracking-wider">
            <a href="index.html" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-300">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section — "Find Out About Us" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Dual Staggered Images */}
            <div className="relative">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 relative z-10">
                  <img
                    src={aboutIntro.images.main}
                    alt="LifeV24Care Doctor"
                    className="rounded-2xl shadow-xl w-full h-[360px] object-cover border-4 border-white"
                  />
                </div>
                <div className="col-span-5 pt-10">
                  <img
                    src={aboutIntro.images.secondary}
                    alt="Medical Consultation"
                    className="rounded-2xl shadow-lg w-full h-[300px] object-cover border-4 border-white"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-100/60 rounded-3xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block">
                {aboutIntro.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {aboutIntro.headline}
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {aboutIntro.bodyParagraph1}
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {aboutIntro.bodyParagraph2}
              </p>

              {/* Badges */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0298b9] flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{aboutIntro.badge1.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{aboutIntro.badge1.desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0298b9] flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{aboutIntro.badge2.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{aboutIntro.badge2.desc}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="index.html#services"
                  className="inline-flex items-center gap-2 bg-[#0298b9] hover:bg-[#00829f] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md shadow-cyan-500/20"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Mission & Values Section */}
      <section className="py-20 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
              {missionValues.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {missionValues.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionValues.items.map((item) => {
              const IconComp = iconMap[item.iconName] || Clock;
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#0298b9] flex items-center justify-center mb-5 group-hover:bg-[#0298b9] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0298b9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block">
                {whyChooseUsData.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {whyChooseUsData.headline}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="space-y-3">
                  {whyChooseUsData.checklistCol1.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {whyChooseUsData.checklistCol2.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openBooking()}
                  className="bg-[#0298b9] hover:bg-[#00829f] text-white px-7 py-3 rounded-lg font-bold text-sm transition-all shadow-md shadow-cyan-500/20"
                >
                  Book an Appointment
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src={whyChooseUsData.image}
                alt="Why Choose LifeV24Care"
                className="w-full h-[380px] lg:h-[420px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Stats / Counter Section */}
      <section className="py-14 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsCounterData.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership / Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
              {leadershipData.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {leadershipData.headline}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
            <img
              src={leadershipData.image}
              alt={leadershipData.name}
              className="w-36 h-36 rounded-2xl object-cover ring-4 ring-cyan-500/20 shadow-md flex-shrink-0"
            />
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-slate-900">{leadershipData.name}</h3>
              <p className="text-xs font-semibold text-[#0298b9] uppercase tracking-wider">
                {leadershipData.qualification}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                "{leadershipData.bio}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#0298b9] to-[#0ea5e9] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {closingCtaData.heading}
          </h2>
          <p className="text-cyan-50 text-sm sm:text-lg">
            {closingCtaData.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openBooking()}
              className="bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-black/10"
            >
              Book Appointment
            </button>
            <a
              href={`tel:${closingCtaData.phone}`}
              className="inline-flex items-center gap-2 bg-slate-900/30 hover:bg-slate-900/50 text-white border border-white/30 px-7 py-3.5 rounded-lg font-bold text-sm transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Call: {closingCtaData.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer onOpenBookingModal={openBooking} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedDepartment={selectedDept}
      />
    </div>
  );
}
