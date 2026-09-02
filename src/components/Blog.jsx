import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogData } from '../data/hospitalData';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#0298b9] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
            Latest News and Blog
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest Blog Update
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Health tips, medical advice, and patient guides written by our doctors.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0298b9] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-cyan-500" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0298b9] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {post.snippet}
                  </p>
                </div>
              </div>

              {/* Read Article CTA */}
              <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100">
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0298b9] group-hover:text-[#00829f] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
