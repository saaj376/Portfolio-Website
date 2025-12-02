'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Github, Linkedin, Mail, Terminal as TerminalIcon, Heart } from 'lucide-react'
import MatrixBackground from './matrix-background'
import AboutSection from './about-section'
import ContactSection from './contact-section'
import ProjectsSection from './project-section'
import ExperienceSection from './experience-section'

// --- Types ---
interface CommandEntry {
  command: string
  output: React.ReactNode
}

// --- CONSTANT: The Initial "Welcome" State ---
const INITIAL_HISTORY: CommandEntry[] = [
  { 
    command: 'whoami', 
    output: (
      <div className="text-4xl md:text-6xl font-bold text-blue-400 my-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">
        Saajan P Varghese
      </div>
    ) 
  },
  {
    command: 'cat role.txt',
    output: <div className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">{'>> A budding SWE'}</div>
  },
  { 
    command: 'cat description.txt', 
    output: (
      <div className="max-w-2xl text-gray-400 leading-relaxed mb-6 border-l-2 border-blue-800 pl-4">
        I write code that transforms caffeine into features. <br/>
        Specializing in web development, system design, <br/>
        and turning 0s and 1s into meaningful experiences.
      </div>
    )
  },
]

// --- Navbar Component ---
const Navbar = () => {
  const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 font-mono text-sm bg-black/80 backdrop-blur-md border-b border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
      
      {/* Clickable Logo */}
      <a 
        href="#home" 
        onClick={(e) => handleNavClick(e, '#home')}
        className="flex items-center gap-2 text-blue-400 font-bold text-lg drop-shadow-[0_0_5px_rgba(59,130,246,0.8)] hover:text-blue-300 transition-colors cursor-pointer group"
      >
        <TerminalIcon size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
        <span className="tracking-wider">./portfolio</span>
      </a>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-blue-300/70 hover:text-blue-400 transition-all uppercase tracking-widest text-xs group relative py-1"
          >
            <span className="group-hover:text-blue-200 transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">
              <span className="text-blue-500/50 group-hover:text-blue-400">[</span>
              {link.name}
              <span className="text-blue-500/50 group-hover:text-blue-400">]</span>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default function PortfolioTerminal() {
  const [history, setHistory] = useState<CommandEntry[]>(INITIAL_HISTORY)
  const [currentCommand, setCurrentCommand] = useState('')
  const scrollableRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = ''

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-4 max-w-sm text-gray-300">
            <span className="text-blue-400">about</span> <span>View Bio & Skills</span>
            <span className="text-blue-400">experience</span> <span>View Experience</span>
            <span className="text-blue-400">projects</span> <span>View Projects</span>
            <span className="text-blue-400">contact</span> <span>Open Contact Channel</span>
            <span className="text-blue-400">clear</span> <span>Reset Terminal</span>
          </div>
        )
        break
      
      case 'about':
        output = <span className="text-blue-300">{'>> Executing about_me.md...'}</span>;
        setTimeout(() => scrollToSection('about'), 500);
        break;
      
      case 'experience':
        output = <span className="text-blue-300">{'>> Accessing career_log.txt...'}</span>;
        setTimeout(() => scrollToSection('experience'), 500);
        break;
      
      case 'projects':
        output = <span className="text-blue-300">{'>> Accessing project_directory...'}</span>;
        setTimeout(() => scrollToSection('projects'), 500);
        break;

      case 'contact':
        output = <span className="text-blue-300">{'>> Opening secure communication channel...'}</span>;
        setTimeout(() => scrollToSection('contact'), 500);
        break;
        
      case 'clear':
        setHistory(INITIAL_HISTORY);
        return; 

      default:
        output = <span className="text-red-400">Command not found: {cmd}. Type 'help'.</span>
    }

    setHistory(prev => [...prev, { command: cmd, output }])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand)
      setCurrentCommand('')
    }
  }

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [history])

  const handleTerminalClick = () => inputRef.current?.focus()

  return (
    <div className="min-h-screen relative font-mono selection:bg-blue-900 selection:text-white pb-20 overflow-x-hidden w-full">
      
      <MatrixBackground />
      <div className="fixed inset-0 bg-black/80 -z-10"></div>

      <Navbar />

      <main className="container mx-auto px-4 md:px-10">
        
        {/* --- HERO SECTION (TERMINAL) --- */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div 
            className="relative w-full max-w-5xl bg-black/90 rounded-lg border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col"
            onClick={handleTerminalClick}
          >
            <div className="bg-gray-900/50 px-4 py-2 flex items-center gap-2 border-b border-blue-500/20 shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs text-blue-700 font-semibold tracking-wider">portfolio.sh</div>
            </div>

            <div 
              ref={scrollableRef}
              className="p-6 md:p-10 h-[60vh] overflow-y-auto" 
              style={{ scrollbarWidth: 'thin' }}
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-2 text-sm md:text-base opacity-70 mb-1">
                    <span className="text-blue-600">$</span>
                    <span className="text-gray-300">{entry.command}</span>
                  </div>
                  <div className="ml-4 md:ml-6 text-blue-500 w-full">
                    {entry.output}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 mt-4">
                 <span className="text-blue-500 animate-pulse">{'>'}</span>
                 <input 
                   ref={inputRef}
                   type="text" 
                   value={currentCommand}
                   onChange={(e) => setCurrentCommand(e.target.value)}
                   onKeyDown={handleKeyDown}
                   className="bg-transparent outline-none text-blue-400 w-full placeholder-blue-800/50"
                   placeholder="Type 'help'..."
                   autoFocus
                 />
              </div>
            </div>

            <div className="p-4 border-t border-blue-900/30 flex items-center gap-4 shrink-0 bg-black/50">
               <button 
                  onClick={() => executeCommand('contact')}
                  className="px-4 py-1.5 border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-black transition-all flex items-center gap-2"
               >
                 ./contact --init
               </button>
               <div className="flex gap-4 text-blue-700">
                 <a href="https://github.com/saaj376" target="_blank" className="hover:text-blue-400 transition-colors"><Github size={18}/></a>
                 <a href="https://www.linkedin.com/in/saajanvarghese376/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={18}/></a>
                 <a href="mailto:saajan.varghese.2006@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={18}/></a>
               </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
           <h2 className="text-4xl font-bold text-blue-500 mb-8 border-b border-blue-900/30 pb-4 inline-block w-full font-mono">
             ./about
           </h2>
           <AboutSection />
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="min-h-screen flex flex-col justify-center py-20 border-t border-blue-900/30">
          <h2 className="text-4xl font-bold text-blue-500 mb-8 border-b border-blue-900/30 pb-4 inline-block w-full font-mono">
            ./experience
          </h2>
          <ExperienceSection />
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 border-t border-blue-900/30">
          <h2 className="text-4xl font-bold text-blue-500 mb-12 font-mono border-b border-blue-900/30 pb-4 inline-block w-full">
            ./projects
          </h2>
          <ProjectsSection />
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="min-h-screen flex flex-col justify-center py-20 border-t border-blue-900/30">
          <h2 className="text-4xl font-bold text-blue-500 mb-8 border-b border-blue-900/30 pb-4 inline-block w-full font-mono">
            ./contact
          </h2>
          <ContactSection />
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center py-8 text-blue-500/40 text-xs md:text-sm font-mono border-t border-blue-900/30">
          <p className="flex items-center justify-center gap-2">
            &copy; 2025 <span className="text-blue-800">|</span> Made with
            <Heart size={14} className="fill-blue-500/50 text-blue-500 animate-pulse" />
            by Saajan
          </p>
        </footer>

      </main>
    </div>
  )
}