"use client"
import { Clock, Mail, MapPin, Phone } from "lucide-react";

// Contact Page
const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-cyan-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-cyan-100">We'd love to hear from you</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: <Mail className="h-6 w-6" />, label: 'Email', value: 'cisa.foci.unilag@gmail.com', link: 'mailto:cisa.foci.unilag@gmail.com' },
                  { icon: <Phone className="h-6 w-6" />, label: 'Phone', value: '+234 811 404 2002', link: 'tel:+2348114042002' },
                  { icon: <MapPin className="h-6 w-6" />, label: 'Address', value: 'Faculty of Computing & Informatics, University of Lagos, Akoka, Lagos, Nigeria', link: null }
                ].map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-blue-100 text-blue-600 p-4  mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64  shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="font-semibold">University of Lagos</p>
                  <p className="text-sm">Akoka, Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8  shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  onClick={() => window.location.href = 'mailto:cisa.foci.unilag@gmail.com'}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM', icon: <Clock className="h-8 w-8" /> },
              { day: 'Saturday', time: '9:00 AM - 2:00 PM', icon: <Clock className="h-8 w-8" /> },
              { day: 'Sunday', time: 'Closed', icon: <Clock className="h-8 w-8" /> }
            ].map((schedule, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8  text-center shadow-lg">
                <div className="text-blue-600 flex justify-center mb-4">{schedule.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{schedule.day}</h4>
                <p className="text-gray-600">{schedule.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage