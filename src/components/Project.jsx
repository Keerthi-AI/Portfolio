import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Project images - import your project images here
import Project1 from '../assets/project-1.png'; 
import Project2 from '../assets/images.png';
import Project3 from '../assets/aa.jpg';
import Project4 from '../assets/images.jpg';
import Project5 from '../assets/medconnect.jpg';
import Project6 from '../assets/faircart.png';

function Project() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
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

    // Project data
    const projects = [
        {
            id: 1,
            title: "Diabetic Foot Ulcer and Retinopathy Classification",
            description: "Built a deep learning model using MobileNet and Vision Transformer for accurate DR and DFU classification.",
            image: Project3,
            github: "https://github.com/Keerthi-AI/medconnect",
            skills: ["tensorflow", "python", "mobilenet", "vision-transformer", "healthcare"]
        },
        {
            id: 2,
            title: "Sticker Recommendation Using Sentimental Analysis",
            description: "Created a multimodal sentiment analysis system (English & Tamil) using CNN and BERT for sticker suggestions.",
            image: Project2,
            github: "https://github.com/Keerthi-AI/Conversation_emotion_detection",
            skills: ["nlp", "python", "cnn", "bert", "multilingual", "sentiment-analysis"]
        },
        {
            id: 3,
            title: "Stock Market Prediction",
            description: "Forecasted Bitcoin prices using LSTM and GRU. GRU performed better with lower MAE (18%).",
            image: Project1,
            github: "https://github.com/Keerthi-AI/Bitcoin_Prediction",
            skills: ["python", "lstm", "gru", "finance", "time-series"]
        },
        {
            id: 4,
            title: "Enhanced Detection of Pulmonary Nodules",
            description: "The project implements a 2D U-Net Convolutional Neural Network to segment potential cancerous nodules in CT images from the LUNA16 dataset",
            image: Project4,
            github: "https://github.com/Keerthi-AI/Lung_Cancer_Pulmonary_Detection",
            skills: ["python", "tensorflow", "cnn", "medical-imaging", "healthcare"]
        },
        {
            id: 5,
            title: "MedConnect",
            description: "Developed the Doctor-Appointment Booking System",
            image: Project5,
            github: "https://github.com/Keerthi-AI/MedConnect",
            skills: ["react", "node", "mongodb", "authentication"]
        },
        {
            id: 6,
            title: "FairCart: E-Commerce Platform",
            description: "Designed and developed a unique review system that allows only one review per user per product, preventing spam and ensuring authenticity.",
            image: Project6,
            github: "https://github.com/Keerthi-AI/Ecommerce",
            skills: ["react", "node", "mongodb", "authentication", "e-commerce"]
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[var(--color-second)]/30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-second)]/10"></div>
            
            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                {/* Section header */}
                <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Recent Projects
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 mb-8"></div>
                    <p className="text-amber-50/70 max-w-2xl mx-auto">
                        Here are some of my recent projects spanning AI, machine learning, and web development.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map(project => (
                        <motion.div 
                            key={project.id}
                            variants={itemVariants}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                            <div className="bg-[var(--color-second)] rounded-xl overflow-hidden border border-[#576fa0]/30 h-full relative z-10 flex flex-col">
                                {/* Project image */}
                                <div className="relative overflow-hidden h-48">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-second)] to-transparent opacity-60"></div>
                                </div>
                                
                                {/* Project content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold text-amber-50 mb-2 line-clamp-2">{project.title}</h3>
                                    <p className="text-amber-50/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    
                                    {/* Skills tags */}
                                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                        {project.skills.slice(0, 3).map((skill, index) => (
                                            <span 
                                                key={index}
                                                className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {project.skills.length > 3 && (
                                            <span className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded">
                                                +{project.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* GitHub link (centered) */}
                                    <div className="flex justify-center mt-2">
                                        <a 
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-amber-50/80 hover:text-[var(--color-main)] transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faGithub} size="lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* GitHub link */}
                <motion.div 
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <a 
                        href="https://github.com/Keerthi-AI"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 text-amber-50 rounded-full hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2 group"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>View More on GitHub</span>
                        <motion.div
                            className="ml-1"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut" 
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Project;
// import React, { useState } from 'react';
// import '../index.css';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faReact, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
// import { faGlobe, faCode, faArrowRight, faFilter, faExternalLinkAlt, faTag } from "@fortawesome/free-solid-svg-icons";

// // Project images - import your project images here
// import Project1 from '../assets/project-1.png'; 
// import Project2 from '../assets/images.png';
// import Project3 from '../assets/aa.jpg';
// import Project4 from '../assets/project-4.png';
// import Project5 from '../assets/project-5.png';
// import Project6 from '../assets/faircart.png';

// function Project() {
//     // Filter state
//     const [filter, setFilter] = useState('all');
    
//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 30, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 12
//             }
//         }
//     };

//     // Project data
//     const projects = [
//         {
//             id: 1,
//             title: "Diabetic Foot Ulcer and Retinopathy Classification",
//             description: "Built a deep learning model using MobileNet and Vision Transformer for accurate DR and DFU classification.",
//             image: Project3,
//             github: "https://github.com/Keerthi-AI/medconnect",
//             category: "ai",
//             skills: ["tensorflow", "python", "mobilenet", "vision-transformer", "healthcare"]
//         },
//         {
//             id: 2,
//             title: "Sticker Recommendation Using Sentimental Analysis",
//             description: "Created a multimodal sentiment analysis system (English & Tamil) using CNN and BERT for sticker suggestions.",
//             image: Project2,
//             github: "https://github.com/Keerthi-AI/sticker-recommendation",
//             category: "nlp",
//             skills: ["nlp", "python", "cnn", "bert", "multilingual", "sentiment-analysis"]
//         },
//         {
//             id: 3,
//             title: "Stock Market Prediction",
//             description: "Forecasted Bitcoin prices using LSTM and GRU. GRU performed better with lower MAE (18%).",
//             image: Project1,
//             github: "https://github.com/Keerthi-AI/Bitcoin_Prediction",
//             demo: "https://keerthi-ai.github.io/bitcoin-prediction-demo",
//             category: "ai",
//             skills: ["python", "lstm", "gru", "finance", "time-series"]
//         },
//         {
//             id: 4,
//             title: "Enhanced Detection of Pulmonary Nodules",
//             description: "Used a custom CNN architecture to classify Oral Squamous Cell Carcinoma with 81% accuracy.",
//             image: Project4,
//             github: "https://github.com/Keerthi-AI/pulmonary-nodule-detection",
//             category: "ai",
//             skills: ["python", "tensorflow", "cnn", "medical-imaging", "healthcare"]
//         },
//         {
//             id: 5,
//             title: "MedConnect",
//             description: "Developed a unified binary classifier to route input images to either the DR or DFU model for diagnosis.",
//             image: Project5,
//             github: "https://github.com/Keerthi-AI/MedConnect",
//             category: "ai",
//             skills: ["tensorflow", "python", "binary-classification", "medical-imaging", "healthcare"]
//         },
//         {
//             id: 6,
//             title: "FairCart: E-Commerce Platform",
//             description: "Designed and developed a unique review system that allows only one review per user per product, preventing spam and ensuring authenticity.",
//             image: Project6,
//             github: "https://github.com/Keerthi-AI/Ecommerce",
//             demo: "https://faircart-demo.vercel.app",
//             category: "web",
//             skills: ["react", "node", "mongodb", "authentication", "e-commerce"]
//         }
//     ];

//     // Filter categories
//     const categories = [
//         { id: 'all', label: 'All Projects' },
//         { id: 'ai', label: 'AI/ML' },
//         { id: 'nlp', label: 'NLP' },
//         { id: 'web', label: 'Web Development' }
//     ];

//     // Filter projects based on selected category
//     const filteredProjects = filter === 'all' 
//         ? projects 
//         : projects.filter(project => project.category === filter);

//     return (
//         <section id="projects" className="py-24 relative overflow-hidden">
//             {/* Background elements */}
//             <div className="absolute inset-0 bg-[var(--color-second)]/30"></div>
//             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-second)]/10"></div>
            
//             <div className="max-w-screen-xl mx-auto px-4 relative z-10">
//                 {/* Section header */}
//                 <motion.div 
//                     className="text-center mb-10"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//                         Recent Projects
//                     </h2>
//                     <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 mb-8"></div>
//                     <p className="text-amber-50/70 max-w-2xl mx-auto">
//                         Here are some of my recent projects
//                     </p>
//                 </motion.div>
                
//                 {/* Filter tabs */}
//                 <motion.div 
//                     className="flex flex-wrap justify-center gap-2 mb-10"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                     {categories.map(category => (
//                         <button
//                             key={category.id}
//                             className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
//                                 ${filter === category.id 
//                                     ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
//                                     : 'bg-[var(--color-second)] text-amber-50/70 hover:text-amber-50'}`}
//                             onClick={() => setFilter(category.id)}
//                         >
//                             <FontAwesomeIcon icon={faFilter} className="text-xs" />
//                             {category.label}
//                         </button>
//                     ))}
//                 </motion.div>

//                 {/* Projects grid */}
//                 <motion.div 
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     {filteredProjects.map(project => (
//                         <motion.div 
//                             key={project.id}
//                             variants={itemVariants}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
//                             <div className="bg-[var(--color-second)] rounded-xl overflow-hidden border border-[#576fa0]/30 h-full relative z-10 flex flex-col">
//                                 {/* Project image */}
//                                 <div className="relative overflow-hidden h-48">
//                                     <img 
//                                         src={project.image} 
//                                         alt={project.title} 
//                                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-second)] to-transparent opacity-60"></div>
                                    
//                                     {/* Category tag */}
//                                     <div className="absolute top-3 right-3 bg-[var(--color-bg)]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-amber-50 flex items-center gap-1">
//                                         <FontAwesomeIcon icon={faTag} className="text-xs" />
//                                         {project.category === 'ai' && 'AI/ML'}
//                                         {project.category === 'nlp' && 'NLP'}
//                                         {project.category === 'web' && 'Web Dev'}
//                                     </div>
//                                 </div>
                                
//                                 {/* Project content */}
//                                 <div className="p-6 flex flex-col flex-grow">
//                                     <h3 className="text-lg font-semibold text-amber-50 mb-2 line-clamp-2">{project.title}</h3>
//                                     <p className="text-amber-50/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    
//                                     {/* Skills tags */}
//                                     <div className="flex flex-wrap gap-2 mb-4 mt-auto">
//                                         {project.skills.slice(0, 3).map((skill, index) => (
//                                             <span 
//                                                 key={index}
//                                                 className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                         {project.skills.length > 3 && (
//                                             <span className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded">
//                                                 +{project.skills.length - 3} more
//                                             </span>
//                                         )}
//                                     </div>
                                    
//                                     {/* Project links */}
//                                     <div className="flex justify-between items-center mt-2">
//                                         <a 
//                                             href={project.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-amber-50/80 hover:text-[var(--color-main)] transition-colors"
//                                         >
//                                             <FontAwesomeIcon icon={faGithub} size="lg" />
//                                         </a>
                                        
//                                         {project.demo ? (
//                                             <a 
//                                                 href={project.demo}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-amber-50 rounded flex items-center gap-2 hover:from-blue-500/30 hover:to-purple-500/30 transition-colors"
//                                             >
//                                                 <span className="text-sm">View Demo</span>
//                                                 <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
//                                             </a>
//                                         ) : (
//                                             <span className="px-3 py-1 bg-[var(--color-bg)]/30 text-amber-50/50 text-sm rounded">
//                                                 Demo Unavailable
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
                
//                 {/* GitHub link */}
//                 <motion.div 
//                     className="flex justify-center mt-12"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8, duration: 0.5 }}
//                 >
//                     <a 
//                         href="https://github.com/Keerthi-AI"
//                         target="_blank"
//                         rel="noopener noreferrer" 
//                         className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 text-amber-50 rounded-full hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2 group"
//                     >
//                         <FontAwesomeIcon icon={faGithub} />
//                         <span>View More on GitHub</span>
//                         <motion.div
//                             className="ml-1"
//                             animate={{ x: [0, 5, 0] }}
//                             transition={{ 
//                                 duration: 1.5, 
//                                 repeat: Infinity,
//                                 repeatType: "loop",
//                                 ease: "easeInOut" 
//                             }}
//                         >
//                             <FontAwesomeIcon icon={faArrowRight} />
//                         </motion.div>
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }
// export default Project;


// 

// import React from 'react';
// import '../index.css';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faExternalLinkAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// // Project images - import your project images here
// import Project1 from '../assets/project-1.png'; 
// import Project2 from '../assets/images.png';
// import Project3 from '../assets/aa.jpg';
// import Project4 from '../assets/project-4.png';
// import Project5 from '../assets/project-5.png';
// import Project6 from '../assets/faircart.png';

// function Project() {
//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 30, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 12
//             }
//         }
//     };

//     // Project data
//     const projects = [
//         {
//             id: 1,
//             title: "Diabetic Foot Ulcer and Retinopathy Classification",
//             description: "Built a deep learning model using MobileNet and Vision Transformer for accurate DR and DFU classification.",
//             image: Project3,
//             github: "https://github.com/Keerthi-AI/medconnect",
//             skills: ["tensorflow", "python", "mobilenet", "vision-transformer", "healthcare"]
//         },
//         {
//             id: 2,
//             title: "Sticker Recommendation Using Sentimental Analysis",
//             description: "Created a multimodal sentiment analysis system (English & Tamil) using CNN and BERT for sticker suggestions.",
//             image: Project2,
//             github: "https://github.com/Keerthi-AI/sticker-recommendation",
//             skills: ["nlp", "python", "cnn", "bert", "multilingual", "sentiment-analysis"]
//         },
//         {
//             id: 3,
//             title: "Stock Market Prediction",
//             description: "Forecasted Bitcoin prices using LSTM and GRU. GRU performed better with lower MAE (18%).",
//             image: Project1,
//             github: "https://github.com/Keerthi-AI/Bitcoin_Prediction",
//             demo: "https://keerthi-ai.github.io/bitcoin-prediction-demo",
//             skills: ["python", "lstm", "gru", "finance", "time-series"]
//         },
//         {
//             id: 4,
//             title: "Enhanced Detection of Pulmonary Nodules",
//             description: "Used a custom CNN architecture to classify Oral Squamous Cell Carcinoma with 81% accuracy.",
//             image: Project4,
//             github: "https://github.com/Keerthi-AI/pulmonary-nodule-detection",
//             skills: ["python", "tensorflow", "cnn", "medical-imaging", "healthcare"]
//         },
//         {
//             id: 5,
//             title: "MedConnect",
//             description: "Developed a unified binary classifier to route input images to either the DR or DFU model for diagnosis.",
//             image: Project5,
//             github: "https://github.com/Keerthi-AI/MedConnect",
//             skills: ["tensorflow", "python", "binary-classification", "medical-imaging", "healthcare"]
//         },
//         {
//             id: 6,
//             title: "FairCart: E-Commerce Platform",
//             description: "Designed and developed a unique review system that allows only one review per user per product, preventing spam and ensuring authenticity.",
//             image: Project6,
//             github: "https://github.com/Keerthi-AI/Ecommerce",
//             demo: "https://faircart-demo.vercel.app",
//             skills: ["react", "node", "mongodb", "authentication", "e-commerce"]
//         }
//     ];

//     return (
//         <section id="projects" className="py-24 relative overflow-hidden">
//             {/* Background elements */}
//             <div className="absolute inset-0 bg-[var(--color-second)]/30"></div>
//             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-second)]/10"></div>
            
//             <div className="max-w-screen-xl mx-auto px-4 relative z-10">
//                 {/* Section header */}
//                 <motion.div 
//                     className="text-center mb-10"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//                         Recent Projects
//                     </h2>
//                     <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 mb-8"></div>
//                     <p className="text-amber-50/70 max-w-2xl mx-auto">
//                         Here are some of my recent projects spanning AI, machine learning, and web development.
//                     </p>
//                 </motion.div>

//                 {/* Projects grid */}
//                 <motion.div 
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     {projects.map(project => (
//                         <motion.div 
//                             key={project.id}
//                             variants={itemVariants}
//                             className="relative group"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
//                             <div className="bg-[var(--color-second)] rounded-xl overflow-hidden border border-[#576fa0]/30 h-full relative z-10 flex flex-col">
//                                 {/* Project image */}
//                                 <div className="relative overflow-hidden h-48">
//                                     <img 
//                                         src={project.image} 
//                                         alt={project.title} 
//                                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-second)] to-transparent opacity-60"></div>
//                                 </div>
                                
//                                 {/* Project content */}
//                                 <div className="p-6 flex flex-col flex-grow">
//                                     <h3 className="text-lg font-semibold text-amber-50 mb-2 line-clamp-2">{project.title}</h3>
//                                     <p className="text-amber-50/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    
//                                     {/* Skills tags */}
//                                     <div className="flex flex-wrap gap-2 mb-4 mt-auto">
//                                         {project.skills.slice(0, 3).map((skill, index) => (
//                                             <span 
//                                                 key={index}
//                                                 className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded"
//                                             >
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                         {project.skills.length > 3 && (
//                                             <span className="bg-[var(--color-bg)]/60 text-xs text-amber-50/80 px-2 py-1 rounded">
//                                                 +{project.skills.length - 3} more
//                                             </span>
//                                         )}
//                                     </div>
                                    
//                                     {/* Project links */}
//                                     <div className="flex justify-between items-center mt-2">
//                                         <a 
//                                             href={project.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="text-amber-50/80 hover:text-[var(--color-main)] transition-colors"
//                                         >
//                                             <FontAwesomeIcon icon={faGithub} size="lg" />
//                                         </a>
                                        
//                                         {project.demo ? (
//                                             <a 
//                                                 href={project.demo}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-amber-50 rounded flex items-center gap-2 hover:from-blue-500/30 hover:to-purple-500/30 transition-colors"
//                                             >
//                                                 <span className="text-sm">View Demo</span>
//                                                 <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
//                                             </a>
//                                         ) : (
//                                             <span className="px-3 py-1 bg-[var(--color-bg)]/30 text-amber-50/50 text-sm rounded">
//                                                 Demo Unavailable
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
                
//                 {/* GitHub link */}
//                 <motion.div 
//                     className="flex justify-center mt-12"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8, duration: 0.5 }}
//                 >
//                     <a 
//                         href="https://github.com/Keerthi-AI"
//                         target="_blank"
//                         rel="noopener noreferrer" 
//                         className="px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 text-amber-50 rounded-full hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2 group"
//                     >
//                         <FontAwesomeIcon icon={faGithub} />
//                         <span>View More on GitHub</span>
//                         <motion.div
//                             className="ml-1"
//                             animate={{ x: [0, 5, 0] }}
//                             transition={{ 
//                                 duration: 1.5, 
//                                 repeat: Infinity,
//                                 repeatType: "loop",
//                                 ease: "easeInOut" 
//                             }}
//                         >
//                             <FontAwesomeIcon icon={faArrowRight} />
//                         </motion.div>
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default Project;