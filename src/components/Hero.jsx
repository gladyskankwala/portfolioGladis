import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


const Hero = () => {

  useGSAP(()=>{

    const heroSplit = new SplitText('#head-hero', {type: 'chars, words'})

    const paragraphSplit = new SplitText('#paragraph', {type: 'lines'})

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.05
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.inOut',
      stagger: 0.05,
      delay: 1
    })

    gsap.from('#anchor', {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.inOut',
      stagger: 0.02,
      delay: 1
    })

  })


  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      {/* Titre principal */}
      <h1 id="head-hero" className="text-6xl md:text-8xl font-extrabold text-gray-900 mb-6">
        Hi, I'm <span className="text-red-800">Gladis</span>
      </h1>

      {/* Sous-titre */}
      <p id="paragraph" className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        A passionate <span className="font-semibold text-red-700">Web Development</span> , 
        <span className="font-semibold text-red-700">Cybersecurity Student</span> & 
        <span className="font-semibold text-red-700">AI/ML</span>.<br></br> 
        I love building secure, accessible, and modern web applications.
      </p>

      {/* Call to action */}
      <div id="anchor" className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-red-700 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
