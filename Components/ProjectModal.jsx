import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Youtube, Calendar, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, onClose }) {
  // Remove the useEffect that hides body scroll
  
  if (!project) return null;

  const layoutStyle = project.layoutStyle || 'default';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111318] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10 bg-[#1E2228] hover:bg-[#2A3038]"
        >
          <X className="w-6 h-6 text-[#E2E2E6]" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E2E2E6] mb-4">
              {project.title}
            </h2>
            <p className="text-[#C4C6D0] text-lg leading-relaxed">
              {project.overview ? project.overview : project.description}
            </p>

            {/* Project Meta Info */}
            {(project.duration || project.teamSize) && (
              <div className="flex flex-wrap gap-4 mt-6">
                {project.duration && (
                  <div className="flex items-center gap-2 text-[#C4C6D0] text-sm">
                    <Calendar className="w-4 h-4 text-[#A8C7FA]" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2 text-[#C4C6D0] text-sm">
                    <Users className="w-4 h-4 text-[#A8C7FA]" />
                    <span>{project.teamSize}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Main Image Placeholder */}
          {layoutStyle !== 'minimal' && (
            <div className="rounded-3xl mb-8 overflow-hidden aspect-video bg-[#1E2228] border border-[#2A3038]">
              <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
                Project Image
              </div>
            </div>
          )}

          {layoutStyle === 'detailed' ? (
            <>
              {/* Key Features */}
              {project.keyFeatures && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-4">Key Features</h3>
                  <div className="bg-[#1E2228] p-6 rounded-3xl">
                    <ul className="space-y-3">
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-[#C4C6D0] flex leading-relaxed">
                          <span className="text-[#A8C7FA] mr-3 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Video Placeholder */}
              <div className="rounded-3xl mb-8 overflow-hidden aspect-video bg-[#1E2228] border border-[#2A3038]">
                <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
                  Demo Video
                </div>
              </div>

              {/* Technical Details */}
              {project.technicalDetails && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technical Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.technicalDetails.sections.map((section, index) => (
                      <div key={index} className="bg-[#1E2228] p-5 rounded-3xl">
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-2">
                          {section.title}
                        </h4>
                        <p className="text-[#C4C6D0] text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Images Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-3xl overflow-hidden aspect-video bg-[#1E2228] border border-[#2A3038]">
                  <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
                    Image 1
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden aspect-video bg-[#1E2228] border border-[#2A3038]">
                  <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
                    Image 2
                  </div>
                </div>
              </div>

              {/* Results & Technologies */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Results */}
                {project.results && (
                  <div className="bg-[#1E2228] p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-[#E2E2E6] mb-4">Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-[#C4C6D0] text-sm flex leading-relaxed">
                          <span className="text-[#6DD58C] mr-3 flex-shrink-0">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="bg-[#1E2228] p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-[#E2E2E6] mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : layoutStyle === 'compact' ? (
            <>
              {/* Compact Layout - Single column with smaller sections */}
              {project.keyFeatures && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#E2E2E6] mb-3">Key Features</h3>
                  <div className="bg-[#1E2228] p-5 rounded-3xl">
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature, index) => (
                        <li key={index} className="text-[#C4C6D0] text-sm flex leading-relaxed">
                          <span className="text-[#A8C7FA] mr-2 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {project.technologies && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#E2E2E6] mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1E2228] text-[#C4C6D0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : layoutStyle === 'minimal' ? (
            <>
              {/* Minimal Layout - Just description */}
              <div className="mb-6">
                <p className="text-[#C4C6D0] leading-relaxed">
                  {project.extendedDescription || project.description}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Default Layout - 2 column grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Overview Card */}
                <div className="bg-[#1E2228] p-6 rounded-3xl">
                  <h3 className="text-xl font-bold text-[#E2E2E6] mb-4">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-sm">
                    This project focuses on developing innovative solutions using cutting-edge technology 
                    and modern engineering practices. The system integrates advanced algorithms and 
                    real-time processing capabilities to achieve optimal performance.
                  </p>
                </div>

                {/* Key Features Card */}
                <div className="bg-[#1E2228] p-6 rounded-3xl">
                  <h3 className="text-xl font-bold text-[#E2E2E6] mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {[
                      'Advanced algorithmic implementation',
                      'Real-time data processing',
                      'User-friendly interface design',
                      'Scalable architecture',
                      'Comprehensive testing'
                    ].map((item, index) => (
                      <li key={index} className="text-[#C4C6D0] flex text-sm leading-relaxed">
                        <span className="text-[#A8C7FA] mr-3 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] flex items-center"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Repository
            </Button>
            <Button 
              className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6] flex items-center"
            >
              <Youtube className="w-4 h-4 mr-2" />
              Demo Video
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}