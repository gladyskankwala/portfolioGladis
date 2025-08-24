import { Code, Shield, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-red-800">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-800 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate junior front-end developer currently pursuing my Bachelor's degree in 
              <span className="text-red-800 font-medium"> Cybersecurity</span>. 
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
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-red-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Clean Code</h3>
              <p className="text-sm text-gray-600">
                Writing maintainable, readable code
              </p>
            </div>

            {/*<div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-red-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Security First</h3>
              <p className="text-sm text-gray-600">
                Building with security from the ground up
              </p>
            </div>*/}

            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-red-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Learning</h3>
              <p className="text-sm text-gray-600">
                Quickly adapting to new technologies
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg bg-red-50">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-red-800" />
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
