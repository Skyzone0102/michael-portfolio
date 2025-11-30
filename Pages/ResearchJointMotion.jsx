import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { createPageUrl } from '@/utils';

export default function ResearchJointMotion() {
  return (
    <div className="min-h-screen bg-[#111318]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E2E6] mb-6">
            Smart Cadaveric Limb Motion Simulator for PIP Joint Movement
          </h1>
          <p className="text-[#C4C6D0] text-lg mb-4">
            C. Y. Hong, <strong>C. H. Chou</strong>, K. L. Wu, I. Ji. Wang, and D. R. Li
          </p>
          <p className="text-[#8A8D98] text-sm mb-8">
            Smart & Advanced Manufacturing Lab, National Taiwan University
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0"
              >
                <FileText className="w-4 h-4 mr-2" />
                Paper
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6]"
              >
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
            </a>
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Abstract</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            This research presents a smart cadaveric limb motion simulator designed for physiologically relevant 
            in-vitro biomechanical evaluation of small joints. The platform features a 3D-printed motion simulator 
            with integrated force sensors and kinematic tracking for comprehensive joint analysis. A data processing 
            pipeline using PCA and K-means clustering was developed to identify critical tissue regions from motion 
            data. The study found an inverse relationship between global force damping and local strain in response 
            to surgical defects, creating a standardized framework for small joint surgery evaluation and implant benchmarking.
          </p>
        </div>

        {/* Image/Video Placeholder */}
        <div className="bg-[#1E2228] rounded-3xl mb-8 overflow-hidden aspect-video border border-[#2A3038]">
          <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
            Photo
          </div>
        </div>

        {/* Two Column Layout: Methodology & Development Process */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Methodology */}
          <div className="bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Methodology</h2>
            <p className="text-[#C4C6D0] leading-relaxed mb-4">
              Our simulation platform employs a multi-layered architecture:
            </p>
            <ul className="space-y-3">
              {[
                '3D-printed platform with force sensors and kinematic tracking',
                'PCA and K-means clustering for tissue region identification',
                'Analysis of force damping and local strain relationships',
                'Standardized framework for surgery evaluation',
                'Implant benchmarking capabilities'
              ].map((item, index) => (
                <li key={index} className="text-[#C4C6D0] flex text-sm leading-relaxed">
                  <span className="text-[#A8C7FA] mr-3 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Process */}
          <div className="bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Development Process</h2>
            <p className="text-[#C4C6D0] leading-relaxed mb-4">
              The platform development followed an iterative approach:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Phase 1: Platform Engineering</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Engineered motion simulator with 3D-printed platform, force sensors, and kinematic tracking for joint analysis.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Phase 2: Data Pipeline Development</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Developed pipeline using PCA and K-means clustering to identify critical tissue regions from motion data.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Phase 3: Clinical Framework</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Created standardized framework for small joint surgery evaluation, enabling implant benchmarking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Key Results</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            The platform demonstrates exceptional performance across multiple metrics:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">PCA</div>
              <p className="text-[#C4C6D0] text-sm">K-means Clustering Pipeline</p>
            </div>
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">Inverse</div>
              <p className="text-[#C4C6D0] text-sm">Force-Strain Relationship</p>
            </div>
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">Standard</div>
              <p className="text-[#C4C6D0] text-sm">Surgery Evaluation Framework</p>
            </div>
          </div>
          <p className="text-[#C4C6D0] leading-relaxed">
            These results establish our platform as a reliable tool for small joint surgery evaluation, 
            implant benchmarking, and biomechanical assessment in clinical settings.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Conclusion</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            This work provides a comprehensive platform for biomechanical evaluation of small joints, enabling 
            clinicians and researchers to assess artificial implants and surgical procedures with high precision. 
            The standardized framework facilitates comparison between different implant designs and surgical techniques, 
            advancing the field of small joint surgery and rehabilitation.
          </p>
        </div>

        {/* Back Button at Bottom */}
        <div className="flex justify-start">
          <Link to = '/'>
            <Button 
              className="inline-flex items-center px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}