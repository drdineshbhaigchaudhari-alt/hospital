import React from 'react';
import { Home, ThumbsUp, ArrowRight } from 'lucide-react';
import { aboutData } from '../data/hospitalData';

export default function About({ onOpenBookingModal }) {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Staggered Dual Image Showcase */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Primary Image */}
              <div className="col-span-7 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80"
                  alt="Doctor with Stethoscope"
                  className="rounded-2xl shadow-xl w-full h-[360px] object-cover border-4 border-white"
                />
              </div>
              {/* Secondary Staggered Image */}
              <div className="col-span-5 pt-10">
                <img
                  src="https://images.unsplash.com/photo-1594824813566-7885a3964f79?auto=format&fit=crop&w=600&q=80"
                  alt="Doctor consulting patient"
                  className="rounded-2xl shadow-lg w-full h-[300px] object-cover border-4 border-white"
                />
              </div>
            </div>

            {/* Decorative Background Accent */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cyan-100/60 rounded-3xl -z-10" />
          </div>

          {/* Right Column: Copy & Badges */}
          <div className="space-y-6">
            
            {/* Eyebrow */}
            <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block">
              {aboutData.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {aboutData.headline}
            </h2>

            {/* Feature Badges Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0298b9] flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{aboutData.badge1.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{aboutData.badge1.desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 text-[#0298b9] flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{aboutData.badge2.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{aboutData.badge2.desc}</p>
                </div>
              </div>
            </div>

            {/* Paragraph Body */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutData.body}
            </p>

            {/* Button + Signature Block Footer */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#0298b9] hover:bg-[#00829f] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 border-l-2 border-cyan-200 pl-4 py-1">
                <img
                  src={aboutData.doctorSignature.image}
                  alt={aboutData.doctorSignature.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-500/30"
                />
                <div>
                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    {aboutData.doctorSignature.name}
                  </h5>
                  <span className="text-xs text-slate-500 font-medium">
                    {aboutData.doctorSignature.qualification}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
