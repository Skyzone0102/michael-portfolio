import React from 'react';

export default function ProjectCard({ title, description, emoji = '🚀', tags = [], onClick, selectedTag, imageSrc }) {
  return (
    <div 
      onClick={onClick}
      className="p-6 rounded-3xl transition-all duration-300 hover:bg-[#242933] hover:-translate-y-1 cursor-pointer group h-full flex flex-col bg-[#1E2228]"
    >
      {/* Project Image/Placeholder */}
      <div className="rounded-3xl mb-4 overflow-hidden transition-all duration-300 aspect-[16/9] bg-[#16191F] border border-[#2A3038]">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[#5A5E6B] text-sm">Photo</div>
          </div>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-semibold text-[#E2E2E6] mb-2 group-hover:text-[#A8C7FA] transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-[#C4C6D0] text-sm leading-relaxed line-clamp-3 flex-grow mb-3">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => {
            const tagThemes = {
              'Robotics': { primary: '#6DD58C', onPrimary: '#0A3818' },
              'AI': { primary: '#D0BCFF', onPrimary: '#381E72' },
              'Hardware': { primary: '#FFB784', onPrimary: '#4F2500' },
              'Autonomous': { primary: '#4FD8EB', onPrimary: '#00363D' },
              'Mechatronics': { primary: '#DCC48C', onPrimary: '#3E2E04' }
            };
            const theme = tagThemes[tag] || { primary: '#A8C7FA', onPrimary: '#062E6F' };
            return (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: theme.primary, color: theme.onPrimary }}
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}