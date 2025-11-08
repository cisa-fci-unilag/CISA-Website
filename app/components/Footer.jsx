import { Code, Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/images/New folder (2)/Logos/masked_output_transparent.png";

// Footer Component
export const Footer = ({ setPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3">
                <Image
                              src={Logo}
                              className="h-full w-full"/>
              </div>
              <div>
                <h3 className="text-lg font-bold">FOCI UNILAG</h3>
                <p className="text-xs text-gray-400">Since Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Faculty of Computing & Informatics, University of Lagos
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", page: "about" },
                { name: "Programs", page: "academics" },
                { name: "Admissions", page: "admissions" },
                { name: "Research", page: "research" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setPage(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Student Resources</h3>
            <ul className="space-y-2">
              {[
                "Student Portal",
                "E-Library",
                "Course Registration",
                "Result Checker",
              ].map((resource, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Academic Session 2025/26
            </p>
            <div className="flex space-x-4 mb-4">
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  url: "https://github.com/cisa-fci-unilag",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  url: "https://www.linkedin.com/company/computing-informatics-student-association-cisa-unilag",
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  url: "https://instagram.com/cisa_unilag",
                },
                {
                  icon: <Twitter className="h-5 w-5" />,
                  url: "https://x.com/cisa_unilag",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:cisa.foci.unilag@gmail.com"
                className="text-gray-400 hover:text-white flex items-center transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+2348114042002"
                className="text-gray-400 hover:text-white flex items-center transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Faculty of Computing & Informatics, University of
              Lagos. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
