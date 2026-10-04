import { ExternalLink } from "@/components/ExternalLink";
import { site, experience, services, tools, visibleProjects } from "@/content/site";
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-7xl brutal-border bg-cream flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-4 brutal-border border-t-0 border-l-0 border-r-0 border-b-[3px]">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 brutal-border overflow-hidden bg-white">
              <img src="/avatar.jpg" alt={site.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold uppercase tracking-wider hidden md:block">HELLO. I&apos;M {site.name.toUpperCase()}</span>
          </div>
          
          <div className="flex space-x-6 items-center">
            <a href="#" className="hover:scale-110 transition-transform"><HomeIcon className="w-6 h-6 text-black" strokeWidth={2.5} /></a>
            <a href="#about" className="hover:scale-110 transition-transform"><UserIcon className="w-6 h-6 text-black" strokeWidth={2.5} /></a>
            <a href="#work" className="hover:scale-110 transition-transform"><BriefcaseIcon className="w-6 h-6 text-black" strokeWidth={2.5} /></a>
          </div>

          <div>
            <a href={`mailto:${site.email}`} className="brutal-button bg-accent inline-block text-sm">
              * LET&apos;S TALK *
            </a>
          </div>
        </nav>

        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 brutal-border border-t-0 border-l-0 border-r-0 border-b-[3px]">
          
          {/* Hero Section */}
          <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black relative">
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-4">
              <span className="text-white drop-shadow-[2px_2px_0_rgba(17,17,17,1)] [-webkit-text-stroke:2px_black]">PRODUCT</span> <span className="text-primary">MANAGER</span><br/>
              & <span className="text-secondary">AGILE LEADER</span>
            </h1>
            <p className="font-bold text-lg md:text-xl uppercase max-w-lg mb-10">
              SPECIALIZING IN CRM, D2C MOBILITY & INSURANCE DOMAINS.
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-8">
              <div className="flex space-x-3">
                <a href={site.linkedin} className="w-12 h-12 brutal-box flex items-center justify-center hover:-translate-y-1">
                  <span className="font-bold text-xl">in</span>
                </a>
                <a href={`mailto:${site.email}`} className="w-12 h-12 brutal-box flex items-center justify-center hover:-translate-y-1">
                  <EnvelopeIcon className="w-6 h-6" strokeWidth={2} />
                </a>
              </div>
              <a href="#work" className="brutal-button bg-accent hidden sm:block">
                * READY TO WORK *
              </a>
            </div>
          </div>

          {/* Tools & Strip */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="p-8 border-b-[3px] border-black flex-grow">
              <h2 className="font-display text-3xl uppercase mb-6">TOOLS</h2>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="w-16 h-16 brutal-box rounded-full bg-pink flex items-center justify-center relative overflow-hidden group">
                    {/* Simplified scalloped look using tailwind radius */}
                    <div className="absolute inset-1 rounded-full border-2 border-dashed border-black opacity-30"></div>
                    <span className="font-bold text-xs z-10 text-center leading-tight">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
              <p className="font-display text-2xl uppercase tracking-widest text-center relative z-10 flex items-center gap-4 text-primary">
                <span className="text-3xl">✽</span> PERSONAL PORTFOLIO <span className="text-secondary text-3xl">✽</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* Services */}
          <div className="lg:col-span-1 p-8 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
            <h2 className="font-display text-3xl uppercase mb-6">SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {services.map((service, i) => (
                <div key={i} className={`brutal-box p-4 flex items-center justify-center text-center ${service.color}`}>
                  <span className="font-bold uppercase tracking-wider">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work */}
          <div className="lg:col-span-2 p-8" id="work">
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-display text-3xl uppercase">WORK</h2>
              <a href="#work" className="brutal-pill bg-pink hidden sm:block">VIEW MORE</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {visibleProjects().map((project) => (
                <div key={project.slug} className={`brutal-box p-6 flex flex-col h-64 ${project.color || 'bg-white'}`}>
                  <h3 className="font-bold text-xl uppercase leading-tight mb-2">{project.name}</h3>
                  <p className="text-sm font-medium opacity-80 mb-4 line-clamp-3">{project.tagline}</p>
                  <div className="mt-auto">
                    <button className="brutal-box w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-110">
                      <ArrowUpRightIcon className="w-5 h-5" strokeWidth={3} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Experience / Footer area */}
        <div className="border-t-[3px] border-black p-8 bg-white" id="about">
           <h2 className="font-display text-3xl uppercase mb-8">EXPERIENCE</h2>
           <div className="grid md:grid-cols-2 gap-8">
              {experience.map((exp, i) => (
                <div key={i} className="brutal-box p-6 bg-cream">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl uppercase">{exp.role}</h3>
                      <p className="text-primary font-bold">{exp.org}</p>
                    </div>
                    <span className="brutal-pill bg-white text-xs">{exp.year}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm font-medium">
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
