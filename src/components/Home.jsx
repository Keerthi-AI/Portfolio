import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode, faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { BackgroundLines } from "./ui/background-lines";

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <BackgroundLines className="absolute inset-0" />
      
      {/* Content container with max-width */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left content column */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-3/5"
          >
            <div className="inline-block mb-3">
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              Aspiring AI/ML Engineer
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              I'm Keerthinathan
            </h1>

            
            <h2 className="text-xl md:text-2xl text-white/90 mb-6">
            Developed <span className="text-gradient-animate font-semibold">intelligent solutions</span>
            </h2>
            
            <p className="text-white/70 max-w-2xl mb-8">
            Real-world problem solver integrating Machine Learning with Web Development to create impactful solutions .
            </p>
            
            {/* Social links */}
            <div className="flex space-x-5 mb-8">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Keerthi-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/keerthinathan-a-4a8810222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/Keerthinathan13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </motion.a>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span>View Projects</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut" 
                  }}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-transparent border border-indigo-500/30 text-white rounded-full flex items-center justify-center gap-2 hover:border-indigo-500/60 transition-all duration-300"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right content column - Animated tech icons */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full border-2 border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-5xl text-white"
                  >
                    <FontAwesomeIcon icon={faBrain} />
                  </motion.div>
                </div>
              </div>
              
              {/* Orbiting icons */}
              {[faCode, faRobot].map((icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm flex items-center justify-center text-white"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: Math.cos(index * Math.PI + Math.PI/4) * 120,
                    y: Math.sin(index * Math.PI + Math.PI/4) * 120,
                    opacity: 1
                  }}
                  transition={{ 
                    delay: 0.8 + (index * 0.2),
                    duration: 0.5
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-1 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;