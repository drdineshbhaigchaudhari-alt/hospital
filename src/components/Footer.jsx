import React, { useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { hospitalInfo, footerData } from '../data/hospitalData';

export default function Footer({ onOpenBookingModal }) {
  const [emailInput, setEmailInput] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim() && agreed) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#061826] text-slate-300 pt-16 pb-8 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          
          <div className="space-y-5">
            <a href="index.html" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#0298b9] text-white flex items-center justify-center font-bold shadow-md">
                <span className="text-xl">✚</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                LifeV<span className="text-[#0298b9]">24</span>Care
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              {footerData.blurb}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg border border-slate-700/80 bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-[#0298b9] hover:border-[#0298b9] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg border border-slate-700/80 bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-[#0298b9] hover:border-[#0298b9] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg border border-slate-700/80 bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-[#0298b9] hover:border-[#0298b9] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg border border-slate-700/80 bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-[#0298b9] hover:border-[#0298b9] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-6">
              Useful Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li><a href="about.html" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="services.html" className="hover:text-cyan-400 transition-colors">Our Services</a></li>
              <li><a href="gallery.html" className="hover:text-cyan-400 transition-colors">Photo Gallery</a></li>
              <li><a href="contact.html" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
              <li><button onClick={() => onOpenBookingModal()} className="hover:text-cyan-400 transition-colors text-left">Book Appointment</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {footerData.departments.map((dept, i) => (
                <li key={i}>
                  <button onClick={() => onOpenBookingModal(dept)} className="hover:text-cyan-400 transition-colors text-left">
                    {dept}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-6">
              Newsletter Signup
            </h4>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex items-center overflow-hidden rounded-lg border border-slate-700/80 bg-[#0d2235]">
                <input
                  type="email"
                  required
                  placeholder="Enter your Email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 py-3 font-bold flex items-center justify-center transition-colors shadow-md flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-[#7c3aed] focus:ring-0"
                />
                <span>I agree to the <a href="#" className="underline text-slate-300 hover:text-cyan-400">Privacy Policy</a>.</span>
              </label>

              {subscribed && (
                <p className="text-xs text-emerald-400 font-semibold pt-1">Thank you for subscribing!</p>
              )}
            </form>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LifeV24Care Hospital All Rights Reserved by site</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300">Term of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
