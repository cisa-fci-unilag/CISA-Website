import { BookOpen, CheckCircle, Code, ExternalLink, Github, Instagram, Linkedin, Mail, Phone, Trophy, Twitter, Users } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/images/New folder (2)/Logos/masked_output_transparent.png";

// CISA Page
const CISAPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-sm p-2  inline-block mb-6">
                <Image
                              src={Logo}
                              className="h-24 w-24"/>
              </div>
              <h1 className="text-5xl font-bold mb-4">CISA</h1>
              <p className="text-2xl text-blue-100 mb-8">
                Computing & Informatics Students' Association
              </p>
              <p className="text-lg text-blue-200 italic mb-8">
                "The voice of computing students at UNILAG"
              </p>
            </div>
            <div className="hidden md:block animate-slideInRight">
              <div className="bg-white/10 backdrop-blur-sm p-10 ">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:cisa.foci.unilag@gmail.com" className="flex items-center hover:text-blue-200 transition-colors">
                    <Mail className="h-5 w-5 mr-3" />
                    cisa.foci.unilag@gmail.com
                  </a>
                  <a href="tel:+2348114042002" className="flex items-center hover:text-blue-200 transition-colors">
                    <Phone className="h-5 w-5 mr-3" />
                    +234 811 404 2002
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Code className="h-10 w-10" />, title: 'Tech Workshops', description: 'Regular hands-on training sessions' },
                { icon: <Trophy className="h-10 w-10" />, title: 'Hackathons', description: 'Competitive coding events' },
                { icon: <Users className="h-10 w-10" />, title: 'Networking', description: 'Connect with industry leaders' },
                { icon: <BookOpen className="h-10 w-10" />, title: 'Study Groups', description: 'Collaborative learning sessions' }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-8  shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-blue-600 mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-10  shadow-lg mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Connect With Us</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Github className="h-12 w-12" />, name: 'GitHub', url: 'https://github.com/cisa-fci-unilag', color: 'gray' },
                { icon: <Linkedin className="h-12 w-12" />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/computing-informatics-student-association-cisa-unilag', color: 'blue' },
                { icon: <Instagram className="h-12 w-12" />, name: 'Instagram', url: 'https://instagram.com/cisa_unilag', color: 'pink' },
                { icon: <Twitter className="h-12 w-12" />, name: 'X (Twitter)', url: 'https://x.com/cisa_unilag', color: 'sky' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-8  shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center group`}
                >
                  <div className={`text-${social.color}-600 flex justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {social.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{social.name}</h3>
                  <p className="text-sm text-gray-600 mt-2 flex items-center justify-center">
                    Follow Us <ExternalLink className="h-4 w-4 ml-1" />
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Membership Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Career Development', points: ['Resume workshops', 'Interview prep', 'Job opportunities', 'Mentorship programs'] },
              { title: 'Skill Building', points: ['Free courses', 'Certifications', 'Project collaboration', 'Tech talks'] },
              { title: 'Community', points: ['Networking events', 'Social activities', 'Peer support', 'Alumni connections'] }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8  shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CISAPage