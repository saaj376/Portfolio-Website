'use client'


import { Calendar, ArrowRight, Download, Terminal, Radio } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <div className="relative mt-8 font-mono animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900/50 border-l border-blue-500/30"></div>

      <div className="space-y-12 relative">
        
        {/* --- CARD: OPEN TO OPPORTUNITIES --- */}
        <div className="relative pl-12 group">
          
          {/* Timeline Node (Pulsing Blue) */}
          <div className="absolute left-[6px] top-6 w-5 h-5 bg-black rounded-full border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <div className="border border-blue-500/30 bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:border-blue-500/60 transition-all">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-4 border-b border-blue-500/20 bg-blue-900/10">
              <div className="flex items-center gap-3">
                <Radio size={18} className="text-blue-400 animate-pulse" />
                <h3 className="text-xl font-bold text-blue-400 tracking-wide">OPEN TO NEW OPPORTUNITIES</h3>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-blue-500/70">
                <span className="px-2 py-1 border border-blue-500/30 rounded bg-blue-900/20">Full Time</span>
                <span className="px-2 py-1 border border-blue-500/30 rounded bg-blue-900/20">Freelance</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> Present
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-300 leading-relaxed mb-6">
                I am currently looking for roles as a <span className="text-blue-400 font-bold">Software Engineering Intern</span> or <span className="text-blue-400 font-bold">AI Engineering Intern</span>. 
                I bring a strong foundation in modern web technologies and a passion for building scalable, user-centric applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 border border-blue-500/20 rounded bg-blue-900/5">
                  <h4 className="text-blue-400 text-xs mb-2 uppercase tracking-wider font-bold">What I Bring</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> Rapid Prototyping & Development</li>
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> Clean, Maintainable Code</li>
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> AI/LLM Integration Experience</li>
                  </ul>
                </div>
                <div className="p-3 border border-blue-500/20 rounded bg-blue-900/5">
                  <h4 className="text-blue-400 text-xs mb-2 uppercase tracking-wider font-bold">Preferred Roles</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> Frontend Developer (React/Next.js)</li>
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> Backend Developer (Python/Node)</li>
                    <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-blue-500"/> AI Solutions Engineer</li>
                  </ul>
                </div>
              </div>

              {/* Action Button (Resume) */}
              <a 
                href="/RenderCV_sb2nov_Theme.pdf" 
                download="Saajan_Varghese_Resume.pdf"
                className="group flex items-center gap-3 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-black font-bold font-mono rounded shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all w-fit"
              >
                <Terminal size={16} />
                <span>./download_resume.sh</span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
