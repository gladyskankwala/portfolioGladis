//import { Code, Smartphone, Globe , Heart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

const skills = [
    { name: "HTML5", /*icon: Code,*/ level: 83 },
    { name: "CSS3", level: 75 },
    { name: "JavaScript" ,level: 65 },
    { name: "React", level: 72 },
    { name: "Git & GitHub", level: 71 },
    { name: "Responsive Design", level: 70 },
    //{ name: "Web Security", icon: Shield, level: 70 },
    //{ name: "HTTPS/SSL", icon: Database, level: 75 },
  ];

const About = () => {

  

  useGSAP(()=>{

    const titleSplit = new SplitText ("#about-div h2", {type: 'words'})


    const paragraphSplit = new SplitText("#para p", {type: 'lines'})

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        once: true
      }
    })

    scrollTimeline
     .from(titleSplit.words, {
      opacity: 0, duration: 1,yPercent: 100, ease: 'expo.out', stagger: 0.02
     })
     .from(paragraphSplit.lines,{
      opacity: 0, duration: 1, yPercent: 100, ease: "expo.inOut", stagger: 0.03
     })
     .from("#pattern div", {
      opacity: 0, duration: 1, yPercent: 50, ease: "expo.inOut", stagger: 0.04
      });



  })



  return (
    <section id="aboutme" className=" py-20 bg-black-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div id="about-div" className="text-center mb-16">
          <h2 id="title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-600">Me</span>
          </h2>
        </div>

        <div  className="grid lg:grid-cols-2 gap-12 items-center">


          <div id="terminal" className="flex flex-col text-start shadow-lg ring-2 ring-red-600/50 shadow-red-500/50 w-64 h-64 md:w-96 text-xs rounded-xl overflow-hidden font-robert-regular">
            <div className="flex items-center  justify-between bg-slate-800 p-3 ">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-xl cursor-pointer bg-red-600"></div>
                <div className="w-6 h-6 rounded-xl cursor-pointer bg-yellow-300"></div>
                <div className="w-6 h-6 rounded-xl cursor-pointer bg-green-400"></div>
              </div>
              <div className=" text-slate-400">
                <p>gladisPotfolioTerminal:~</p>
              </div>
            </div>

            <div className="flex flex-col bg-black-100 w-full h-full p-10 justify-between">
              <div>
                <h2 className="text-slate-200"> 
                <span className="text-green-600 m-2">$</span>
                   whoami</h2>
                <p className="text-slate-400 ml-10">frontend developer</p>
              </div>

              <div>
                <h2 className="text-slate-200"> 
                  <span className="text-green-600 m-2">$</span>
                   Skills.txt</h2>
                <p className="text-slate-400 ml-10">
                  React.js | CSS3 | JavaScript <br/> Git
                </p>
              </div>

              <div>
                <h2 className="text-slate-200"> 
                 <span className="text-green-600 m-2">$</span>
                     ./start_project</h2>
                  <p className="text-slate-400 ml-10">
                    initializing portfolio
                  </p>
                        </div>
                    </div>
          </div>




          {/* Texte */}
          <div id="para" className="space-y-6">
            <p  className="text-lg text-white leading-relaxed">
              I'm a passionate of technology currently pursuing my Bachelor's degree in 
              <span className="text-red-600 font-medium"> Cybersecurity</span>. 
            </p>
            <p className="text-lg text-white leading-relaxed">
              My journey into technology started with curiosity about how software and network work, 
              which evolved into a deep appreciation for clean code, robust security practices.
            </p>
            <p className="text-lg text-white leading-relaxed">
              I'm actively seeking my first professional opportunity where I can contribute to meaningful 
              projects while continuing to grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="p-4 border-solid border-black-100 bg-white">
                  <h3>{skill.name}</h3>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
