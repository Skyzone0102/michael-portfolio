import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Video, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { createPageUrl } from '@/utils';

export default function ResearchJointMotion() {
  return (
    <div className="min-h-screen bg-[#111318]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Title Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E2E6] mb-6">
            Development of a Smart Cadaveric Limb Motion Simulator for Physiologically Relevant In-Vitro Biomechanical Evaluation of Small Joints
          </h1>
          <p className="text-[#C4C6D0] text-lg mb-2">
            C. Y. Hong<sup>1,*</sup>, C. H. Chou<sup>1,*</sup>, K. L. Wu<sup>1</sup>, I. Ji. Wang<sup>1</sup>, D. R. Li<sup>1</sup>
          </p>
          <p className="text-[#8A8D98] text-sm mb-8">
            <sup>1</sup>Smart & Advanced Manufacturing Lab, National Taiwan University (NTU), <sup>*</sup>Equal contribution
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
            <div className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-[#2A3038] text-[#E2E2E6] border border-[#A8C7FA]">
              <BookOpen className="w-4 h-4 mr-2 text-[#A8C7FA]" />
              Under Review in IEEE TBME
            </div>
          </div>
        </div>

        {/* Two-column layout: System Image and Project Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* System Image Block - 1/3 width */}
          <div className="bg-[#1E2228] p-6 rounded-3xl">
            <div className="rounded-2xl overflow-hidden border border-[#2A3038] bg-white p-4">
              <img 
                src="/michael-portfolio/src/assets/rabbit/rabbit_real.png" 
                alt="Smart Cadaveric Limb Motion Simulator" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Project Overview Block - 2/3 width */}
          <div className="md:col-span-2 bg-[#1E2228] p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Project Overview</h2>
            <div className="space-y-4">
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Physiological Simulation: </span>
                Developed a smart cadaveric motion simulator to evaluate small joint biomechanics (specifically the PIPJ) under physiological loading conditions.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Hybrid Evaluation Platform: </span>
                The system uses a rabbit knee model as a surrogate for human finger joints, preserving native ligaments and soft tissues to overcome the limitations of synthetic or static testing models.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Standardized Framework: </span>
                Established a novel quantitative framework using three normalized metrics—Relative Incision Length (RIL), Relative Amplitude Difference (RAD), and Strain Alteration Index (SAI)—to assess surgical defects.
              </p>
              <p className="text-[#C4C6D0] leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Smart Sensing: </span>
                Integrates synchronized global force acquisition with localized optical tissue deformation analysis to characterize joint stability.
              </p>
            </div>
          </div>
        </div>

        {/* Mechanical & System Design */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Mechanical & System Design</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            The platform is designed as a modular benchtop system capable of applying repeatable motion while capturing high-fidelity biomechanical data.
          </p>
          
          <h3 className="text-lg font-semibold text-[#A8C7FA] mb-4">System Specifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* System specs stacked vertically */}
            <div className="space-y-4">
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Modular Architecture</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  Frame and fixtures fabricated from carbon-fiber-reinforced PLA, featuring an adjustable clamping mechanism to accommodate specimens of varying geometries
                </p>
              </div>
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Actuation & Sensing</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  High-torque digital servo drives the limb through precise flexion-extension cycles (up to 70°), while an integrated uniaxial load cell records vertical reaction forces at 8 Hz
                </p>
              </div>
              <div className="bg-[#242933] p-5 rounded-2xl">
                <h4 className="text-base font-semibold text-[#E2E2E6] mb-2">Optical Tracking</h4>
                <p className="text-[#C4C6D0] text-sm leading-relaxed">
                  Dual-camera setup monitors motion, with a high-resolution lateral camera (1600x1200) capturing sagittal plane deformation for detailed strain analysis
                </p>
              </div>
            </div>
            
            {/* System photo placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#2A3038] flex items-center justify-center bg-white p-6">
              <img 
                src="/michael-portfolio/src/assets/rabbit/rabbit_cad.png" 
                alt="System CAD Design" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Methodology: Automated Analysis Pipeline */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Methodology: Automated Analysis Pipeline</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            <span className="font-semibold text-[#E2E2E6]">Goal:</span> To transform raw video footage into objective biomechanical metrics using computer vision and unsupervised learning.
          </p>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            Our custom data processing pipeline consists of four synchronized stages:
          </p>
          
          <div className="space-y-5">
            {/* Stage 1 */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-2">Mean Track Generation</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                We utilize optical flow to track fiducial markers across multiple flexion-extension cycles. These are synchronized and averaged to produce a robust "Mean Trajectory" for every point on the tissue surface, eliminating experimental noise.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-2">Intelligent Region Identification</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                Instead of manual selection, we use machine learning to segment the limb. We extract 19 kinematic features from the trajectories, reduce them via PCA, and apply K-means clustering to objectively group markers into distinct functional regions.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-2">Strain Quantification</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                Simultaneously, we compute the Green-Lagrange strain tensor (E) from the relative displacement of markers. This yields the maximum principal strain (ε₁), quantifying the physical stretching of the tissue.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-2">Stage-Based Comparison</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                Finally, we analyze the "Critical Region" (Region 2) during specific motion stages to compare the pre-operative and post-operative states.
              </p>
            </div>
          </div>
        </div>

        {/* Quantitative Stability Indices */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Quantitative Stability Indices</h2>
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            To standardize the assessment across different specimens, we established three normalized indices:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* RIL */}
            <div className="bg-[#2A3038] p-6 rounded-3xl">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-1 text-center">RIL</h3>
              <p className="text-base text-[#E2E2E6] mb-2 text-center">(Relative Incision Length)</p>
              <p className="text-[#8A8D98] text-sm mb-4 italic text-center">The Surgical Input</p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed mb-3">
                <span className="font-semibold text-[#E2E2E6]">Definition:</span> The length of the surgical defect divided by the total limb length.
              </p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Function:</span> It acts as the "standardized dose," allowing us to compare the severity of defects across subjects of different sizes.
              </p>
            </div>

            {/* RAD */}
            <div className="bg-[#2A3038] p-6 rounded-3xl">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-1 text-center">RAD</h3>
              <p className="text-base text-[#E2E2E6] mb-2 text-center">(Relative Amplitude Difference)</p>
              <p className="text-[#8A8D98] text-sm mb-4 italic text-center">The Global Response</p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed mb-3">
                <span className="font-semibold text-[#E2E2E6]">Definition:</span> The percentage change in the joint's force transmission capability.
              </p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Function:</span> Measures Global Damping. A negative RAD indicates the joint has lost stiffness and is "absorbing" force rather than transmitting it effectively.
              </p>
            </div>

            {/* SAI */}
            <div className="bg-[#2A3038] p-6 rounded-3xl">
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-1 text-center">SAI</h3>
              <p className="text-base text-[#E2E2E6] mb-2 text-center">(Strain Alteration Index)</p>
              <p className="text-[#8A8D98] text-sm mb-4 italic text-center">The Local Response</p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed mb-3">
                <span className="font-semibold text-[#E2E2E6]">Definition:</span> The cumulative increase in tissue strain after surgery.
              </p>
              <p className="text-[#C4C6D0] text-sm leading-relaxed">
                <span className="font-semibold text-[#E2E2E6]">Function:</span> Measures Local Risk. A high SAI indicates severe stress concentration in the soft tissues surrounding the joint.
              </p>
            </div>
          </div>
        </div>

        {/* Experimental Findings: The Decoupling Effect */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Experimental Findings</h2>
          
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            We observed distinct trends as the defect size (RIL) increased from small (RL-01) to large (RL-04):
          </p>

          {/* Results Image Placeholder */}
          <div className="bg-white rounded-3xl border border-[#363C48] mb-8 p-6">
            <img 
              src="/michael-portfolio/src/assets/rabbit/rabbit_result.png" 
              alt="Experimental Results" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Two findings side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Global Force Collapses */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl font-bold text-[#A8C7FA]">RIL ↑</div>
                <div className="text-2xl font-bold text-[#A8C7FA]">RAD ↓</div>
              </div>
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-3">Global Force Collapses with Size</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                As the defect size increased (Top Left Graph), the force transmission dropped significantly (Top Right Graph). The largest defect (RL-04) resulted in a -93% reduction in force, indicating a massive loss of joint pressurization.
              </p>
            </div>

            {/* Local Strain Peaks */}
            <div className="border-l-4 border-[#A8C7FA] pl-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl font-bold text-[#A8C7FA]">RIL ↑</div>
                <div className="text-2xl font-bold text-[#A8C7FA]">SAI ↓</div>
              </div>
              <h3 className="text-lg font-semibold text-[#E2E2E6] mb-3">Local Strain Peaks at Small Defects</h3>
              <p className="text-[#C4C6D0] leading-relaxed">
                Paradoxically, the highest local tissue strain did not occur in the largest defects. Small defects (RL-01) caused intense stress concentrations (SAI &gt; 150%) due to incongruent bone contact. As the defect grew larger, the load shifted to the soft tissue envelope, actually reducing the localized strain peak (Bottom Graphs).
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-[#1E2228] p-8 rounded-3xl mb-8">
          <h2 className="text-2xl font-bold text-[#E2E2E6] mb-6">Conclusion</h2>
          
          <p className="text-[#C4C6D0] leading-relaxed mb-6">
            This study challenges the assumption that larger surgical defects linearly degrade joint mechanics. Instead, we identified a critical mechanical decoupling: small defects generate intense local strain concentrations (high risk of tissue failure), whereas large defects result in a loss of global stiffness (force damping).
          </p>

          <p className="text-[#C4C6D0] leading-relaxed">
            Our primary contribution is the development of a validated, multi-scale framework—integrating RIL, RAD, and SAI—that provides the first standardized method for quantifying small-joint stability. This methodology offers a new rationale for understanding post-traumatic pathomechanics and establishes a robust foundation for benchmarking the next generation of artificial finger joints.
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
                    Development of a Smart Cadaveric Limb Motion Simulator for Physiologically Relevant In-Vitro Biomechanical Evaluation of Small Joints
                  </h3>
                  <p className="text-[#C4C6D0] text-base mb-2">
                    C. Y. Hong*, C. H. Chou*, K. L. Wu, I. Ji. Wang, D. R. Li
                  </p>
                  <p className="text-[#A8C7FA] text-sm font-medium">
                    IEEE Transactions on Biomedical Engineering (TBME), Under Review
                  </p>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer">
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
                    Smart Joint Motion Simulation Platform with Integrated Force Sensing for Clinical Assessment of Artificial Finger Joints
                  </h3>
                  <p className="text-[#C4C6D0] text-base mb-2">
                    C. Y. Hong*, C. H. Chou*, K. L. Wu, I. Ji. Wang, D. R. Li
                  </p>
                  <p className="text-[#A8C7FA] text-sm font-medium">
                    CSME 2025 Annual Meeting and the 42nd National Academic Conference, 2025
                  </p>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer">
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