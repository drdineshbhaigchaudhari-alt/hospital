import React, { useState } from 'react';
import { Phone, Menu, X, Activity } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Header({ currentPage = 'home', onOpenBookingModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: 'index.html', key: 'home' },
    { label: 'About Us', href: 'about.html', key: 'about' },
    { label: 'Services', href: 'services.html', key: 'services' },
    { label: 'Gallery', href: 'gallery.html', key: 'gallery' },
    { label: 'Contact', href: 'contact.html', key: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        <a href="index.html" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0298b9] to-[#0ea5e9] flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900 tracking-tight block leading-none">
              LifeV<span className="text-[#0298b9]">24</span>Care
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 block mt-0.5">
              HOSPITAL CHANDIGARH
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.key;
            return (
              <a
                key={link.key}
                href={link.href}
                className={isActive ? "text-[#0298b9] font-bold border-b-2 border-[#0298b9] py-1 text-sm" : "text-sm font-semibold text-slate-700 hover:text-[#0298b9] transition-colors py-1"}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${hospitalInfo.phone}`}
            className="flex items-center gap-2 text-slate-800 hover:text-[#0298b9] transition-colors font-bold text-sm"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-[#0298b9]">
              <Phone className="w-4 h-4" />
            </div>
            <span>{hospitalInfo.phone}</span>
          </a>

          <button
            onClick={() => onOpenBookingModal()}
            className="bg-[#0298b9] hover:bg-[#00829f] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
          >
            Book Now
          </button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBookingModal()}
            className="bg-[#0298b9] text-white px-3 py-1.5 rounded-md text-xs font-semibold"
          >
            Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0298b9]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-800 font-semibold py-2 hover:text-[#0298b9] border-b border-slate-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
