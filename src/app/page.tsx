"use client";

import { useState } from "react";
import Header from "./components/shared/Header";
import Navigation from "./components/shared/Navigation";
import SocialLinks from "./components/shared/SocialLinks";
import SeveranceTransition from "./components/SeveranceTransition";

// Work mode components
import WorkAbout from "./components/work/WorkAbout";
import WorkExperience from "./components/work/WorkExperience";
import WorkEducation from "./components/work/WorkEducation";
import WorkProjects from "./components/work/WorkProjects";

// Personal mode components
import PersonalAbout from "./components/personal/PersonalAbout";
import PersonalExperience from "./components/personal/PersonalExperience";
import PersonalEducation from "./components/personal/PersonalEducation";
import PersonalProjects from "./components/personal/PersonalProjects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mode, setMode] = useState<'work' | 'personal'>('work');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMode = () => {
    // Start transition
    setIsTransitioning(true);
    
    // Wait for transition animation, then switch mode
    setTimeout(() => {
      setMode(mode === 'work' ? 'personal' : 'work');
      // Reset to about section when switching modes
      setActiveSection('about');
      
      // End transition after mode switch
      setTimeout(() => {
        setIsTransitioning(false);
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    }, 1500);
  };

  // Background color changes based on mode
  const bgColor = mode === 'work' ? 'bg-gray-900' : 'bg-gray-900';
  const rightBgColor = mode === 'work' ? 'bg-gray-800' : 'bg-gray-850';

  return (
    <main className={`flex h-screen overflow-hidden ${bgColor} transition-colors duration-500`}>
      {/* Severance Transition Overlay */}
      <SeveranceTransition isTransitioning={isTransitioning} mode={mode} />
      
      {/* LEFT HALF - Fixed */}
      <div className={`w-1/2 flex flex-col justify-between p-12 ${bgColor} text-white transition-colors duration-500`}>
        {/* Top Section */}
        <div>
          <Header mode={mode} onToggle={toggleMode} />
          <Navigation 
            activeSection={activeSection} 
            onNavigate={scrollToSection}
            mode={mode}
          />
        </div>

        {/* Bottom Section - Social Icons */}
        <SocialLinks mode={mode} />
      </div>

      {/* RIGHT HALF - Scrollable */}
      <div className={`w-1/2 overflow-y-auto ${rightBgColor} transition-colors duration-500`}>
        <div className="p-12 space-y-24">
          {/* Render different components based on mode */}
          {mode === 'work' ? (
            <>
              <WorkAbout />
              <WorkExperience />
              <WorkEducation />
              <WorkProjects />
            </>
          ) : (
            <>
              <PersonalAbout />
              <PersonalExperience />
              <PersonalEducation />
              <PersonalProjects />
            </>
          )}

          {/* Footer */}
          <footer className="py-12 border-t border-gray-700">
            <p className="text-gray-400 text-center">
              © 2025 Your Name. Built with Next.js and Tailwind CSS.
              <br />
              <span className="text-sm">
                {mode === 'work' ? '💼 professional' : '🎨 personal'}
              </span>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}