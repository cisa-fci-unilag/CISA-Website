"use client"
import { useState } from "react";

const { ArrowRight, ChevronRight, BookOpen, CheckCircle, GraduationCap, Shield, Cpu, Database, Code } = require("lucide-react");

// Academics Page
const AcademicsPage = () => {
  const [selectedDept, setSelectedDept] = useState('cs');

  const departments = {
    cs: {
      name: 'Computer Science',
      icon: <Code className="h-12 w-12" />,
      description: 'Explore the theoretical foundations and practical applications of computing',
      programs: ['B.Sc. Computer Science', 'M.Sc. Computer Science', 'Ph.D. Computer Science'],
      courses: ['Data Structures', 'Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks']
    },
    is: {
      name: 'Information Systems',
      icon: <Database className="h-12 w-12" />,
      description: 'Bridge the gap between business and technology',
      programs: ['B.Sc. Information Systems', 'M.Sc. Information Systems', 'M.Sc. Data Science'],
      courses: ['Database Management', 'Business Intelligence', 'Enterprise Systems', 'IT Project Management', 'Data Analytics']
    },
    se: {
      name: 'Software Engineering',
      icon: <Cpu className="h-12 w-12" />,
      description: 'Master the art and science of building software systems',
      programs: ['B.Sc. Software Engineering', 'M.Sc. Software Engineering'],
      courses: ['Software Design', 'Agile Development', 'DevOps', 'Mobile App Development', 'Cloud Computing']
    },
    cs: {
      name: 'Cyber Security',
      icon: <Shield className="h-12 w-12" />,
      description: 'Protect digital assets in an interconnected world',
      programs: ['B.Sc. Cyber Security', 'M.Sc. Cyber Security'],
      courses: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Digital Forensics', 'Security Operations']
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-purple-100">World-class education for the digital age</p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Department Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setSelectedDept(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedDept === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Department Content */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-10  shadow-lg animate-fadeIn">
            <div className="flex items-center mb-6">
              <div className="text-blue-600 mr-4">{departments[selectedDept].icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{departments[selectedDept].name}</h2>
                <p className="text-gray-600 mt-2">{departments[selectedDept].description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                  Available Programs
                </h3>
                <ul className="space-y-3">
                  {departments[selectedDept].programs.map((program, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                  Key Courses
                </h3>
                <ul className="space-y-3">
                  {departments[selectedDept].courses.map((course, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Program Levels */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8  shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Undergraduate Programs</h3>
              <ul className="space-y-4">
                {['B.Sc. Computer Science', 'B.Sc. Information Systems', 'B.Sc. Software Engineering', 'B.Sc. Cyber Security'].map((program, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8  shadow-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Postgraduate Programs</h3>
              <ul className="space-y-4">
                {['M.Sc. Computer Science', 'M.Sc. Information Systems', 'M.Sc. Data Science', 'Ph.D. Computing'].map((program, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage