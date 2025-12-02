'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Github, ExternalLink, Terminal, Cpu, Code, ChevronRight, ChevronLeft, FolderGit2 } from 'lucide-react'

// --- Project Data Interface ---
interface Project {
  title: string
  githubLink: string
  description: string[]
  tools: string[]
  version: string
}

// --- Project Data ---
const projects: Project[] = [
  {
    title: "JobGenie.AI: An AI assistant for your career",
    githubLink: "https://github.com/saaj376/JobGenie.AI", 
    version: "v1.2.0-beta",
    description: [
      "Developed a chatbot using Streamlit and Gemini API to assist users with job-related queries.",
      "Optimized resumes with up to 37% improved relevance based on job descriptions and returned them as PDFs.",
      "Generated role-specific interview questions along with suggested answers.",
      "Focused on enhancing job application success through AI-driven personalization."
    ],
    tools: ["Streamlit", "Python", "Gemini API", "VS Code", "Grok"]
  },
  {
    title: "LeetSearch - A LeetCode Chrome Extension",
    githubLink: "https://github.com/saaj376/LeetSearch", 
    version: "v1.0.0",
    description: [
      "Easy-to-use browser extension interface with search and filter capabilities.",
      "Compare and discover coding activity within your campus community.",
      "Uses GraphQL LeetCode schema to perform scraping for real-time data.",
      "FastAPI-powered backend with comprehensive endpoints for data access."
    ],
    tools: ["Python", "Flask", "GraphQL", "JavaScript", "HTML", "CSS", "Web Scraping"]
  },
  {
    title: "PyVox - Voice First Text Based IDE",
    githubLink: "https://github.com/saaj376/PyVox", 
    version: "v0.9.5-alpha",
    description: [
      "Developed a minimal Python IDE with voice and chat command support for file handling and code execution.",
      "Built with Tkinter and integrated speech recognition for natural commands like “save file” and “run file”.",
      "Improved productivity by eliminating manual inputs, making it accessible and beginner-friendly.",
      "Supports continuous voice input and multi-modal control for a seamless coding experience."
    ],
    tools: ["Python", "Tkinter", "SpeechRecognition", "Vosk API", "Pyttsx3", "OS", "Subprocess"]
  },
  {
    title: "JumpTube - AI-Powered YouTube Navigator",
    githubLink: "https://github.com/saaj376/JumpTube", 
    version: "v2.0.1-stable",
    description: [
      "Developed an AI-powered YouTube assistant for searching, summarizing, and transcribing videos using NLP.",
      "Integrated real-time video analysis pipeline with Python (Flask), YouTube Data API, and Whisper model, reducing latency by 40%.",
      "Implemented intelligent keyword detection.",
      "Incorporated a keyword jump feature to instantly skip to specific topics within a video."
    ],
    tools: ["Python", "Flask", "ffmpeg", "YT-DLP", "Typescript", "Gemini API", "Whisper"]
  }
]

