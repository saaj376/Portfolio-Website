'use client'

import { Mail, Github, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 items-start">
      
      {/* --- LEFT SIDE: Terminal Form --- */}
      <div className="border border-blue-500/30 rounded-lg bg-black/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm overflow-hidden">
        
        {/* Window Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-500/30 bg-blue-900/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 font-mono text-sm text-blue-300/90 tracking-wide">send_message.sh</span>
        </div>

        {/* Form Content */}
        <form className="p-6 space-y-6 font-mono" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-blue-400 text-sm flex items-center gap-2">
              <span className="text-blue-600">$</span> name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full bg-black/50 border border-blue-900/60 rounded px-4 py-3 text-blue-100 placeholder-blue-900/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-blue-400 text-sm flex items-center gap-2">
              <span className="text-blue-600">$</span> email
            </label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full bg-black/50 border border-blue-900/60 rounded px-4 py-3 text-blue-100 placeholder-blue-900/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="text-blue-400 text-sm flex items-center gap-2">
              <span className="text-blue-600">$</span> message
            </label>
            <textarea 
              rows={4}
              placeholder="Type your message here..."
              className="w-full bg-black/50 border border-blue-900/60 rounded px-4 py-3 text-blue-100 placeholder-blue-900/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full group bg-blue-600 hover:bg-blue-500 text-black font-bold py-3 px-6 rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            Send Message
          </button>

        </form>
      </div>

      {/* --- RIGHT SIDE: Contact Info --- */}
      <div className="flex flex-col justify-between h-full space-y-8">
        
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center font-mono">
            <span className="mr-2 text-blue-600">{'>'}</span> Get In Touch
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          
          {/* Email Card */}
          <a 
            href="mailto:saajan.varghese.2006@gmail.com"
            className="block p-4 border border-blue-900/40 bg-blue-900/5 rounded hover:bg-blue-900/10 hover:border-blue-500/40 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-blue-600 font-mono mb-1">Email</div>
                <div className="text-gray-300 text-sm break-all">saajan.varghese.2006@gmail.com</div>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/saaj376" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 border border-blue-900/40 bg-blue-900/5 rounded hover:bg-blue-900/10 hover:border-blue-500/40 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all">
                <Github size={20} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-blue-600 font-mono mb-1">GitHub</div>
                <div className="text-gray-300 text-sm">github.com/saaj376</div>
              </div>
              <ExternalLink size={16} className="text-blue-900 group-hover:text-blue-400 transition-colors" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/saajanvarghese376/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 border border-blue-900/40 bg-blue-900/5 rounded hover:bg-blue-900/10 hover:border-blue-500/40 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all">
                <Linkedin size={20} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-blue-600 font-mono mb-1">LinkedIn</div>
                <div className="text-gray-300 text-sm">linkedin.com/in/saajanvarghese376</div>
              </div>
              <ExternalLink size={16} className="text-blue-900 group-hover:text-blue-400 transition-colors" />
            </div>
          </a>

        </div>

        {/* Location / Status */}
        <div className="pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm font-mono">
           <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} className="text-blue-500" />
              Chennai, India
           </div>
           <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/20 rounded-full border border-blue-500/20">
              <span className="text-blue-300">status:</span>
              <span className="text-green-400 flex items-center gap-2">
                 Open to work
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
              </span>
           </div>
        </div>

      </div>
    </div>
  )
}