// src/components/Contact.jsx
import { Mail, Github, Linkedin, Download,  } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent! Thank you for reaching out.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen bg-white px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
        Get In Touch
      </h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        Feel free to reach out via email or through my social profiles. I'm always open to new projects and opportunities.
      </p>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info & Social */}
        <div className="flex flex-col space-y-6 justify-center">
          <div className="flex items-center space-x-3 justify-center">
            <Mail className="h-6 w-6 text-red-500" />
            <a href="mailto:alex.chen@email.com" className="text-gray-700 hover:text-red-500 transition">
              gladyskankwala03@email.com
            </a>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <Github className="h-6 w-6 text-red-500" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500 transition">
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <Linkedin className="h-6 w-6 text-red-500" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500 transition">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <Download className="h-6 w-6 text-red-500" />
            <a href="#" download className="text-gray-700 hover:text-red-500 transition">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
