import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { doctorsData } from '../data/hospitalData';

export default function Doctors({ onOpenBookingModal }) {
  return (
    <section id="doctors" className="py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
            Team Of Specialists
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Doctors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Experienced medical professionals committed to round-the-clock patient care.
          </p>
        </div>

        {/* 4-Card Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Doctor Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0298b9] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0298b9] mt-0.5">
                    {doc.specialty}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {doc.qualification}
                  </p>
                </div>
              </div>

              {/* Action Contact Strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <a
                  href={`tel:${doc.phone}`}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#0298b9] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0298b9]" />
                  <span>Call</span>
                </a>
                <button
                  onClick={() => onOpenBookingModal(doc.specialty)}
                  className="bg-[#0298b9] hover:bg-[#00829f] text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors"
                >
                  Book Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
