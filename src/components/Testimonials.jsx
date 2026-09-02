import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/hospitalData';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonialsData[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-slate-50/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
          Comments
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-10">
          What Our Patients Say
        </h2>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 relative">
          
          <Quote className="w-12 h-12 text-cyan-100 mx-auto mb-6" />

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-6 text-amber-400">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-slate-700 text-base sm:text-xl italic leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            "{current.quote}"
          </p>

          {/* Patient Details */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-14 h-14 rounded-full object-cover ring-4 ring-cyan-50 shadow-md"
            />
            <h4 className="text-slate-900 font-bold text-base mt-1">{current.name}</h4>
            <span className="text-xs text-[#0298b9] font-semibold">{current.role}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-cyan-50 hover:text-[#0298b9] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-slate-400">
              {activeIdx + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-cyan-50 hover:text-[#0298b9] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
