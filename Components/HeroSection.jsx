import React from 'react';
import { Mail, GraduationCap, Github, Linkedin, FileText, Instagram } from 'lucide-react';
import profileImage from '../src/assets/square_profile.jpg';

export default function HeroSection() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:michaelchou0102.app@gmail.com', label: 'Email' },
    { icon: Instagram, href: 'https://www.instagram.com/michaelchou_0102/', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: FileText, href: '#', label: 'CV' }
  ];

  const interests = [
    'Robotic Manipulation',
    'Control Systems',
    'Robot Dynamics',
    'Robot Perception'
  ];

  const education = [
    {
      degree: 'Exchange Student',
      year: '2026 Spring',
      institution: 'University of Groningen (RUG)',
    },
    {
      degree: 'B.S. in Mechanical Engineering',
      year: '2021 - 2026 (Expected)',
      institution: 'National Taiwan University (NTU)',
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column - 1/3 width */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            {/* Profile Picture */}
            <div className="w-64 h-64 rounded-full mb-6 overflow-hidden bg-[#1E2228] border border-[#2A3038]">
              {/* Replace the src below with your actual image path */}
              <img 
                src={profileImage} 
                alt="Chih-Hao Chou" 
                className="w-full h-full object-cover -translate-y-2 scale-110"
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold text-[#E2E2E6] mb-2 text-center">
              Chih-Hao Chou
            </h1>

            {/* Title */}
            <p className="text-base text-[#C4C6D0] mb-1 text-center ">
              B.S. in Mechanical Engineering
            </p>

            {/* University */}
            <p className="text-base text-[#A8C7FA] mb-6 text-center">
              National Taiwan University (NTU)
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.label}
                  className="w-10 h-10 rounded-3xl flex items-center justify-center transition-colors duration-300 bg-[#1E2228] hover:bg-[#2A3038]"
                >
                  <social.icon className="w-4 h-4 text-[#A8C7FA]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - 2/3 width */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#E2E2E6] mb-6">About Me</h2>

            {/* Paragraph 1 */}
            <p className="text-sm md:text-base text-[#C4C6D0] leading-relaxed mb-4">
              I am an undergraduate student in {' '}
              <a href="https://www.me.ntu.edu.tw/home.jsp?lang=en" className="text-[#A8C7FA] hover:underline">Mechanical Engineering</a>{' '}
              at{' '}
              <a href="https://www.ntu.edu.tw/english/" className="text-[#A8C7FA] hover:underline">National Taiwan University (NTU)</a>
              , expected to graduate in June 2026. My research interests lie at the intersection of Robotics, Control Systems, and Robot Vision.{' '}
              
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm md:text-base text-[#C4C6D0] leading-relaxed mb-4">
              I have conducted research at the {' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Bio-Inspired Robotics Lab</a>
              {' '} advised by{' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Prof. Pei-Chun Lin</a>
              , where I developed a dual-mode spherical robot capable of omnidirectional locomotion. I also investigated kinematic stability for artificial joints at the {' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Smart & Advanced Manufacturing Lab</a>
              {' '} advised by{' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Prof. Dian-Ru Li</a>
              , and implemented SLAM and 3D semantic segmentation for autonomous robots at the {' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Intelligent Vehicle & Mechatronics Lab</a>
              , advised by{' '}
              <a href="#" className="text-[#A8C7FA] hover:underline">Prof. Kang Li</a>.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm md:text-base text-[#C4C6D0] leading-relaxed mb-8">
              Complementing my academic research, I have gained R&D experience as a Software Engineer Intern at {' '}
              <a href="https://www.itri.org.tw/english/index.aspx" className="text-[#A8C7FA] hover:underline">ITRI</a>
              {' '}and a Technology Development Intern at {' '}
              <a href="https://ursrobot.ai/" className="text-[#A8C7FA] hover:underline">URS Robot Inc.</a>
              , where I deployed ROS 2 systems, computer vision algorithms, and AI-based segmentation in real-world environments.
            </p>

            {/* Interests and Education Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
              {/* Interests */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#E2E2E6] mb-4">Interests</h3>
                <ul className="space-y-2">
                  {interests.map((interest, index) => (
                    <li key={index} className="text-[#C4C6D0] flex items-start">
                      <span className="text-[#A8C7FA] mr-2">•</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#E2E2E6] mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-3xl flex items-center justify-center flex-shrink-0 mt-0 bg-[#1E2228]">
                        <GraduationCap className="w-4 h-4 text-[#A8C7FA]" />
                      </div>
                      <div>
                        <p className="text-[#E2E2E6] font-medium">
                          {edu.degree}
                        </p>
                        <p className="text-[#8A8D98] text-sm">{edu.year}</p>
                        <p className="text-[#C4C6D0] text-sm">{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}