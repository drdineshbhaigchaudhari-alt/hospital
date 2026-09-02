import React from 'react';
import { Monitor, Pill, Crosshair, HeartPulse, Microscope, Baby, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/hospitalData';

const iconMap = {
  Monitor: Monitor,
  Pill: Pill,
  Crosshair: Crosshair,
  HeartPulse: HeartPulse,
  Microscope: Microscope,
  Baby: Baby
};

export default function Services({ onOpenBookingModal }) {
  return (
    <section id="services" className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
            Medical Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Care Across Every Department, Any Hour
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From emergency trauma care to routine health checks, our medical departments are fully equipped 24x7.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Monitor;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-cyan-200 transition-all group duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Icon */}
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 text-[#0298b9] flex items-center justify-center mb-6 group-hover:bg-[#0298b9] group-hover:text-white transition-colors duration-300 shadow-inner">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0298b9] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* More Details CTA */}
                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="inline-flex items-center gap-2 text-[#0298b9] font-bold text-sm group-hover:text-[#00829f] transition-colors pt-2 border-t border-slate-100"
                >
                  <span>{service.linkText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
