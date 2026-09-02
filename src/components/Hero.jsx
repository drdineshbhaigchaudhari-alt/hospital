import React from 'react';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Hero({ onOpenBookingModal }) {
  return (
    <section id="home" className="relative bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">
        <div className="max-w-2xl">
          
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0298b9]/20 border border-[#0298b9]/40 text-cyan-300 font-semibold text-xs sm:text-sm mb-6 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{hospitalInfo.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Multispecialty Care.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              Available Around the Clock.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            LifeV24Care Hospital is dedicated to providing round-the-clock emergency, diagnostic, and specialty medical services in Sector 34, Chandigarh. Immediate care, experienced doctors, and modern equipment — whenever you need us.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-[#0298b9] hover:bg-[#00829f] text-white px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all backdrop-blur-sm"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Quick Highlights */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>24x7 Emergency OPD</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>In-House Lab & ICU</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>Experienced Doctors</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
