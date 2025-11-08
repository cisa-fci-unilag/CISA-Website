import { ArrowRight, Award, BookOpen, Calendar, CheckCircle, Download, FileText, GraduationCap } from "lucide-react";

// Admissions Page
const AdmissionsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-green-100">Begin your journey to excellence</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Application Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Apply Online', icon: <FileText className="h-8 w-8" />, description: 'Complete the online application form' },
                { step: '2', title: 'Submit Documents', icon: <Download className="h-8 w-8" />, description: 'Upload required credentials' },
                { step: '3', title: 'Take Exam', icon: <BookOpen className="h-8 w-8" />, description: 'Participate in entrance examination' },
                { step: '4', title: 'Get Admitted', icon: <Award className="h-8 w-8" />, description: 'Receive admission letter' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6  shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                      {item.step}
                    </div>
                    <div className="text-blue-600 flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8  shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                Undergraduate Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  'O\'Level results with at least 5 credits including Mathematics and English',
                  'JAMB UTME score (minimum of 200)',
                  'Post-UTME screening examination',
                  'Birth certificate or age declaration',
                  'Local Government identification letter'
                ].map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8  shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-purple-600 mr-3" />
                Postgraduate Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  'Bachelor\'s degree in relevant field (minimum Second Class Lower)',
                  'Official transcripts from previous institutions',
                  'Two academic reference letters',
                  'Statement of purpose',
                  'CV/Resume'
                ].map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-10  shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Calendar className="h-8 w-8 text-orange-600 mr-3" />
              Important Dates 2025/26
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { event: 'Application Opens', date: 'January 15, 2025' },
                { event: 'Application Deadline', date: 'April 30, 2025' },
                { event: 'Entrance Exam', date: 'May 15, 2025' },
                { event: 'Results Released', date: 'June 15, 2025' },
                { event: 'Registration Begins', date: 'July 1, 2025' },
                { event: 'Session Starts', date: 'August 1, 2025' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
                  <h4 className="font-bold text-gray-900 mb-2">{item.event}</h4>
                  <p className="text-orange-600 font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdmissionsPage