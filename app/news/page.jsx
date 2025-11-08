import { ArrowRight, Bell, Clock, ExternalLink } from "lucide-react";

// News Page
const NewsPage = () => {
  const news = [
    {
      title: 'FOCI Students Win National Hackathon',
      date: 'November 5, 2025',
      category: 'Achievement',
      excerpt: 'Our students secured first place in the Nigeria Coding Challenge 2025...',
      image: 'from-blue-400 to-blue-600'
    },
    {
      title: 'New AI Research Lab Inaugurated',
      date: 'October 28, 2025',
      category: 'News',
      excerpt: 'State-of-the-art facility to advance machine learning research...',
      image: 'from-green-400 to-green-600'
    },
    {
      title: 'Partnership with Tech Giants Announced',
      date: 'October 20, 2025',
      category: 'Partnership',
      excerpt: 'FOCI signs MoU with leading technology companies for student internships...',
      image: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-teal-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-teal-100">Stay informed about the latest from FOCI</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News */}
            <div className="lg:col-span-2 space-y-8">
              {news.map((article, index) => (
                <div
                  key={index}
                  className="bg-white  shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`h-64 bg-gradient-to-br ${article.image}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-5 w-5 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Announcements */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6  shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Bell className="h-6 w-6 text-orange-600 mr-2" />
                  Announcements
                </h3>
                <ul className="space-y-4">
                  {[
                    'Registration for 2025/26 session ongoing',
                    'Library hours extended for exams',
                    'New scholarship applications open',
                    'Tech talk this Friday at 2PM'
                  ].map((announcement, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{announcement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6  shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    'Student Portal',
                    'Course Registration',
                    'E-Library',
                    'Academic Calendar',
                    'Result Checker'
                  ].map((link, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between group"
                    >
                      <span>{link}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage