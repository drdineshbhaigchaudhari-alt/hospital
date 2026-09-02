import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { hospitalInfo, servicesData } from '../data/hospitalData';

export default function BookingModal({ isOpen, onClose, selectedDepartment = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: selectedDepartment || 'General Medicine',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedDepartment) {
      setFormData(prev => ({ ...prev, department: selectedDepartment }));
    }
  }, [selectedDepartment]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Appointment Requested!</h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              Thank you, <span className="font-semibold">{formData.name}</span>. Our emergency desk will call you at <span className="font-semibold">{formData.phone}</span> shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[#0298b9] text-xs font-bold uppercase tracking-wider">Book Consultation</span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                LifeV24Care Appointment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Available 24x7 in Sector 34, Chandigarh. Immediate response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                  >
                    <option value="24x7 Emergency Care">24x7 Emergency Care</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="General & Laparoscopic Surgery">General & Laparoscopic Surgery</option>
                    <option value="Gynaecology & Obstetrics">Gynaecology & Obstetrics</option>
                    <option value="Diagnostic Lab">Diagnostic Lab</option>
                    <option value="Paediatrics">Paediatrics</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                  >
                    <option value="Immediate Emergency">Immediate (24x7 Emergency)</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message / Symptoms (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Describe your health issue..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0298b9]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0298b9] hover:bg-[#00829f] text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md shadow-cyan-500/20"
              >
                Confirm Appointment Request
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
