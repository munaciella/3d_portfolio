import { FaGithub, FaLinkedin } from 'react-icons/fa';
import avatar from '../assets/Fran-avatar.png';
import logo from '../assets/logo.svg';
import cv from '../assets/Francesco_Vurchio-CV.pdf';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-4">

        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:grid-cols-2 xs:gap-14">

          {/* About Section */}
          <div>
            <a href="/" className="flex items-center gap-3 -mt-2">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <span className="text-white text-lg font-bold">
                Francesco.Dev
              </span>
            </a>
            <p className="text-md text-secondary mt-2">
              Crafting impactful applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href={cv}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li>Javascript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Three.js</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Me</h3>
            <div className="flex space-x-4">
            
              {/* GitHub */}
              <a
                href="https://github.com/munaciella"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition"
              >
                <FaGithub
                  size={26}
                  className="hover:scale-110 transition-transform"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/francesco-vurchio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-blue-400 transition"
              >
                <FaLinkedin
                  size={26}
                  className="hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary mt-8"></div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} Francesco Vurchio. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-2 xs:mt-2">
            <span className="text-white">
              Made with <span className="text-secondary text-md">&#9825;</span>{' '}
              by{' '}
            </span>
            <a
              href="https://github.com/munaciella"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 underline"
            >
              <img
                src={avatar}
                alt="Francesco's Image"
                width="36"
                className="border-2 bg-secondary rounded-full border-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
