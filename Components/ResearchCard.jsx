import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { createPageUrl } from '@/utils';

export default function ResearchCard({ title, description, pageName, emoji = '🔬', pdfLink, videoLink, codeLink, imageSrc }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(createPageUrl(pageName));
  };

  const handleLinkClick = (e, link) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };
  const imageContent = (
    <div className="rounded-3xl overflow-hidden aspect-video flex-shrink-0 bg-[#1E2228] border border-[#2A3038]">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
          Photo
        </div>
      )}
    </div>
  );

  const textContent = (
    <div className="flex flex-col justify-center">
      <h3 className="text-xl md:text-2xl font-bold text-[#E2E2E6] mb-3 group-hover:text-[#A8C7FA] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-[#C4C6D0] text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap items-center gap-2">
          {pdfLink && (
            <Button 
              onClick={(e) => handleLinkClick(e, pdfLink)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F]"
            >
              PDF
            </Button>
          )}

          {videoLink && (
            <Button 
              onClick={(e) => handleLinkClick(e, videoLink)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6]"
            >
              Video
            </Button>
          )}

          {codeLink && (
            <Button 
              onClick={(e) => handleLinkClick(e, codeLink)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6]"
            >
              Code
            </Button>
          )}
        </div>
    </div>
  );

  return (
    <div 
      onClick={handleCardClick}
      className="p-4 md:p-6 rounded-3xl transition-all duration-300 hover:bg-[#242933] hover:-translate-y-1 cursor-pointer bg-[#1E2228] group"
    >
      <div className="grid md:grid-cols-5 gap-4 md:gap-6 items-center">
        <div className="md:col-span-2">
          {imageContent}
        </div>
        <div className="md:col-span-3">
          {textContent}
        </div>
      </div>
    </div>
  );
}