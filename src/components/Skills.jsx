// src/components/Skills.jsx
import { Code2, Palette, Smartphone, GitBranch, Shield, Database, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: Code2, level: 90 },
    { name: "CSS3", icon: Palette, level: 85 },
    { name: "JavaScript", icon: Zap, level: 80 },
    { name: "React", icon: Globe, level: 75 },
    { name: "Git & GitHub", icon: GitBranch, level: 85 },
    { name: "Responsive Design", icon: Smartphone, level: 90 },
    //{ name: "Web Security", icon: Shield, level: 70 },
    //{ name: "HTTPS/SSL", icon: Database, level: 75 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-white px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-8">
        Skills & Expertise
      </h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        A combination of front-end development skills and cybersecurity knowledge, all aimed at creating modern, secure, and user-friendly web applications.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
              <div className="p-4 bg-red-100 rounded-full mb-4">
                <Icon className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="font-semibold text-red-800 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-red-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-gray-700 text-sm mt-1">{skill.level}%</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
