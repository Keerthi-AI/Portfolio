import React from "react";
import "../index.css";
import { motion } from "framer-motion";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faRobot,
  faEye,
  faLanguage,
  faDownload,
  faCertificate,
  faPuzzlePiece,
  faLaptopCode,
  faMagnifyingGlass,
  faFlask,
  faGears,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faPython,
  faJs,
  faJava
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const skills = [
    { name: "Machine Learning", icon: faBrain, color: "#46A5CA", description: "Building predictive models" },
    { name: "Deep Learning", icon: faBrain, color: "#8C2F2F", description: "Neural networks & CNN" },
    { name: "LLM", icon: faRobot, color: "#4FAE4D", description: "NLP & transformers" },
    { name: "React", icon: faReact, color: "#61DAFB", description: "Frontend development" },
    { name: "Computer Vision", icon: faEye, color: "#D6590C", description: "Image processing" },
    { name: "NLP", icon: faLanguage, color: "#A534A0", description: "Text analysis" },
    { name: "Java", icon: faJava, color: "#F7DF1E", description: "Primary language" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E", description: "Web development" }
  ];
  
  // Project approach phases with more detailed information
  const approachPhases = [
    {
      title: "Research & Discovery",
      shortTitle: "Phase 1: Research",
      icon: faMagnifyingGlass,
      color: "#46A5CA",
      description: "Understanding the problem domain and identifying opportunities.",
      details: [
        "Comprehensive literature review",
        "Data collection and analysis",
        "Identifying key challenges and constraints",
        "Defining clear objectives and success metrics"
      ]
    },
    {
      title: "Experimentation",
      shortTitle: "Phase 2: Development",
      icon: faFlask,
      color: "#A534A0",
      description: "Testing hypotheses and exploring different approaches.",
      details: [
        "Rapid prototyping and proof-of-concept development",
        "Model evaluation and benchmarking",
        "Iterative refinement based on results",
        "Comparative analysis of different techniques"
      ]
    },
    {
      title: "Implementation",
      shortTitle: "Phase 3: Implementation",
      icon: faGears,
      color: "#4FAE4D",
      description: "Building robust, scalable solutions with attention to detail.",
      details: [
        "Clean, modular code architecture",
        "Optimization for performance and efficiency",
        "Comprehensive testing and validation",
        "Documentation and knowledge sharing"
      ]
    },
    {
      title: "Deployment & Impact",
      shortTitle: "Phase 4: Deployment",
      icon: faRocket,
      color: "#D6590C",
      description: "Delivering value and measuring real-world outcomes.",
      details: [
        "Seamless integration with existing systems",
        "Continuous monitoring and improvement",
        "User feedback incorporation",
        "Impact assessment against initial objectives"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[var(--color-bg)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)] to-[var(--color-second)]/20"></div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3"></div>
        </motion.div>

        <motion.div 
          className="bg-[var(--color-second)] rounded-xl overflow-hidden border border-[#576fa0]/30 p-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-[var(--color-bg)]/60 backdrop-blur-sm border border-[#576fa0]/20 text-amber-50 rounded-lg p-4 flex flex-col items-center text-center gap-2 hover:border-[#576fa0]/50 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-second)]/80 flex items-center justify-center mb-2">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="text-2xl" 
                    style={{ color: skill.color }} 
                  />
                </div>
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-amber-50/70">{skill.description}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Project Approach Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-amber-50 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Approach to Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {approachPhases.map((phase, index) => (
                <motion.div 
                  key={index}
                  className="relative group h-64 sm:h-72"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Card background with gradient */}
                  <div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-br"
                    style={{ 
                      backgroundImage: `linear-gradient(to bottom right, ${phase.color}10, ${phase.color}01)`,
                      border: `1px solid ${phase.color}30`
                    }}
                  ></div>
                  
                  {/* Front card content (always visible) */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center transition-opacity duration-500 group-hover:opacity-0">
                    <div 
                      className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}20` }}
                    >
                      <FontAwesomeIcon 
                        icon={phase.icon} 
                        className="text-3xl" 
                        style={{ color: phase.color }} 
                      />
                    </div>
                    <h4 className="text-xl font-bold text-amber-50 mb-2">{phase.shortTitle}</h4>
                    <p className="text-amber-50/70 text-sm">{phase.description}</p>
                  </div>
                  
                  {/* Back card content (visible on hover) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--color-second)]/90 rounded-xl border border-[#576fa0]/50 transform group-hover:scale-105 transition-transform">
                    <h4 className="text-lg font-bold mb-4" style={{ color: phase.color }}>{phase.title}</h4>
                    <ul className="text-amber-50/90 text-sm text-left space-y-2">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className="text-xs mt-1 flex-shrink-0" 
                            style={{ color: phase.color }}
                          >●</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 