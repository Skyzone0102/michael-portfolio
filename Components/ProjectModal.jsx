import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Youtube, Calendar, Users, FileText } from 'lucide-react';
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
            {layoutStyle !== 'aero-rider-custom' && layoutStyle !== 'ascend-custom' && layoutStyle !== 'backflip-cat-custom' && layoutStyle !== 'locus-custom' && layoutStyle !== 'turf-ai-custom' && (
              <p className="text-[#C4C6D0] text-lg leading-relaxed">
                {project.overview ? project.overview : project.description}
              </p>
            )}

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
          {layoutStyle !== 'minimal' && layoutStyle !== 'custom-two-part' && layoutStyle !== 'aero-rider-custom' && layoutStyle !== 'ascend-custom' && layoutStyle !== 'backflip-cat-custom' && layoutStyle !== 'locus-custom' && layoutStyle !== 'turf-ai-custom' && (
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
          ) : layoutStyle === 'custom-two-part' ? (
            <>
              {/* Custom Two-Part Layout */}
              {/* Overview Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base">
                    {project.technicalDetails?.sections?.find(s => s.title === 'Overview')?.content || project.overview}
                  </p>
                </div>
              </div>

              {/* Part 1 Section */}
              {project.technicalDetails?.sections?.find(s => s.title.includes('Module 1')) && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    {/* Part 1 Title */}
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">
                      {project.technicalDetails.sections.find(s => s.title.includes('Module 1')).title}
                    </h3>
                    
                    {/* Part 1 Image */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] mb-6 p-4 min-h-[300px]">
                      {project.part1Image ? (
                        <img 
                          src={project.part1Image} 
                          alt="Part 1 - SLAM & Localization" 
                          className="w-full h-full object-contain"
                          onError={(e) => console.error('Image load error:', e)}
                        />
                      ) : (
                        <div className="w-full h-full min-h-[300px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Part 1 Image
                        </div>
                      )}
                    </div>
                    
                    {/* Part 1 Details */}
                    <div className="prose prose-invert max-w-none">
                      {project.technicalDetails.sections.find(s => s.title.includes('Module 1')).content.split('\n\n').map((paragraph, idx) => (
                        <div key={idx} className="mb-4 last:mb-0">
                          {paragraph.split('\n').map((line, lineIdx) => {
                            if (line.startsWith('•')) {
                              return (
                                <div key={lineIdx} className="flex items-start mt-3">
                                  <span className="text-[#C4C6D0] mr-3 mt-1 flex-shrink-0">•</span>
                                  <span className="text-[#C4C6D0] text-sm leading-relaxed">{line.substring(1).trim()}</span>
                                </div>
                              );
                            }
                            return <p key={lineIdx} className="text-[#E2E2E6] font-medium text-base mb-2">{line}</p>;
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Part 2 Section */}
              {project.technicalDetails?.sections?.find(s => s.title.includes('Module 2')) && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    {/* Part 2 Title */}
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">
                      {project.technicalDetails.sections.find(s => s.title.includes('Module 2')).title}
                    </h3>
                    
                    {/* Part 2 Image */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] mb-6 p-4 min-h-[300px]">
                      {project.part2Image ? (
                        <img 
                          src={project.part2Image} 
                          alt="Part 2 - Semantic Scene Understanding" 
                          className="w-full h-full object-contain"
                          onError={(e) => console.error('Image load error:', e)}
                        />
                      ) : (
                        <div className="w-full h-full min-h-[300px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Part 2 Image
                        </div>
                      )}
                    </div>
                    
                    {/* Part 2 Details */}
                    <div className="prose prose-invert max-w-none">
                      {project.technicalDetails.sections.find(s => s.title.includes('Module 2')).content.split('\n\n').map((paragraph, idx) => (
                        <div key={idx} className="mb-4 last:mb-0">
                          {paragraph.split('\n').map((line, lineIdx) => {
                            if (line.startsWith('•')) {
                              return (
                                <div key={lineIdx} className="flex items-start mt-3">
                                  <span className="text-[#C4C6D0] mr-3 mt-1 flex-shrink-0">•</span>
                                  <span className="text-[#C4C6D0] text-sm leading-relaxed">{line.substring(1).trim()}</span>
                                </div>
                              );
                            }
                            return <p key={lineIdx} className="text-[#E2E2E6] font-medium text-base mb-2">{line}</p>;
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Results & Technologies */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Results */}
                {project.results && (
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Results</h3>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="text-[#6DD58C] mr-3 mt-1 flex-shrink-0 text-lg group-hover:scale-125 transition-transform">✓</span>
                          <span className="text-[#C4C6D0] text-sm leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : layoutStyle === 'aero-rider-custom' ? (
            <>
              {/* Aero Rider Custom Layout */}
              {/* Overview Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Rules and Rule Photo - Double Column */}
              {project.competitionRules && (
                <div className="mb-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Rules Text */}
                    <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                      <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Competition Rules & Constraints</h3>
                      <p className="text-[#C4C6D0] leading-relaxed text-sm mb-4">
                        {project.competitionRules.description}
                      </p>
                      <ul className="space-y-3">
                        {project.competitionRules.constraints.map((constraint, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="text-[#C4C6D0] text-sm leading-relaxed">{constraint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Track Photo */}
                    <div className="rounded-3xl overflow-hidden bg-white border border-[#2A3038] p-4">
                      {project.competitionRules.trackImage ? (
                        <img 
                          src={project.competitionRules.trackImage} 
                          alt="Track Layout" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[300px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Track Layout Image
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Mechanical Design Photo - Full Width */}
              {project.mechanicalDesign && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Mechanical Design</h3>
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.mechanicalDesign.description}
                    </p>

                    {/* Full Width Image */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] mb-6 p-4">
                      {project.mechanicalDesign.image ? (
                        <img 
                          src={project.mechanicalDesign.image} 
                          alt="Mechanical Design" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Mechanical Design Image
                        </div>
                      )}
                    </div>

                    {/* Design Details */}
                    <ul className="space-y-3">
                      {project.mechanicalDesign.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                          <span className="text-[#C4C6D0] text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Control System (2/3) and Video (1/3) */}
              {project.controlSystem && (
                <div className="mb-10">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Control System - 2/3 width */}
                    <div className="md:col-span-2 bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                      <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Control System</h3>
                      <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                        {project.controlSystem.description}
                      </p>

                      {/* Sensors */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-3">Sensors:</h4>
                        <ul className="space-y-2">
                          {project.controlSystem.sensors.map((sensor, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                              <span className="text-[#C4C6D0] text-sm leading-relaxed">{sensor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Logic */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-3">Logic:</h4>
                        <p className="text-[#C4C6D0] text-sm leading-relaxed">
                          {project.controlSystem.logic}
                        </p>
                      </div>
                    </div>

                    {/* Video - 1/3 width, vertical format */}
                    <div className="rounded-3xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                      {project.controlSystem.video ? (
                        project.controlSystem.video.includes('youtube.com') || project.controlSystem.video.includes('youtu.be') ? (
                          <iframe
                            src={project.controlSystem.video.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                            className="w-full h-full min-h-[500px]"
                            style={{ aspectRatio: '9/16' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video 
                            src={project.controlSystem.video}
                            controls
                            className="w-full h-full object-cover"
                            style={{ aspectRatio: '9/16' }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        )
                      ) : (
                        <div className="w-full h-full min-h-[500px] flex items-center justify-center text-[#5A5E6B] text-sm">
                          Demo Video
                          <br />
                          (Vertical Format)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : layoutStyle === 'ascend-custom' ? (
            <>
              {/* ASCEND Custom Layout */}
              {/* Overview Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                    {project.overview}
                  </p>
                  
                  {/* Key Features */}
                  {project.keyFeatures && (
                    <div className="mt-6">
                      <ul className="space-y-3">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="text-[#C4C6D0] text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Design Section with Full Width Image */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Design</h3>
                  
                  {/* Full Width Design Image */}
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                    {project.design?.mainImage ? (
                      <img 
                        src={project.design.mainImage} 
                        alt="Design Overview" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                        Design Image
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Human Following Logic - Text Only */}
              {project.design?.humanFollowing && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">
                      {project.design.humanFollowing.title}
                    </h3>
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.design.humanFollowing.description}
                    </p>

                    <ul className="space-y-3">
                      {project.design.humanFollowing.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                          <span className="text-[#C4C6D0] text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Trajectory Planning - Text Left, Image Right */}
              {project.design?.trajectoryPlanning && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">
                      {project.design.trajectoryPlanning.title}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left: Text Content */}
                      <div>
                        <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                          {project.design.trajectoryPlanning.description}
                        </p>

                        <ul className="space-y-3">
                          {project.design.trajectoryPlanning.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                              <span className="text-[#C4C6D0] text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Image */}
                      <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                        {project.design.trajectoryPlanning.image ? (
                          <img 
                            src={project.design.trajectoryPlanning.image} 
                            alt="Trajectory Planning" 
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full min-h-[300px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                            Trajectory Planning Image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Two Column Video Placeholders */}
              {project.design && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Demo Videos</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                    {/* Video 1 */}
                    <div className="rounded-3xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                      {project.design.video1 ? (
                        project.design.video1.includes('youtube.com') || project.design.video1.includes('youtu.be') ? (
                          <iframe
                            src={project.design.video1.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                            className="w-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video 
                            src={project.design.video1}
                            controls
                            className="w-full h-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        )
                      ) : (
                        <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm">
                          Demo Video 1
                        </div>
                      )}
                    </div>

                    {/* Video 2 */}
                    <div className="rounded-3xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                      {project.design.video2 ? (
                        project.design.video2.includes('youtube.com') || project.design.video2.includes('youtu.be') ? (
                          <iframe
                            src={project.design.video2.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                            className="w-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video 
                            src={project.design.video2}
                            controls
                            className="w-full h-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        )
                      ) : (
                        <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm">
                          Demo Video 2
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : layoutStyle === 'backflip-cat-custom' ? (
            <>
              {/* BackFlip Cat Custom Layout */}
              {/* Overview Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Design Section with Image */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Design</h3>
                  
                  {/* Design Image */}
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                    {project.designImage ? (
                      <img 
                        src={project.designImage} 
                        alt="Design Overview" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                        Insert Design Image
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mechanism Section */}
              {project.mechanism && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Mechanism</h3>
                    
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.mechanism.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {project.mechanism.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                          <span className="text-[#C4C6D0] text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Two Column Media Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Photo */}
                      <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                        {project.mechanism.photo ? (
                          <img 
                            src={project.mechanism.photo} 
                            alt="Mechanism Photo" 
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                            Insert Photo
                          </div>
                        )}
                      </div>

                      {/* Demo Video */}
                      <div className="rounded-2xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                        {project.mechanism.video ? (
                          project.mechanism.video.includes('youtube.com') || project.mechanism.video.includes('youtu.be') ? (
                            <iframe
                              src={project.mechanism.video.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                              className="w-full aspect-video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <video 
                              src={project.mechanism.video}
                              controls
                              className="w-full h-full object-cover"
                            >
                              Your browser does not support the video tag.
                            </video>
                          )
                        ) : (
                          <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm">
                            Insert Demo Video
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Results Section - Two Column Layout */}
              {project.results && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Results</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column: Demo Video */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-4">Successful Backflip Demonstration</h4>
                        <div className="rounded-3xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                          {project.results.demoVideo ? (
                            project.results.demoVideo.includes('youtube.com') || project.results.demoVideo.includes('youtu.be') ? (
                              <iframe
                                src={project.results.demoVideo.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                className="w-full aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <video 
                                src={project.results.demoVideo}
                                controls
                                className="w-full h-full object-cover"
                              >
                                Your browser does not support the video tag.
                              </video>
                            )
                          ) : (
                            <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm">
                              Insert Demo Video
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Award Photo */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-4">MakeNTU 2023 Best Popularity Award</h4>
                        <div className="rounded-3xl overflow-hidden border border-[#2A3038]">
                          {project.results.awardPhoto ? (
                            <img 
                              src={project.results.awardPhoto} 
                              alt="Award Winning Photo" 
                              className="w-full aspect-video object-cover object-center"
                            />
                          ) : (
                            <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                              Insert Award Winning Photo
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : layoutStyle === 'locus-custom' ? (
            <>
              {/* LOCUS Custom Layout */}
              {/* Overview Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Design Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Design</h3>
                  
                  {/* Design Image */}
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                    {project.designImage ? (
                      <img 
                        src={project.designImage} 
                        alt="Design Overview" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                        Insert Design Image
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Process Flowchart Section */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Process Flowchart</h3>
                  
                  {/* Flowchart Image */}
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                    {project.flowchartImage ? (
                      <img 
                        src={project.flowchartImage} 
                        alt="Process Flowchart" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                        Insert Process Flowchart Image
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Section - Two Column Layout */}
              {project.results && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Results</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Column: Product Demo Video */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-4">Product Demo Video</h4>
                        <div className="rounded-3xl overflow-hidden bg-[#1E2228] border border-[#2A3038]">
                          {project.results.demoVideo ? (
                            project.results.demoVideo.includes('youtube.com') || project.results.demoVideo.includes('youtu.be') ? (
                              <iframe
                                src={project.results.demoVideo.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                className="w-full aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <video 
                                src={project.results.demoVideo}
                                controls
                                className="w-full h-full object-cover"
                              >
                                Your browser does not support the video tag.
                              </video>
                            )
                          ) : (
                            <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm">
                              Insert Demo Video
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Team Members Photo */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#E2E2E6] mb-4">Team Members</h4>
                        <div className="rounded-3xl overflow-hidden border border-[#2A3038]">
                          {project.results.teamPhoto ? (
                            <img 
                              src={project.results.teamPhoto} 
                              alt="Team Members Photo" 
                              className="w-full aspect-video object-cover object-center"
                            />
                          ) : (
                            <div className="w-full aspect-video flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                              Insert Team Members Photo
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : layoutStyle === 'turf-ai-custom' ? (
            <>
              {/* Turf AI Custom Layout */}
              {/* Overview Section with Image */}
              <div className="mb-10">
                <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Overview</h3>
                  <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                    {project.overview}
                  </p>
                  
                  {/* System Overview Image */}
                  <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                    {project.systemOverviewImage ? (
                      <img 
                        src={project.systemOverviewImage} 
                        alt="System Overview" 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                        Insert System Overview Image
                        <br />
                        (Robotic Mower, Sensors, & Heatmap Output)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* System Pipeline Section */}
              {project.systemPipeline && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">{project.systemPipeline.title}</h3>
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.systemPipeline.description}
                    </p>

                    {/* Operational Workflow Diagram */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                      {project.systemPipeline.image ? (
                        <img 
                          src={project.systemPipeline.image} 
                          alt="Operational Workflow Diagram" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Insert Operational Workflow Diagram
                          <br />
                          (Start Mowing to Report)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Data Challenge Section */}
              {project.dataChallenge && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">{project.dataChallenge.title}</h3>
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.dataChallenge.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#E2E2E6] mb-3">Method:</h4>
                      <p className="text-[#C4C6D0] text-sm leading-relaxed">
                        {project.dataChallenge.method}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#E2E2E6] mb-3">Result:</h4>
                      <p className="text-[#C4C6D0] text-sm leading-relaxed">
                        {project.dataChallenge.result}
                      </p>
                    </div>

                    {/* Auto-Labeling Process Diagram */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                      {project.dataChallenge.image ? (
                        <img 
                          src={project.dataChallenge.image} 
                          alt="Auto-Labeling Process Diagram" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Insert Auto-Labeling Process Diagram
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Deep Learning Segmentation Section */}
              {project.deepLearning && (
                <div className="mb-10">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">{project.deepLearning.title}</h3>
                    <p className="text-[#C4C6D0] leading-relaxed text-base mb-6">
                      {project.deepLearning.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {project.deepLearning.models.map((model, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#A8C7FA] mr-3 mt-1 flex-shrink-0">•</span>
                          <span className="text-[#C4C6D0] text-sm leading-relaxed">{model}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#E2E2E6] mb-3">Output:</h4>
                      <p className="text-[#C4C6D0] text-sm leading-relaxed">
                        {project.deepLearning.output}
                      </p>
                    </div>

                    {/* Dual U-Net Architecture Flowchart */}
                    <div className="rounded-2xl overflow-hidden bg-white border border-[#2A3038] p-4">
                      {project.deepLearning.image ? (
                        <img 
                          src={project.deepLearning.image} 
                          alt="Dual U-Net Model Architecture" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full min-h-[400px] flex items-center justify-center text-[#5A5E6B] text-sm bg-[#1E2228]">
                          Insert Dual U-Net Model Architecture Flowchart
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-[#1E2228] to-[#1A1D24] p-8 rounded-3xl border border-[#2A3038] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#E2E2E6] mb-6">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-xs font-medium bg-[#2A3038] text-[#C4C6D0] hover:bg-[#363C48] hover:text-[#E2E2E6] transition-all hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
            {project.reportPdf ? (
              <Button 
                className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] flex items-center"
                onClick={() => window.open(project.reportPdf, '_blank')}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Report
              </Button>
            ) : (
              <Button 
                className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Repository
              </Button>
            )}
            {project.demoVideo && (
              <Button 
                className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6] flex items-center"
                onClick={() => window.open(project.demoVideo, '_blank')}
              >
                <Youtube className="w-4 h-4 mr-2" />
                Demo Video
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}