import { Calendar, Clock, MapPin } from "lucide-react";

// Events Page
const EventsPage = () => {
  const events = [
    { date: 'Nov 15', title: 'AI Workshop Series', type: 'Workshop', location: 'Lab 101', time: '10:00 AM' },
    { date: 'Nov 22', title: 'Hackathon 2025', type: 'Competition', location: 'Main Hall', time: '9:00 AM' },
    { date: 'Dec 01', title: 'Industry Tech Talk', type: 'Seminar', location: 'Auditorium', time: '2:00 PM' },
    { date: 'Dec 10', title: 'Career Fair', type: 'Fair', location: 'Campus Ground', time: '10:00 AM' },
    { date: 'Dec 18', title: 'End of Year Gala', type: 'Social', location: 'Event Center', time: '6:00 PM' }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">Events & Activities</h1>
          <p className="text-xl text-orange-100">Stay connected with our vibrant community</p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white  shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg p-4 mr-6 text-center min-w-[80px]">
                      <div className="text-2xl font-bold">{event.date.split(' ')[1]}</div>
                      <div className="text-sm">{event.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.type}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events Gallery */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Past Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden  shadow-lg cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-1">Event Title {item}</h4>
                      <p className="text-sm">October 2025</p>
                    </div>
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

export default EventsPage