import { Mail, Users } from "lucide-react";
import Image from "next/image";
import Dean from "../../public/images/New folder (2)/Personalities/dean.png";
import President from "../../public/images/New folder (2)/Personalities/president.jpeg";
import SubDean from "../../public/images/New folder (2)/Personalities/subDean.jpeg";

// Leadership Page
const LeadershipPage = () => {
  const LeaderCard = ({ name, position, image, department, email }) => (
    <div className="bg-white  shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        {image?<Image src={image} className="h-full w-full"/>:<Users className="h-24 w-24 text-blue-400" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{position}</p>
        {department && <p className="text-gray-600 text-sm mb-2">{department}</p>}
        {email && (
          <a href={`mailto:${email}`} className="text-sm text-blue-600 hover:underline flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            Contact
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Leadership</h1>
          <p className="text-xl text-blue-100">Meet the people driving our vision forward</p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Leadership */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Faculty Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <LeaderCard name="Professor Adewole" position="Dean of Faculty" email="dean.foci@unilag.edu.ng" image={Dean} />
              <LeaderCard name="Dr. Alamu" position="Subdean of Faculty" email="subdean.foci@unilag.edu.ng" image={SubDean} />
            </div>
          </div>

          {/* Student Executives */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Student Executives</h2>
            <p className="text-center text-gray-600 mb-12">CISA Leadership 2025/26</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <LeaderCard name="Solomon Daniel" position="President, CISA" image={President} />
              <LeaderCard name="[Name]" position="Vice President" />
              <LeaderCard name="[Name]" position="General Secretary" />
              <LeaderCard name="[Name]" position="Treasurer" />
              <LeaderCard name="[Name]" position="Director of Socials" />
              <LeaderCard name="[Name]" position="Director of Welfare" />
              <LeaderCard name="[Name]" position="Public Relations Officer" />
              <LeaderCard name="[Name]" position="Technical Director" />
            </div>
          </div>

          {/* Heads of Department */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Heads of Department</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <LeaderCard name="Dr. [Name]" position="Head of Department" department="Computer Science" />
              <LeaderCard name="Dr. [Name]" position="Head of Department" department="Information Systems" />
              <LeaderCard name="Dr. [Name]" position="Head of Department" department="Software Engineering" />
              <LeaderCard name="Dr. [Name]" position="Head of Department" department="Cyber Security" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage
