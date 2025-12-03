import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, Award, BookOpen } from 'lucide-react';
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
            <a href="/michael-portfolio/src/assets/2025_RAL_Mosphero.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0"
              >
                <FileText className="w-4 h-4 mr-2" />
                Paper
              </Button>
            </a>
            <a href="https://youtu.be/cFQBmcPqyFs" target="_blank" rel="noopener noreferrer">
              <Button 
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2A3038] hover:bg-[#363C48] text-[#E2E2E6]"
              >
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
            </a>
            <div className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-[#2A3038] text-[#E2E2E6] border border-[#A8C7FA]">
              <Award className="w-4 h-4 mr-2 text-[#A8C7FA]" />
              1st Place, 2024 Mechaheroes Competition
            </div>
            <div className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-[#2A3038] text-[#E2E2E6] border border-[#A8C7FA]">
              <BookOpen className="w-4 h-4 mr-2 text-[#A8C7FA]" />
              Under Review in IEEE RA-L
            </div>
          </div>
        </div>

        {/* Abstract */}
        {/* <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Abstract</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            We present Mosphero, a spherical robot with dual driving modes to enhance adaptability on flat ground and traversal of deformable terrain. 
            A coaxial dual-pendulum mechanism with bevel gear coupling enables omnidirectional rolling, sharp turns, side-rolling, and modular expandability. 
            In impulsive mode, the pendulums accelerate and brake to generate torque impulses for escaping resistive environments. A control system combines velocity regulation for stable rolling with mode switching for additional torque. 
            Experiments supported by simulations show that closed-loop control reduced the Integral of Absolute Error (IAE) by 87.1% compared with open-loop operation, while impulsive actuation shortened escape time on deformable terrain by a factor of 7.4 and nearly doubled the success rate. 
            The 2D trajectory tests confirmed omnidirectional locomotion, including straight-line motion, sharp turns, and side-rolling.
          </p>
        </div> */}

        
        {/* Two-column layout: Robot Image and Project Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Robot Image Block - 1/3 width */}
          <div className="bg-[#1E2228] p-6 rounded-3xl">
            <div className="rounded-2xl overflow-hidden border border-[#2A3038]">
              <img 
                src="/michael-portfolio/src/assets/sphere/1_actual_robot (1).jpg" 
                alt="Mosphero Spherical Robot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Overview Block - 2/3 width */}
          <div className="md:col-span-2 bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Project Overview</h2>
            <div className="space-y-4">
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Novel Mechanism: </span>
                Mosphero employs a differential drive system to enable dual-mode operation, distinguishing it from traditional single-pendulum designs.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Omnidirectional Mobility: </span>
                A coaxial dual-pendulum mechanism enables omnidirectional rolling, sharp turns, and side-rolling maneuvers.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Dual-Mode Actuation: </span>
                The system switches between precise velocity regulation and high-torque impulsive "kicks" to traverse deformable terrain.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Expandable Architecture: </span>
                Standardized shell interfaces support modular sensing and actuation upgrades without structural redesign.
              </p>
            </div>
          </div>
        </div>

        {/* Mechanical Design & Hardware */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Mechanical Design & Hardware</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            Mosphero addresses the limitations of previous spherical robots through a coaxial dual-pendulum system. Two motors are mechanically aligned along the main axis and transmit torque through a bevel gear set. This configuration allows the internal mass to rotate on two axes, enabling the robot to steer and roll sideways—capabilities often lacking in pendulum-driven spheres.
          </p>
          
          <h3 className="text-lg font-semibold text-[#A8C7FA] mb-4">Hardware Specifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Hardware specs stacked vertically */}
            <div className="space-y-4">
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Actuation</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  NEMA 23 stepper motors driven by TMC2160 drivers
                </p>
              </div>
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Computation</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  Arduino Nano for real-time motor control and Raspberry Pi Zero 2W for high-level decision-making
                </p>
              </div>
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Sensing</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  IMU (ICM-20948) with dedicated ESP32 microcontroller for precise attitude estimation
                </p>
              </div>
            </div>
            
            {/* Hardware photo */}
            <div className="rounded-2xl overflow-hidden border border-[#2A3038] flex items-center justify-center bg-white">
              <img 
                src="/michael-portfolio/src/assets/sphere/2_a_cad.png" 
                alt="Hardware Components CAD" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Control Strategy */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Control Strategy</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            To navigate diverse environments, Mosphero employs a hierarchical control architecture with two distinct modes:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Angular Velocity Control */}
            <div className="flex flex-col">
              <div className="border-l-4 border-[#A8C7FA] pl-6 mb-4 flex-grow">
                <h3 className="text-xl font-semibold text-[#E2E2E6] mb-3">1. Angular Velocity Control (Precision)</h3>
                <p className="text-[#C4C6D0] leading-relaxed mb-3">
                  For standard locomotion on flat surfaces, the robot uses a PI controller to regulate the pendulum's tilt angle. By continuously adjusting the internal mass position based on IMU feedback, this mode stabilizes the robot's motion and prevents the "wobble" inherent in open-loop spherical systems. 
                </p>
                <div className="bg-[#242933] p-5 rounded-xl border border-[#A8C7FA]/30">
                  <p className="text-[#E2E2E6] text-base font-medium">
                    This closed-loop approach reduced the Integral of Absolute Error (IAE) by 87.1% compared to open-loop control.
                  </p>
                </div>
              </div>
              
              {/* Video for Angular Velocity Control */}
              <div className="bg-[#242933] rounded-2xl overflow-hidden aspect-video border border-[#363C48]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/y5_ISx8ADog"
                  title="Angular Velocity Control Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Impulsive Momentum Control */}
            <div className="flex flex-col">
              <div className="border-l-4 border-[#A8C7FA] pl-6 mb-4 flex-grow">
                <h3 className="text-xl font-semibold text-[#E2E2E6] mb-3">2. Impulsive Momentum Control (Power)</h3>
                <p className="text-[#C4C6D0] leading-relaxed mb-3">
                  To traverse soft terrain where standard rolling fails, Mosphero activates an impulsive mode. The internal pendulums are "wound up"—accelerated to maximum velocity—and then braked abruptly. This transfers the angular momentum from the pendulum to the shell, generating a powerful transient torque that "kicks" the robot out of resistive spots like sand or foam.
                </p>
                <div className="bg-[#242933] p-5 rounded-xl border border-[#A8C7FA]/30">
                  <p className="text-[#E2E2E6] text-base font-medium">
                    This mode reduced escape time by a factor of 7.4 and nearly doubled the success rate on deformable terrain.
                  </p>
                </div>
              </div>
              
              {/* Video for Impulsive Control */}
              <div className="bg-[#242933] rounded-2xl overflow-hidden aspect-video border border-[#363C48]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1HCj_u-wU6A"
                  title="Impulsive Control Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experimental Results */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Experimental Results</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            We validated Mosphero's performance through extensive testing on deformable foam surfaces and variable-incline slopes.
          </p>
          
          {/* First two results side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Stability - Angular Velocity Control */}
            <div className="bg-[#242933] p-6 rounded-3xl border-l-4 border-[#A8C7FA] flex flex-col">
              <div className="flex items-center gap-3 mb-3 min-h-[48px]">
                <div className="text-3xl font-bold text-[#A8C7FA]">87.1%</div>
                <div className="text-xs text-[#C4C6D0]">Reduction</div>
              </div>
              <h4 className="text-base font-semibold text-[#E2E2E6] mb-4">Stability</h4>
              <p className="text-[#C4C6D0] text-sm leading-relaxed mb-4 flex-grow">
                The closed-loop velocity controller reduced the Integral of Absolute Error (IAE) by 87.1% compared to open-loop control, effectively eliminating unstable oscillations.
              </p>
              <div className="bg-[#1E2228] rounded-xl overflow-hidden aspect-video border border-[#363C48]">
                <img src="/michael-portfolio/src/assets/sphere/exp1.JPG" alt="Stability Analysis Graph" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Terrain Escape Performance - Impulsive Momentum Control */}
            <div className="bg-[#242933] p-6 rounded-3xl border-l-4 border-[#A8C7FA] flex flex-col">
              <div className="flex items-center gap-3 mb-3 min-h-[48px]">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-3xl font-bold text-[#A8C7FA]">2x</div>
                    <div className="text-xs text-[#C4C6D0]">Success Rate</div>
                  </div>
                  <div className="text-[#363C48]">|</div>
                  <div>
                    <div className="text-3xl font-bold text-[#A8C7FA]">7.4x</div>
                    <div className="text-xs text-[#C4C6D0]">Faster</div>
                  </div>
                </div>
              </div>
              <h4 className="text-base font-semibold text-[#E2E2E6] mb-4">Terrain Escape Performance</h4>
              <p className="text-[#C4C6D0] text-sm leading-relaxed mb-4 flex-grow">
                On deformable foam, the impulsive mode proved superior to standard driving, nearly doubling the success rate to 71.4% while reducing escape time by a factor of 7.4 (1.43s vs 10.64s)
              </p>
              <div className="bg-[#1E2228] rounded-xl overflow-hidden aspect-video border border-[#363C48]">
                <img src="/michael-portfolio/src/assets/sphere/exp2.JPG" alt="Terrain Escape Data & Charts" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Agility - Full width */}
          <div className="bg-[#242933] p-6 rounded-3xl border-l-4 border-[#8A8D98]">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-[#A8C7FA]">Omnidirectional</div>
                    <div className="text-[#363C48]">|</div>
                    <div className="text-2xl font-bold text-[#A8C7FA]">Sharp Turn</div>
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-4">Agility</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  2D trajectory tests confirmed the robot's omnidirectional locomotion capability, including sharp turns, straight-line motion in any direction, and side-rolling maneuvers.
                </p>
              </div>
              <div className="bg-[#1E2228] rounded-xl overflow-hidden aspect-video border border-[#363C48]">
                <img src="/michael-portfolio/src/assets/sphere/exp3.JPG" alt="Trajectory Test Results" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-4">Conclusion</h2>
          <p className="text-[#C4C6D0] leading-relaxed">
            In this paper, we presented the design and implementation of Mosphero, a dual-mode pendulum-driven spherical robot. The coaxial dual-pendulum with bevel gear coupling enables omnidirectional rolling, side-rolling, and sharp turns, while the combination of continuous rolling and impulsive momentum actuation allows the robot to traverse deformable terrain.

The robot’s dynamics were formulated using the Lagrangian method and verified in MATLAB/Simulink, accurately predicting open-loop instability, closed-loop stabilization under PI velocity control, and slope-climbing performance trends. Experiments showed that closed-loop control reduced IAE by 87.1\%, while impulsive actuation shortened escape time on deformable terrain by a factor of 7.4 and nearly doubled the success rate. 2D trajectory tests confirmed omni-directional locomotion, including side-rolling maneuvers.

Future work will extend the controller to closed-loop trajectory tracking, incorporate an enhanced motor for greater escape torque, and exploit the modular design to integrate advanced sensing and task-specific payloads.
          </p>
        </div>

        {/* Publications */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-12">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-8">Publications</h2>
          
          <div className="space-y-6">
            {/* Journal Paper */}
            <div className="border-l-2 border-[#A8C7FA] pl-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#E2E2E6] mb-2">
                    Development of a Dual-Mode Spherical Robot Using a Differential Drive
                  </h3>
                  <p className="text-[#C4C6D0] text-base mb-2">
                    Po-Yu Chang*, Chih-Hao Chou*, Yao-Peng Chang*, Pei-Chun Lin
                  </p>
                  <p className="text-[#A8C7FA] text-sm font-medium">
                    IEEE Robotics and Automation Letters (RA-L), 2025
                  </p>
                </div>
                <a href="/michael-portfolio/src/assets/2025_RAL_Mosphero.pdf" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0 flex-shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    Paper
                  </Button>
                </a>
              </div>
            </div>

            {/* Conference Paper */}
            <div className="border-l-2 border-[#A8C7FA] pl-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#E2E2E6] mb-2">
                    A Two-Degree-of-Freedom Pendulum-Driven Spherical Robot Platform
                  </h3>
                  <p className="text-[#C4C6D0] text-base mb-2">
                    Po-Yu Chang*, Chih-Hao Chou*, Tai-Jie Wang*, Yao-Peng Chang*, Pei-Chun Lin
                  </p>
                  <p className="text-[#A8C7FA] text-sm font-medium">
                    International Conference on Advanced Robotics and Intelligent Systems (ARIS), 2025
                  </p>
                </div>
                <a href=" /michael-portfolio/src/assets/ARIS2025_Spherical_Robot.pdf" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0 flex-shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    Paper
                  </Button>
                </a>
              </div>
            </div>
          </div>
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