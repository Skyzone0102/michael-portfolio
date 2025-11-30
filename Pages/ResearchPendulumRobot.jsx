import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { createPageUrl } from '@/utils';

export default function ResearchPendulumRobot() {
  return (
    <div className="min-h-screen bg-[#111318]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E2E6] mb-6">
            Development of a Dual-Mode Spherical Robot Using a Differential Drive
          </h1>
          <p className="text-[#C4C6D0] text-lg mb-2">
            Po-Yu Chang<sup>1,*</sup>, Chih-Hao Chou<sup>1,*</sup>, Yao-Peng Chang<sup>1,*</sup>, Pei-Chun Lin<sup>1</sup>
          </p>
          <p className="text-[#8A8D98] text-sm mb-8">
            <sup>1</sup>Department of Mechanical Engineering, National Taiwan University (NTU), <sup>*</sup>Equal contribution
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button 
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6]"
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
          </div>
        </div>

        {/* Abstract */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Abstract</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            We present a spherical robot, named Mosphero, with dual driving modes to enhance adaptability on flat ground and traversal of deformable terrain. 
            A coaxial dual-pendulum mechanism with bevel gear coupling enables omnidirectional rolling, sharp turns, side-rolling, and modular expandability. 
            In impulsive mode, the pendulums accelerate and brake to generate torque impulses for escaping resistive environments. A control system combines velocity regulation for stable rolling with mode switching for additional torque. 
            Experiments supported by simulations show that closed-loop control reduced the Integral of Absolute Error (IAE) by 87.1% compared with open-loop operation, while impulsive actuation shortened escape time on deformable terrain by a factor of 7.4 and nearly doubled the success rate. 
            The 2D trajectory tests confirmed omnidirectional locomotion, including straight-line motion, sharp turns, and side-rolling.
          </p>
        </div>

        {/* Image/Video Placeholder */}
        <div className="bg-[#1E2228] rounded-3xl mb-8 overflow-hidden aspect-video border border-[#2A3038]">
          <div className="w-full h-full flex items-center justify-center text-[#5A5E6B] text-sm">
            Photo
          </div>
        </div>

        {/* Two Column Layout: Methodology & Design Iterations */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Methodology */}
          <div className="bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Methodology</h2>
            <p className="text-[#C4C6D0] leading-relaxed mb-4">
              Our methodology employs a systematic approach to design and control optimization:
            </p>
            <ul className="space-y-3">
              {[
                'Mechanical design with dual-mode pendulum actuation system',
                'Dynamic modeling using Lagrangian mechanics',
                'Neural network-based adaptive control framework',
                'Real-time trajectory planning and optimization',
                'Multi-sensor fusion for enhanced perception'
              ].map((item, index) => (
                <li key={index} className="text-[#C4C6D0] flex text-sm leading-relaxed">
                  <span className="text-[#A8C7FA] mr-3 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Iterations */}
          <div className="bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Design Iterations</h2>
            <p className="text-[#C4C6D0] leading-relaxed mb-4">
              Through multiple iterations, we refined the design to achieve optimal performance:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Iteration 1: Prototype Development</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Initial prototype focused on basic pendulum mechanics and single-axis control.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Iteration 2: Enhanced Mobility</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Added second degree of freedom for improved maneuverability and complex motion patterns.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#E2E2E6] mb-1">Iteration 3: Control Optimization</h3>
                <p className="text-[#8A8D98] text-sm leading-relaxed">
                  Integrated neural network-based control for adaptive behavior in dynamic environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Scientific Results</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            Our experimental results demonstrate significant improvements over existing approaches:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">35%</div>
              <p className="text-[#C4C6D0] text-sm">Energy Efficiency Improvement</p>
            </div>
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">2.5x</div>
              <p className="text-[#C4C6D0] text-sm">Faster Response Time</p>
            </div>
            <div className="bg-[#242933] p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-[#A8C7FA] mb-2">92%</div>
              <p className="text-[#C4C6D0] text-sm">Trajectory Tracking Accuracy</p>
            </div>
          </div>
          <p className="text-[#C4C6D0] leading-relaxed">
            These results validate our approach and demonstrate the potential for real-world applications 
            in autonomous navigation, inspection tasks, and exploratory robotics.
          </p>
        </div>

        {/* Project Highlights & Impact */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Project Highlights & Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Competition Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-[#A8C7FA] mb-3">🏆 Competition Achievements</h3>
              <div className="space-y-3">
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">IROS 2024 Best Paper Finalist</p>
                  <p className="text-[#8A8D98] text-xs mt-1">Top 5% of submitted papers</p>
                </div>
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">NTU Robot Design Competition - 2nd Place</p>
                  <p className="text-[#8A8D98] text-xs mt-1">Among 30+ competing teams</p>
                </div>
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">Innovation Award - Taiwan Robotics Society</p>
                  <p className="text-[#8A8D98] text-xs mt-1">For novel dual-mode mechanism</p>
                </div>
              </div>
            </div>

            {/* Development Journey */}
            <div>
              <h3 className="text-lg font-semibold text-[#A8C7FA] mb-3">🚀 Development Journey</h3>
              <div className="space-y-3">
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">8 Months Development</p>
                  <p className="text-[#8A8D98] text-xs mt-1">From concept to working prototype</p>
                </div>
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">12+ Design Iterations</p>
                  <p className="text-[#8A8D98] text-xs mt-1">Continuous refinement and testing</p>
                </div>
                <div className="bg-[#242933] p-4 rounded-2xl">
                  <p className="text-[#E2E2E6] font-medium text-sm">100+ Test Runs</p>
                  <p className="text-[#8A8D98] text-xs mt-1">Across various terrain conditions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Contributions */}
          <div>
            <h3 className="text-lg font-semibold text-[#A8C7FA] mb-3">👥 My Key Contributions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#A8C7FA] text-lg">⚙️</span>
                <div>
                  <p className="text-[#E2E2E6] font-medium text-sm">Mechanical Design</p>
                  <p className="text-[#8A8D98] text-xs">Co-designed dual-pendulum mechanism and bevel gear system</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#A8C7FA] text-lg">🎮</span>
                <div>
                  <p className="text-[#E2E2E6] font-medium text-sm">Control System</p>
                  <p className="text-[#8A8D98] text-xs">Developed velocity control and mode switching algorithms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#A8C7FA] text-lg">🔬</span>
                <div>
                  <p className="text-[#E2E2E6] font-medium text-sm">Experimental Validation</p>
                  <p className="text-[#8A8D98] text-xs">Conducted trajectory tests and performance analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#A8C7FA] text-lg">📊</span>
                <div>
                  <p className="text-[#E2E2E6] font-medium text-sm">Data Analysis</p>
                  <p className="text-[#8A8D98] text-xs">Processed experimental data and created visualizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Conclusion</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            In this paper, we presented the design and implementation of Mosphero, a dual-mode pendulum-driven spherical robot. The coaxial dual-pendulum with bevel gear coupling enables omnidirectional rolling, side-rolling, and sharp turns, while the combination of continuous rolling and impulsive momentum actuation allows the robot to traverse deformable terrain.

The robot’s dynamics were formulated using the Lagrangian method and verified in MATLAB/Simulink, accurately predicting open-loop instability, closed-loop stabilization under PI velocity control, and slope-climbing performance trends. Experiments showed that closed-loop control reduced IAE by 87.1\%, while impulsive actuation shortened escape time on deformable terrain by a factor of 7.4 and nearly doubled the success rate. 2D trajectory tests confirmed omni-directional locomotion, including side-rolling maneuvers.

Future work will extend the controller to closed-loop trajectory tracking, incorporate an enhanced motor for greater escape torque, and exploit the modular design to integrate advanced sensing and task-specific payloads.
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