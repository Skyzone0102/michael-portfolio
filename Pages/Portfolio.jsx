import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../Components/Navigation';
import HeroSection from '../Components/HeroSection';
import ResearchCard from '../Components/ResearchCard';
import ProjectCard from '../Components/ProjectCard';
import ProjectModal from '../Components/ProjectModal';
import sphericalRobotImg from '../src/assets/sphere/spherical_robot.jpeg';
import rabbitGroupImg from '../src/assets/rabbit/rabbit_group.jpg';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      title: "Street Sweeping Mobile Robot",
      description: "Implemented SLAM using Fast-LIO and NDT, applied semantic segmentation with Open3D-ML, trained PointPillars model.",
      emoji: "🤖",
      tags: ["Robotics"]
    },
    {
      title: "Aero Rider (Capstone Project)",
      description: "Led team to design autonomous wind-powered vehicle with PD control, IMU fusion, and dual sail steering system.",
      emoji: "✈️",
      tags: ["Robotics", "Mechatronics"]
    },
    {
      title: "Ascend (Autonomous Stair Climbing and Escort for Navigation and Delivery)",
      description: "Designed mobile robot with human-following and stair-climbing via dual-chassis structure and RRR manipulator.",
      emoji: "🎯",
      tags: ["Robotics"],
      layoutStyle: 'detailed', // Options: 'detailed', 'compact', 'minimal', 'default'
      overview: "ASCEND is an autonomous mobile robot designed for last-mile delivery in multi-story buildings. It combines stair-climbing capabilities with human-following algorithms for complex urban environments.",
      keyFeatures: [
        "Dual-chassis structure with RRR manipulator for dynamic balance",
        "YOLOv8-based human detection and tracking",
        "Autonomous stair navigation with real-time pose estimation",
        "ROS 2 control architecture with 50Hz response rate"
      ],
      technicalDetails: {
        sections: [
          {
            title: "Mechanical Design",
            content: "Dual-chassis structure with independent front/rear wheel control. 3-DOF RRR manipulator enables pitch adjustment during climbing. Four DC motors for wheels, three servos for manipulator."
          },
          {
            title: "Human Following System",
            content: "YOLOv8 detects persons, MediaPipe estimates pose. Maintains 1-2m following distance through velocity adjustment and bounding box tracking."
          },
          {
            title: "Stair Climbing",
            content: "Three-phase approach: front climbs while rear supports, manipulator adjusts pitch, rear follows. Ultrasonic sensors detect edges, IMU maintains balance."
          }
        ]
      },
      results: [
        "Successfully climbed 18cm rise stairs",
        "95% human tracking accuracy",
        "45-minute battery operation"
      ],
      technologies: ["ROS 2", "YOLOv8", "MediaPipe", "Raspberry Pi", "ESP32", "OpenCV", "Python", "C++"],
      duration: "Sep 2023 - Jan 2024",
      teamSize: "4 members"
    },
    {
      title: "Robotic BackFlip Cat",
      description: "Engineered spring-loaded leg mechanism with motor-rope system to execute a backflip using Arduino control.",
      emoji: "🐱",
      tags: ["Robotics"]
    },
    {
      title: "LOCUS",
      description: "Developed lockbox for timed focus with OpenCV face detection, water-mist deterrent, and immersive study modes.",
      emoji: "📦",
      tags: ["Hardware"]
    },
    {
      title: "Turf AI",
      description: "Built ROS 2 turf monitoring system with AI segmentation, GNSS heatmaps, and dual U-Net models for grass analysis.",
      emoji: "🌱",
      tags: ["AI", "Robotics"]
    },
    {
      title: "Harbor Safety System",
      description: "Developed ROS 2 program using ToF sensors and DBSCAN algorithm to prevent AMR from falling at harbor edges.",
      emoji: "⚓",
      tags: ["Robotics"]
    },
    {
      title: "Drone-Based Waste Management",
      description: "Collaborated on business proposal for drone-based robotic system improving garbage collection efficiency for aging communities.",
      emoji: "🚁",
      tags: ["Autonomous"]
    },
    {
      title: "Electric Vehicle Design",
      description: "Completed specialization program in Design & Practice of Electric Vehicles, focusing on system integration and control.",
      emoji: "⚡",
      tags: ["Mechatronics"]
    }
  ];

  // Extract all unique tags
  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));
  
  // Determine how many projects to display
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <div className="min-h-screen bg-[#111318]">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <Navigation />
      
      <HeroSection />

      {/* Research Section */}
      <section id="research" className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#E2E2E6] mb-12 md:mb-16 text-center"
          >
            Research
          </motion.h2>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                title="2-DOF Dual-Mode Pendulum-Driven Spherical Robot"
                description="Designed modular frame with 2-DOF bevel gear mechanism, developed hybrid control strategy with Lagrangian dynamics modeling and Vicon validation."
                pageName="ResearchPendulumRobot"
                emoji="🤖"
                pdfLink="#"
                videoLink="#"
                imageSrc={sphericalRobotImg}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ResearchCard
                title="Experimental Platform for Simulating PIP Joint Movement"
                description="Engineered motion simulator with force sensors and kinematic tracking, developed PCA/K-means pipeline for tissue analysis in small joint surgery."
                pageName="ResearchJointMotion"
                emoji="⚙️"
                pdfLink="#"
                videoLink="#"
                imageSrc={rabbitGroupImg}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-4 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#E2E2E6] mb-8 md:mb-12 text-center">Projects</h2>
          
          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
            {allTags.map((tag) => {
              const tagThemes = {
                'Robotics': { primary: '#6DD58C', onPrimary: '#0A3818' },
                'AI': { primary: '#D0BCFF', onPrimary: '#381E72' },
                'Hardware': { primary: '#FFB784', onPrimary: '#4F2500' },
                'Autonomous': { primary: '#4FD8EB', onPrimary: '#00363D' },
                'Mechatronics': { primary: '#DCC48C', onPrimary: '#3E2E04' }
              };
              const theme = selectedTag === tag ? (tagThemes[tag] || { primary: '#A8C7FA', onPrimary: '#062E6F' }) : null;
              
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag 
                      ? '' 
                      : 'bg-[#1E2228] text-[#C4C6D0] hover:bg-[#2A3038]'
                  }`}
                  style={selectedTag === tag && theme ? { backgroundColor: theme.primary, color: theme.onPrimary } : undefined}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr min-h-[400px]">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    emoji={project.emoji}
                    tags={project.tags}
                    selectedTag={selectedTag}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {hasMoreProjects && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-[#1E2228] hover:bg-[#2A3038] text-[#E2E2E6]"
              >
                {showAllProjects ? 'Show Less' : 'Show More Projects'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-[#1E2228]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#E2E2E6] mb-2">Chih-Hao Chou</h3>
              <p className="text-[#C4C6D0] text-sm">B.S. in Mechanical Engineering @ National Taiwan University</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="mailto:michaelchou0102.app@gmail.com" className="text-[#C4C6D0] hover:text-[#A8C7FA] transition-colors duration-300 text-sm">
                Email
              </a>
              <a href="#" className="text-[#C4C6D0] hover:text-[#A8C7FA] transition-colors duration-300 text-sm">
                Google Scholar
              </a>
              <a href="#" className="text-[#C4C6D0] hover:text-[#A8C7FA] transition-colors duration-300 text-sm">
                GitHub
              </a>
              <a href="#" className="text-[#C4C6D0] hover:text-[#A8C7FA] transition-colors duration-300 text-sm">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 text-center">
            <p className="text-[#8A8D98] text-sm">© 2025 Chih-Hao Chou. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}