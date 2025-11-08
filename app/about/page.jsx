import { Brain, Globe, Star, Target, Users, Zap } from "lucide-react";

// About Page
const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">About FOCI</h1>
          <p className="text-xl text-blue-100">Excellence in Computing Education Since Inception</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 shadow-lg animate-slideInLeft">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To push the boundaries of technology and shape the world of tomorrow through cutting-edge research, 
                innovative teaching, and transformative partnerships that position our graduates as global leaders in computing and informatics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 shadow-lg animate-slideInRight">
              <Zap className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To transform knowledge into innovations that improve lives, advance discovery, and prepare future leaders 
                to shape tomorrow's digital world through excellence in education, research, and service to society.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Star className="h-8 w-8" />, title: 'Excellence', description: 'Striving for the highest standards' },
                { icon: <Globe className="h-8 w-8" />, title: 'Innovation', description: 'Pioneering new solutions' },
                { icon: <Users className="h-8 w-8" />, title: 'Integrity', description: 'Upholding ethical principles' },
                { icon: <Brain className="h-8 w-8" />, title: 'Knowledge', description: 'Advancing learning and discovery' }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50  hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="text-blue-600 flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History Timeline */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-10  shadow-lg">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: '2000s', title: 'Foundation', description: 'FOCI established as a center of computing excellence' },
                { year: '2010s', title: 'Expansion', description: 'Introduction of new programs and research centers' },
                { year: '2020s', title: 'Innovation', description: 'Leading AI and cybersecurity research in West Africa' },
                { year: '2025', title: 'Future Forward', description: 'Preparing students for the digital economy' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start hover:bg-blue-50 p-4 rounded-lg transition-colors">
                  <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage