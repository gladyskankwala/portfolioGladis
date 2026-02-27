// src/components/Projects.jsx
import { ExternalLink, Github, Code, Shield, ShoppingCart, Cloud } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A responsive e-commerce website with product filtering, shopping cart, and secure checkout.",
      technologies: ["React", "CSS3", "JavaScript", "Authentication"],
      liveUrl: "#",
      githubUrl: "#",
      icon: ShoppingCart
    },
    /*{
      title: "Cybersecurity Dashboard",
      description: "A real-time dashboard displaying security metrics and network threats.",
      technologies: ["React", "Tailwind CSS", "Security APIs", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Shield
    },*/
    {
      title: "Developer Portfolio",
      description: "Showcases clean code, accessibility features, and performance optimization.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Performance Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Code
    },
    /*{
      title: "Cloud Security App",
      description: "Monitors cloud infrastructure security with real-time alerts and compliance tracking.",
      technologies: ["React", "TypeScript", "Cloud APIs", "Security Monitoring"],
      liveUrl: "#",
      githubUrl: "#",
      icon: Cloud
    }*/
  ];

  useGSAP(()=>{

    const titleSplit = new SplitText("#projects h2", {type: 'words'})

    const paragraphSplit = new SplitText("#projects > p", {type: 'lines'})

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: 'top center',
        once: true
      }
    })

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
      })
      .from(paragraphSplit.lines, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.inOut', stagger: 0.02
      })
      .from('.projects-stuff', {
       opacity: 0, duration: 1, yPercent: 100, ease: 'expo.inOut', stagger: 0.02
      })

    
  })




  return (
    <section id="projects" className="min-h-screen bg-white px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-8">
        Featured Projects
      </h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        My journey into technology started with curiosity about how software and network work, 
        which evolved into a deep appreciation for clean code, robust security practices.
        Some of my recent projects showcasing front-end development skills and cybersecurity knowledge.
      </p>

      <div  className="projects-stuff grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div key={project.title} className=" bg-gray-50 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
              <div  className="flex items-center justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <Icon className="h-6 w-6 text-red-700" />
                </div>
              </div>
              <h3 className="text-red-800 font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 justify-center">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-50 transition"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
