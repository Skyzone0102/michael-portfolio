import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../Components/Navigation';
import HeroSection from '../Components/HeroSection';
import ResearchCard from '../Components/ResearchCard';
import ProjectCard from '../Components/ProjectCard';
import ProjectModal from '../Components/ProjectModal';
import sphericalRobotImg from '../src/assets/sphere/spherical_robot.jpeg';
import rabbitGroupImg from '../src/assets/rabbit/rabbit_group.jpg';
import amrSlamImg from '../src/assets/mobile_robot/amr_slam.png';
import amrSegImg from '../src/assets/mobile_robot/amr_seg.png';
import amrCollectImg from '../src/assets/mobile_robot/amr_collect.jpg';
import aeroRuleImg from '../src/assets/aerorider/aero_rule.png';
import aeroDesignImg from '../src/assets/aerorider/aero_design.png';
import aeroPhotoImg from '../src/assets/aerorider/aero_photo.jpg';
import aeroReportPdf from '../src/assets/aerorider/Final_Report.pdf';
import ascendDesignImg from '../src/assets/ascend/ascend_design.png';
import ascendTrajImg from '../src/assets/ascend/ascend_traj.png';
import ascendPicImg from '../src/assets/ascend/ascend_pic.png';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [
    {
      title: "Street Sweeping Mobile Robot",
      description: "Implemented SLAM using Fast-LIO and NDT, applied semantic segmentation with Open3D-ML, trained PointPillars model.",
      emoji: "🤖",
      tags: ["Robotics", "AI"],
      layoutStyle: 'custom-two-part',
      overview: "A two-part research project developing advanced autonomous navigation and semantic understanding capabilities for mobile robots and autonomous vehicles.",
      imageSrc: amrCollectImg,
      part1Image: amrSlamImg,
      part2Image: amrSegImg,
      technicalDetails: {
        sections: [
          {
            title: "Overview",
            content: "This project establishes a versatile \"autonomous backbone\" for mobile robotics, designed to provide fundamental intelligence independent of specific deployment tasks. By integrating robust SLAM for precision localization with deep learning-based semantic segmentation, the system enables robots to map, locate, and interpret complex environments in real-time."
          },
          {
            title: "Module 1: SLAM & Localization",
            content: "A navigation system implemented on the 'iAuto' mobile robot platform to achieve autonomous mapping and localization in indoor environments.\n\nTechnical Implementation:\n• Hardware Setup: Ouster 64 LiDAR sensor mounted on the mobile base to capture high-resolution 3D environmental data.\n• Mapping (FastLIO): Deployed the FastLIO algorithm to generate high-fidelity 3D point cloud maps. The system visualizes the static 'built map' (displayed in blue) contrasted with real-time point cloud scans (displayed in color) to verify mapping consistency.\n• Localization (NDT): Implemented Normal Distributions Transform (NDT) Localization to estimate the robot's pose within the pre-built map with high precision."
          },
          {
            title: "Module 2: Semantic Segmentation",
            content: "A research initiative focused on building semantic LiDAR maps to enhance environmental understanding for autonomous vehicles.\n\nMethodology:\n• Data Collection: A golf cart equipped with 3D LiDAR was driven around campus to collect large-scale real-world datasets.\n• Semantic Segmentation: Utilized the Open3D-ML package to process the raw point cloud data. The pipeline performs semantic segmentation to classify distinct objects (e.g., vegetation, buildings, roads).\n• Model Comparison: Evaluated two state-of-the-art deep learning models: RandLA-Net and KPConv.\n• Result: The comparative analysis demonstrated that KPConv achieved superior segmentation performance compared to RandLA-Net for this specific application."
          }
        ]
      },
      results: [
        "Successfully generated high-fidelity 3D indoor maps with FastLIO",
        "Achieved high-precision NDT localization on iAuto platform",
        "Collected large-scale campus dataset with golf cart platform",
        "KPConv outperformed RandLA-Net in semantic segmentation accuracy"
      ],
      technologies: ["ROS", "RViz", "Ouster 64 LiDAR", "FastLIO", "NDT Localization", "Open3D-ML", "RandLA-Net", "KPConv", "Python"],
      duration: "Research Project"
    },
    {
      title: "Aero Rider (Capstone Project)",
      description: "Led team to design autonomous wind-powered vehicle with PD control, IMU fusion, and dual sail steering system.",
      emoji: "✈️",
      tags: ["Robotics", "Mechatronics", "Hardware"],
      layoutStyle: 'aero-rider-custom',
      imageSrc: aeroPhotoImg,
      overview: "Aero Rider is an autonomous, wind-powered vehicle developed for the 2024 Mechanical Engineering Capstone. The objective was to engineer a robot capable of navigating a complex track using only wind energy for propulsion and control. By integrating mechanical design with mechatronic systems, the vehicle adjusts its sail geometry in real-time to maintain stability and optimize trajectory against varying wind fields.",
      competitionRules: {
        description: "The design had to adhere to strict physical and operational constraints while navigating a 5-segment course containing slopes and \"untouchable\" grass zones.",
        constraints: [
          "Size Limit: 30cm × 21cm × 40cm (Length/Width/Height)",
          "Weight Limit: Under 2 kg",
          "Budget: < NTD 3000 for the electromechanical system",
          "Navigation: Must rely entirely on external wind for propulsion; no internal drive motors allowed"
        ],
        trackImage: aeroRuleImg
      },
      mechanicalDesign: {
        description: "The vehicle features a modular design optimized for high strength-to-weight ratio using Finite Element Analysis (FEA).",
        details: [
          "Chassis: Laser-cut MDF with a rib-plate structure to support the electromechanical load without deformation",
          "Lifting Mechanism: Utilizes a custom rack-and-pinion system driven by a high-torque MG996R servo to elevate the sails 203mm into the wind field",
          "Sail Configuration: A V-shaped (150°) dual-sail design prevents aerodynamic singularity. The sails feature L-bracket tips to increase the drag coefficient (Cd ≈ 1.36), maximizing propulsion in low-wind zones",
          "Braking System: A servo-actuated PLA brake applies friction to the universal wheels, allowing for active speed control on slopes"
        ],
        image: aeroDesignImg
      },
      controlSystem: {
        description: "To counteract external wind disturbances and maintain the target heading, the vehicle utilizes a closed-loop PD control system.",
        sensors: [
          "Custom Encoder: A 3D-printed transmissive optical encoder with suspension measures distance traveled",
          "IMU (MPU-6050): Provides real-time Yaw (heading) feedback"
        ],
        logic: "An Arduino microcontroller compares the actual Yaw vs. the Desired Yaw (based on track segment). It uses a PD algorithm (Kp=15, Kd=0.4) to differentially adjust the left and right sail angles, creating yaw moments to steer the vehicle.",
        video: "https://youtube.com/shorts/i9I9SLFesik"
      },
      technologies: ["Arduino", "SolidWorks", "FEA Analysis", "PD Control", "IMU (MPU-6050)", "Servo Control", "3D Printing", "Laser Cutting"],
      duration: "2024 Capstone Project",
      teamSize: "Team Project",
      reportPdf: aeroReportPdf,
      demoVideo: "https://youtube.com/shorts/i9I9SLFesik"
    },
    {
      title: "Stair Climbing Robot",
      description: "Designed mobile robot with human-following and stair-climbing via dual-chassis structure and RRR manipulator.",
      emoji: "🎯",
      tags: ["Robotics"],
      layoutStyle: 'ascend-custom',
      imageSrc: ascendPicImg,
      overview: "ASCEND (Autonomous Stair Climbing and Escort for Navigation and Delivery) is an articulated robot designed to autonomously transport heavy loads up stairs and track users on flat ground.",
      keyFeatures: [
        "Payload Delivery: Secure transport of items to reduce physical strain.",
        "Escort Mode: Real-time human tracking for hands-free navigation.",
        "Terrain Adaptation: An RRR manipulator design reconfigures geometry to climb standard stairs."
      ],
      design: {
        mainImage: ascendDesignImg,
        humanFollowing: {
          title: "Human Following Logic",
          description: "Navigation relies on a three-sensor HC-SR04 ultrasonic array to calculate real-time distance differentials:",
          details: [
            "Forward/Stop: Regulated by frontal distance thresholds (e.g., Front > Stop Dist triggers forward motion).",
            "Steering: Direction determined by comparing lateral inputs (e.g., Left < Right triggers a Turn Left command).",
            "Safety: Front < Min Distance triggers automatic reverse to prevent collisions."
          ]
        },
        trajectoryPlanning: {
          title: "Trajectory Planning",
          description: "To ensure stability, we applied Inverse Kinematics (IK) to map five key poses along the climbing path, constraining the approach angle to 90° relative to the step.",
          details: [
            "Smoothing: MATLAB-generated Cubic Polynomials created smooth trajectories between poses (assuming zero initial/final velocity).",
            "Execution: Coefficients were deployed to an Arduino controller, executing motion in 0.2-second segments to minimize jerk."
          ],
          image: ascendTrajImg
        },
        video1: "https://youtu.be/8E-kyqwOJFg",
        video2: "https://youtu.be/1lo-rHRj5FE"
      },
      technologies: ["Arduino", "MATLAB", "Inverse Kinematics", "HC-SR04 Ultrasonic", "RRR Manipulator", "Cubic Polynomials", "C++"],
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
    // {
    //   title: "Drone-Based Waste Management",
    //   description: "Collaborated on business proposal for drone-based robotic system improving garbage collection efficiency for aging communities.",
    //   emoji: "🚁",
    //   tags: ["Autonomous"]
    // },
    // {
    //   title: "Electric Vehicle Design",
    //   description: "Completed specialization program in Design & Practice of Electric Vehicles, focusing on system integration and control.",
    //   emoji: "⚡",
    //   tags: ["Mechatronics"]
    // }
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
                title="Data-Driven Kinematic Stability Assessment for Artifical Joints "
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
                    imageSrc={project.imageSrc}
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