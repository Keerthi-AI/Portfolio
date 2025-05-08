import React, { useState, useEffect } from 'react';
import '../index.css';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    // State for scroll direction
    const [scrollDirection, setScrollDirection] = useState("up");
    // State for active section
    const [activeSection, setActiveSection] = useState("home");
    
    // Handle scroll direction
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            
            // Update active section based on scroll position
            const sections = ['home', 'about', 'projects', 'contact'];
            const sectionElements = sections.map(id => document.getElementById(id));
            
            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const section = sectionElements[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, [scrollDirection]);
    
    // Menu items with their labels and links
    const menuItems = [
        { id: 'home', label: 'Home', link: '#' },
        { id: 'about', label: 'About', link: '#about' },
        { id: 'projects', label: 'Projects', link: '#projects' },
        { id: 'contact', label: 'Contact', link: '#contact' }
    ];

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ 
                    opacity: 1, 
                    y: scrollDirection === "down" ? -100 : 0
                }}
                transition={{  
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className='fixed top-0 left-0 right-0 z-50 flex justify-center w-full backdrop-blur-sm'>
                <div className='mt-4 md:mt-6 rounded-xl max-w-7xl w-full px-4'>
                    <nav className='flex justify-between items-center h-16 rounded-xl px-4 sm:px-6 bg-[#111927]/90 border border-[#576fa0]/30 shadow-lg' role='navigation'>
                        {/* Logo */}
                        <div className="flex items-center">
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mr-2"
                            >
                                <FontAwesomeIcon icon={faCode} />
                            </motion.div>
                            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden sm:block">Keerthinathan</span>
                        </div>
                        
                        {/* Navigation Links */}
                        <ul className='flex items-center gap-2 sm:gap-6 text-white'>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a 
                                        href={item.link} 
                                        className={`relative px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base transition-colors hover:text-[var(--color-main)] ${activeSection === item.id ? 'text-[var(--color-main)]' : 'text-white/80'}`}
                                    >
                                        {item.label}
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Navbar;