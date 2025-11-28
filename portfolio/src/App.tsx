import { NavBar } from "@/components/ui/tubelight-navbar";
import { Spotlight } from "@/components/ui/spotlight"; // Import the new component (match file casing)
import { Home, User, Briefcase, Trophy, Phone } from 'lucide-react';
import { motion } from "framer-motion"; // Import animation library

export default function App() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About Me', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Achievements', url: '#achievements', icon: Trophy }, 
    { name: 'Contact Me', url: '#contact', icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500/30 overflow-hidden relative">
      
      {/* 1. The Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <NavBar items={navItems} />

      <div className="pt-32 px-10 max-w-4xl mx-auto space-y-32 pb-20 relative z-10">
        
        {/* Hero Section with Animation */}
        <section id="home" className="h-[60vh] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Hello, I'm <span className="text-purple-400">Saajan.</span>
            </h1>
            <p className="mt-4 text-xl text-neutral-300 max-w-lg">
              I build scalable infrastructure and secure cloud systems.
            </p>
          </motion.div>
        </section>

        {/* Sections with "Fade In While Scrolling" */}
        <FadeInSection id="about" title="About Me">
          <p className="text-gray-400">Content goes here...</p>
        </FadeInSection>

        <FadeInSection id="projects" title="Projects">
          <p className="text-gray-400">Content goes here...</p>
        </FadeInSection>

        <FadeInSection id="achievements" title="Achievements">
          <p className="text-gray-400">Timeline goes here...</p>
        </FadeInSection>
        
        <FadeInSection id="contact" title="Contact Me">
          <p className="text-gray-400">Content goes here...</p>
        </FadeInSection>
      </div>
    </div>
  );
}

// Helper Component for Scroll Animations
function FadeInSection({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="p-10 border border-white/10 rounded-3xl bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
    >
      <h2 className="text-3xl font-bold mb-4 text-purple-300">{title}</h2>
      {children}
    </motion.section>
  );
}