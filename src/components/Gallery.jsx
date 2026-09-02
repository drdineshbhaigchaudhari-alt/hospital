import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryData } from '../data/hospitalData';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
              Latest Projects
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Inside LifeV24Care Hospital
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-cyan-50 hover:text-[#0298b9] hover:border-cyan-300 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#0298b9] text-white flex items-center justify-center hover:bg-[#00829f] transition-colors shadow-md shadow-cyan-500/20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryData.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-75"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* View Icon Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
