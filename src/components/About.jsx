import { Code, Shield, Rocket, Heart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div id="about-div" className="text-center mb-16">
          <h2 id="title" className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-red-600">Me</span>
          </h2>
        </div>

        <div  className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div id="para" className="space-y-6">
            <p  className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate junior front-end developer currently pursuing my Bachelor's degree in 
              <span className="text-red-600 font-medium"> Cybersecurity</span>. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey into web development started with curiosity about how websites work, which evolved 
              into a deep appreciation for clean code, beautiful design, and robust security practices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm actively seeking my first professional opportunity where I can contribute to meaningful 
              projects while continuing to grow as a developer.
            </p>
          </div>

          {/* Cartes */}
          <div id="pattern" className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
              <p className="text-sm text-gray-600">
                Writing maintainable, readable code
              </p>
            </div>

            {/*<div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Security First</h3>
              <p className="text-sm text-gray-600">
                Building with security from the ground up
              </p>
            </div>*/}

            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Learning</h3>
              <p className="text-sm text-gray-600">
                Quickly adapting to new technologies
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">User Focus</h3>
              <p className="text-sm text-gray-600">
                Creating delightful user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
