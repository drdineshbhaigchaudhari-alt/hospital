import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import { featureVideoData } from '../data/hospitalData';

export default function FeatureVideo({ onOpenVideoModal }) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospital Video Thumbnail with Play Button */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={onOpenVideoModal}>
            <img
              src={featureVideoData.videoThumbnail}
              alt="Hospital Facility Tour"
              className="w-full h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />

            {/* Glowing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#0298b9] text-white flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#0298b9] animate-ping opacity-40 -z-10" />
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white bg-slate-950/60 backdrop-blur-md p-4 rounded-xl text-xs font-medium border border-white/10">
              Watch Virtual Tour: 24x7 OPD & Advanced Surgical Suites
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="space-y-6">
            <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block">
              {featureVideoData.eyebrow}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {featureVideoData.headline}
            </h2>

            {/* Checklist Grid (2 Columns x 3 Items) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-3">
                {featureVideoData.checklistCol1.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {featureVideoData.checklistCol2.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
