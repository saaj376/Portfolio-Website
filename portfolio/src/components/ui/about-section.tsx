'use client'


import { Code, Globe, Database, Cpu } from 'lucide-react'

// --- Skills Data ---
const skills = {
  languages: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express', 'Flask', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase'],
  tools: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Figma', 'LangChain', 'TensorFlow', 'Pandas', 'NumPy']
};

// --- Skill Badge Component ---
const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1.5 rounded border border-blue-500/40 bg-blue-900/20 text-blue-300 text-sm font-medium shadow-[0_0_5px_rgba(59,130,246,0.2)] hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:border-blue-400 hover:text-blue-100 transition-all duration-300 cursor-default pointer-events-auto">
    {name}
  </span>
);

export default function AboutSection() {
  return (
    // Added 'items-stretch' to ensure both columns have equal height
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 items-stretch">
      
      {/* Bio Section - Styled as a Code Editor Window */}
      {/* Added 'h-full' and 'flex flex-col' to ensure it stretches to match the skills height */}
      <div className="border border-blue-500/30 rounded-lg bg-black/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm overflow-hidden h-full flex flex-col">
        
        {/* Window Header (about_me.md) */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-500/30 bg-blue-900/10 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 font-mono text-sm text-blue-300/90 tracking-wide">about_me.md</span>
        </div>

        {/* Window Content */}
        {/* 'flex-1' ensures this area fills the remaining height */}
        <div className="p-8 relative flex-1 flex flex-col justify-between">
          {/* Scanline effect overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] opacity-20"></div>
          
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-6 font-mono">## Hello, World!</h3>
            
            {/* Increased text size to text-base for 'bigger' look */}
            <div className="space-y-6 text-blue-100/80 font-light leading-relaxed font-mono text-base">
              <p>
                I'm a passionate Computer Science student and developer who loves turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                My journey in tech started with curiosity about how things work under the hood. Now I spend my time building full-stack applications, exploring new technologies, and contributing to open source.
              </p>
              <p>
                When I'm not coding, you'll find me exploring cybersecurity concepts, reading tech blogs, or debugging my life choices.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-900/30 font-mono text-sm">
            <span className="text-blue-400">const</span> <span className="text-blue-200">status</span> = <span className="text-green-400">"Always learning"</span>;
          </div>
        </div>
      </div>

      {/* Skills Section */}
      {/* The content here determines the height of the row. The left card will stretch to match this. */}
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-blue-400 mb-8 flex items-center font-mono">
          <span className="mr-3 text-blue-600">{'>'}</span> Technical Skills
        </h3>
        <div className="space-y-8">
          {/* Languages */}
          <div>
            <h4 className="text-blue-300 mb-4 flex items-center font-semibold font-mono text-lg">
              <Code className="mr-3 text-blue-500" size={20} /> Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>
          {/* Frontend */}
          <div>
            <h4 className="text-blue-300 mb-4 flex items-center font-semibold font-mono text-lg">
              <Globe className="mr-3 text-blue-500" size={20} /> Frontend
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>
          {/* Backend */}
          <div>
            <h4 className="text-blue-300 mb-4 flex items-center font-semibold font-mono text-lg">
              <Database className="mr-3 text-blue-500" size={20} /> Backend
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>
          {/* Tools */}
          <div>
            <h4 className="text-blue-300 mb-4 flex items-center font-semibold font-mono text-lg">
              <Cpu className="mr-3 text-blue-500" size={20} /> Tools & Frameworks
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map(skill => <SkillBadge key={skill} name={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}