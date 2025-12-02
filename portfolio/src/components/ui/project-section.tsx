'use client'

import { Github, ExternalLink, Terminal, Cpu, Code } from 'lucide-react'

// --- Project Data Interface ---
interface Project {
  title: string
  githubLink: string
  description: string[]
  tools: string[]
  version: string // Just for the terminal header effect
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
    title: "PyVox - An AI Powered voice first text based IDE",
    githubLink: "https://github.com/saaj376/PyVox", 
    version: "v0.9.5-alpha",
    description: [
      "Developed a minimal Python IDE with voice and chat command support for file handling and code execution.",
      "Built with Tkinter and integrated speech recognition for natural commands like “save file” and “run file”.",
      "Improved productivity by eliminating manual inputs, making it accessible and beginner-friendly.",
      "Supports continuous voice input and multi-modal control for a seamless coding experience."
    ],
    tools: ["Python", "Tkinter", "SpeechRecognition", "Vosk API", "Pyttsx3", "OS", "Subprocess", "Threading"]
  },
  {
    title: "JumpTube - AI-Powered YouTube Navigator",
    githubLink: "https://github.com/saaj376/JumpTube", 
    version: "v2.0.1-stable",
    description: [
      "Developed an AI-powered YouTube assistant for searching, summarizing, and transcribing videos using NLP.",
      "Integrated real-time video analysis pipeline with Python (Flask), YouTube Data API, and Whisper model, reducing latency by 40%.",
      "Implemented intelligent keyword detection and summarization for higher retrieval accuracy.",
      "Incorporated a keyword jump feature to instantly skip to specific topics within a video."
    ],
    tools: ["Python", "Flask", "ffmpeg", "YT-DLP", "Typescript", "Gemini API", "Whisper"]
  }
]

// --- Reusable Badge Component ---
const ToolBadge = ({ name }: { name: string }) => (
  <span className="px-2 py-1 text-xs rounded border border-blue-500/40 bg-blue-900/20 text-blue-300 font-mono shadow-[0_0_5px_rgba(59,130,246,0.2)] hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:border-blue-400 hover:text-blue-100 transition-all cursor-default">
    {name}
  </span>
);

export default function ProjectsSection() {
  return (
    <div className="relative mt-12 py-10">
      {/* --- Central Timeline Line --- */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-900/50 border-l border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)] transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* --- Timeline Node/Dot --- */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            {/* --- Spacer for alternate sides on desktop --- */}
            <div className="hidden md:block w-1/2" />

            {/* --- Project Card (Terminal Style) --- */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} border border-blue-500/30 rounded-lg bg-black/60 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm overflow-hidden hover:border-blue-500/60 transition-all group`}>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-blue-500/30 bg-blue-900/20">
                <div className="flex items-center gap-3">
                  <Terminal size={16} className="text-blue-400" />
                  <span className="font-mono text-sm text-blue-300/90 tracking-wide">EXEC: {project.title.split(':')[0].trim().replace(/\s+/g, '_')}.sh</span>
                </div>
                <span className="font-mono text-xs text-blue-500/70">{project.version}</span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6 relative">
                 {/* Scanline overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] opacity-[0.15]"></div>

                {/* Title & Link */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-blue-400 font-mono flex items-center">
                    <span className="text-blue-600 mr-2">{'>'}</span> {project.title}
                  </h3>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-300 transition-colors font-mono border border-blue-500/30 px-3 py-1 rounded-md hover:bg-blue-900/20 w-fit shrink-0"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-3 text-gray-400 font-mono text-sm leading-relaxed">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1 shrink-0">
                        <Code size={12} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools Used */}
                <div>
                  <h4 className="text-sm font-bold text-blue-400 mb-3 font-mono flex items-center">
                    <Cpu size={16} className="mr-2" /> Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <ToolBadge key={i} name={tool} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}