// --- Reusable Badge Component ---
const ToolBadge = ({ name }: { name: string }) => (
  <span className="px-2 py-1 text-[10px] md:text-xs rounded border border-blue-500/40 bg-blue-900/20 text-blue-300 font-mono shadow-[0_0_5px_rgba(59,130,246,0.2)] hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:border-blue-400 hover:text-blue-100 transition-all cursor-default whitespace-nowrap">
    {name}
  </span>
);

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to toggle arrows
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      setTimeout(checkScroll, 100); 
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // REMOVED: The useEffect that was hijacking the 'wheel' event.
  // Now vertical scrolling works naturally.

  return (
    <div className="relative mt-8 group/container">
      
      {/* --- Navigation Arrows --- */}
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-[55%] -translate-y-1/2 z-30 bg-black/80 border border-blue-500/50 text-blue-400 p-3 rounded-full hover:bg-blue-900/30 hover:text-blue-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-[55%] -translate-y-1/2 z-30 bg-black/80 border border-blue-500/50 text-blue-400 p-3 rounded-full hover:bg-blue-900/30 hover:text-blue-200 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* --- Scroll Container --- */}
      <div 
        ref={scrollContainerRef}
        className="relative flex flex-col md:flex-row md:overflow-x-auto pb-24 gap-8 md:gap-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        
        {/* Horizontal Line (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-0 h-0.5 bg-blue-900/50 border-t border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)] min-w-full -z-10"></div>

        {/* --- Render Projects --- */}
        {projects.map((project, index) => (
          <div key={index} className="relative flex-none w-full md:w-[600px] snap-center px-4 md:px-8 group">
            
            {/* Timeline Line Segments */}
            {index > 0 && (
              <div className="hidden md:block absolute top-[40px] left-[-2rem] right-1/2 h-0.5 bg-blue-500 border-t border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] -z-10 w-[calc(50%+2rem)]"></div>
            )}
            <div className="hidden md:block absolute top-[40px] left-1/2 h-0.5 bg-blue-500 border-t border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] -z-10 w-[calc(50%+2rem)]"></div>

            {/* Timeline Node */}
            <div className="hidden md:flex absolute top-[26px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 items-center justify-center transition-transform group-hover:scale-110 duration-300">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            {/* Vertical Connector */}
            <div className="hidden md:block absolute top-[56px] left-1/2 h-8 w-0.5 bg-blue-500 -translate-x-1/2 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>

            {/* Project Card */}
            <div className="mt-0 md:mt-20 border border-blue-500/30 rounded-lg bg-black/80 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm overflow-hidden hover:border-blue-500/60 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] h-full flex flex-col relative pb-2">
              
              <div className="flex items-center justify-between px-4 py-2 border-b border-blue-500/30 bg-blue-900/20 shrink-0">
                <div className="flex items-center gap-3">
                  <Terminal size={16} className="text-blue-400" />
                  <span className="font-mono text-sm text-blue-300/90 tracking-wide truncate max-w-[200px]">
                    ./{project.title.split(':')[0].trim().replace(/\s+/g, '_').toLowerCase()}.sh
                  </span>
                </div>
                <span className="font-mono text-xs text-blue-500/70">{project.version}</span>
              </div>

              <div className="p-6 space-y-5 relative flex-1 flex flex-col">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] opacity-[0.15]"></div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-blue-400 font-mono leading-tight">
                    <span className="text-blue-600 mr-2">{'>'}</span> {project.title}
                  </h3>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs md:text-sm text-blue-500 hover:text-blue-300 transition-colors font-mono border border-blue-500/30 px-3 py-1.5 rounded-md hover:bg-blue-900/20 w-fit shrink-0 z-20"
                  >
                    <Github size={14} />
                    <span>Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <ul className="space-y-2 text-gray-400 font-mono text-xs md:text-sm leading-relaxed flex-1">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">
                        <Code size={12} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-blue-900/30 mt-auto">
                  <h4 className="text-xs font-bold text-blue-400 mb-3 font-mono flex items-center">
                    <Cpu size={14} className="mr-2" /> Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <ToolBadge key={i} name={tool} />
                    ))}
                  </div>
                </div>
              </div>

              {/* === UNIFORM NEON BOTTOM LINE === */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,1)] z-50"></div>

            </div>
          </div>
        ))}

        {/* --- VIEW MORE ON GITHUB CARD --- */}
        <div className="relative flex-none w-full md:w-[600px] snap-center px-4 md:px-8 group">
          
          {/* Timeline Line Segment */}
          <div className="hidden md:block absolute top-[40px] left-[-2rem] right-1/2 h-0.5 bg-blue-500 border-t border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] -z-10 w-[calc(50%+2rem)]"></div>

          {/* End Node */}
          <div className="hidden md:flex absolute top-[26px] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>

          <div className="hidden md:block absolute top-[56px] left-1/2 h-8 w-0.5 bg-blue-500 -translate-x-1/2 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>

          <div className="mt-0 md:mt-20 border border-blue-500/30 rounded-lg bg-blue-900/5 hover:bg-blue-900/10 transition-all h-full flex flex-col items-center justify-center text-center p-8 group-hover:border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden pb-2">
             
             <FolderGit2 size={48} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
             
             <h3 className="text-2xl font-bold text-blue-400 font-mono mb-2">More Archives</h3>
             <p className="text-gray-400 text-sm mb-8 font-mono max-w-[200px]">
               Explore the rest of my repositories and experimental code.
             </p>

             <a 
               href="https://github.com/saaj376"
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-black font-bold font-mono rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center gap-2"
             >
               <Github size={20} />
               View on GitHub
             </a>

             {/* === UNIFORM NEON BOTTOM LINE === */}
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,1)] z-50"></div>
          </div>
        </div>
        
        {/* Spacer for right padding */}
        <div className="hidden md:block w-12 flex-none"></div>
      </div>
    </div>
  )
}