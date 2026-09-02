import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function TopBar() {
  return (
    <div className="bg-[#1b2538] text-gray-300 text-xs py-2 px-4 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
          <a href={`mailto:${hospitalInfo.email}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{hospitalInfo.email}</span>
          </a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{hospitalInfo.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium">Follow Us:</span>
          <div className="flex items-center gap-2 text-slate-300">
            <a href={hospitalInfo.socials.facebook} className="p-1 hover:text-cyan-400 transition-colors" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href={hospitalInfo.socials.twitter} className="p-1 hover:text-cyan-400 transition-colors" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
            <a href={hospitalInfo.socials.linkedin} className="p-1 hover:text-cyan-400 transition-colors" aria-label="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href={hospitalInfo.socials.instagram} className="p-1 hover:text-cyan-400 transition-colors" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
