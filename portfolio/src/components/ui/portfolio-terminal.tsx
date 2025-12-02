'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import MatrixBackground from './matrix-background'

// --- Types ---
interface CommandEntry {
  command: string
  output: React.ReactNode
}

// --- Navbar Component ---
const Navbar = () => {
  const navLinks = [
    { name: 'home', href: '#' },
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 font-mono text-sm bg-black/80 backdrop-blur-sm border-b border-blue-900/30">
      <div className="flex items-center gap-2 text-blue-500 font-bold text-lg">
        <span className="text-blue-400">{'>_'}</span> ./portfolio
      </div>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-gray-500 hover:text-blue-400 transition-colors uppercase tracking-widest text-xs hover:shadow-[0_0_10px_rgba(96,165,250,0.5)]"
          >
            [{link.name}]
          </a>
        ))}
      </div>
    </nav>
  )
}

// --- Main Terminal Component ---
export default function PortfolioTerminal() {
  const [history, setHistory] = useState<CommandEntry[]>([
    { 
      command: 'whoami', 
      output: <div className="text-4xl md:text-6xl font-bold text-blue-400 my-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">John_Doe</div> 
    },
    { 
      command: 'cat role.txt', 
      output: <div className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">{">>"} Full Stack Developer</div> 
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
  ])
  
  const [currentCommand, setCurrentCommand] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // -- Commands Logic --
  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = ''

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-4 max-w-sm text-gray-300">
            <span className="text-blue-400">about</span> <span>Who am I?</span>
            <span className="text-blue-400">experience</span> <span>My career</span>
            <span className="text-blue-400">projects</span> <span>My work</span>
            <span className="text-blue-400">contact</span> <span>Email me</span>
          </div>
        )
        break
      case 'about':
        output = "Name: John Doe | Status: Online | Location: Cyberspace"
        break
      case 'experience':
        output = (
          <div className="space-y-4 text-gray-300">
             <div>
                <div className="text-blue-400 font-bold">2023 - Present | Senior Developer @ TechCorp</div>
                <div className="text-sm opacity-80 pl-4 border-l border-blue-900 ml-1">
                  Led migration to React 18, improved performance by 40%.
                </div>
             </div>
             <div>
                <div className="text-blue-400 font-bold">2020 - 2023 | Full Stack Dev @ Startup Inc</div>
                <div className="text-sm opacity-80 pl-4 border-l border-blue-900 ml-1">
                  Built MVP from scratch using Next.js and Node.js.
                </div>
             </div>
          </div>
        )
        break
      case 'projects':
        output = (
          <div className="space-y-2 text-gray-300">
            <div><span className="text-blue-400 font-bold">Portfolio</span> • React, Tailwind, Vite</div>
            <div><span className="text-blue-400 font-bold">E-Commerce</span> • Next.js, Stripe, Prisma</div>
            <div><span className="text-blue-400 font-bold">Chat App</span> • Socket.io, Express, React</div>
          </div>
        )
        break
      case 'contact':
        output = (
          <div className="flex gap-4 mt-2">
            <a href="#" className="flex items-center gap-2 hover:text-blue-300"><Github size={16}/> GitHub</a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-300"><Linkedin size={16}/> LinkedIn</a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-300"><Mail size={16}/> Email</a>
          </div>
        )
        break
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

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Focus input on click
  const focusInput = () => inputRef.current?.focus()

  return (
    <div className="min-h-screen relative font-mono selection:bg-blue-900 selection:text-white" onClick={focusInput}>
      
      <MatrixBackground />
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <Navbar />

      <main className="pt-24 pb-10 px-4 md:px-10 container mx-auto">
        <div className="relative w-full max-w-5xl mx-auto bg-black/90 rounded-lg border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
          
          {/* Window Header */}
          <div className="bg-gray-900/50 px-4 py-2 flex items-center gap-2 border-b border-blue-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-blue-500/80" />
            </div>
            <div className="ml-4 text-xs text-blue-700 font-semibold tracking-wider">portfolio.sh</div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-10 min-h-[60vh] overflow-y-auto">
            
            {history.map((entry, i) => (
              <div key={i} className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-2 text-sm md:text-base opacity-70 mb-1">
                  <span className="text-blue-600">$</span>
                  <span className="text-gray-300">{entry.command}</span>
                </div>
                <div className="ml-4 md:ml-6 text-blue-500">
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
            
            <div ref={bottomRef} />
          </div>

          {/* Bottom Action Bar */}
          <div className="p-4 border-t border-blue-900/30 flex items-center gap-4">
             <button 
                onClick={() => executeCommand('contact')}
                className="px-4 py-1.5 border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-black transition-all flex items-center gap-2"
             >
               ./contact --init
             </button>
             <div className="flex gap-4 text-blue-700">
               <Github size={18} className="hover:text-blue-400 cursor-pointer transition-colors"/>
               <Linkedin size={18} className="hover:text-blue-400 cursor-pointer transition-colors"/>
               <Mail size={18} className="hover:text-blue-400 cursor-pointer transition-colors"/>
             </div>
          </div>

        </div>
      </main>
    </div>
  )
}