import { Award, Brain, Database, FileText, Shield, Target, Users } from "lucide-react";

// Research Page
const ResearchPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Research & Innovation</h1>
          <p className="text-xl text-indigo-100">Pushing the boundaries of knowledge</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Research Areas */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Research Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Brain className="h-12 w-12" />,
                title: 'Artificial Intelligence',
                color: 'blue',
                topics: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Cybersecurity',
                color: 'red',
                topics: ['Network Security', 'Blockchain', 'Digital Forensics', 'Privacy Protection']
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: 'Data Science',
                color: 'green',
                topics: ['Big Data Analytics', 'Data Mining', 'Predictive Modeling', 'Business Intelligence']
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8  shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`text-${area.color}-600 mb-4`}>{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Research Centers */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-10  shadow-lg mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Centers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'AI & Machine Learning Lab',
                  description: 'Developing intelligent systems for real-world applications',
                  projects: '15+ Active Projects'
                },
                {
                  name: 'Cybersecurity Research Center',
                  description: 'Protecting digital infrastructure and privacy',
                  projects: '10+ Active Projects'
                },
                {
                  name: 'Data Science Hub',
                  description: 'Extracting insights from complex datasets',
                  projects: '12+ Active Projects'
                },
                {
                  name: 'Software Engineering Lab',
                  description: 'Building scalable and reliable software systems',
                  projects: '8+ Active Projects'
                }
              ].map((center, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{center.name}</h4>
                  <p className="text-gray-600 mb-3">{center.description}</p>
                  <div className="flex items-center text-indigo-600 font-semibold">
                    <Target className="h-5 w-5 mr-2" />
                    {center.projects}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Publications</h2>
            <p className="text-gray-600 mb-8">Our faculty and students contribute to leading journals and conferences worldwide</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { count: '100+', label: 'Published Papers', icon: <FileText className="h-8 w-8" /> },
                { count: '50+', label: 'Conference Presentations', icon: <Users className="h-8 w-8" /> },
                { count: '20+', label: 'Patents Filed', icon: <Award className="h-8 w-8" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-8  shadow-lg">
                  <div className="text-purple-600 flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.count}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage