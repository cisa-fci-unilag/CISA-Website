"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Image1 from "../../public/images/home/1.png";
import Image2 from "../../public/images/home/2.png";
import Image3 from "../../public/images/home/3.png";
import { AnimatedCounter } from "./AnimatedCounter";

const {
  ArrowRight,
  Shield,
  Database,
  Code,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Calendar,
  Trophy,
} = require("lucide-react");

// Home Page
export const HomePage = ({ setPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Shape the Digital Future",
      subtitle: "Join Africa's leading computing faculty",
      image: Image1,
    },
    {
      title: "Innovation Meets Excellence",
      subtitle: "World-class education in computing",
      image: Image2,
    },
    {
      title: "Research That Matters",
      subtitle: "Solving real-world problems",
      image: Image3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="h-[75vh] pt-6 md:pt-20 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <Image 
              src={slide.image}
              alt={slide.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />
            {/* Overlay */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85))',
                zIndex: 1
              }}
            />
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70%] md:h-full flex items-center" style={{ position: 'relative', zIndex: 2 }}>
              <div className="text-white animate-fadeIn">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp">
                  {slide.title}
                </h1>
                <p
                  className="text-xl md:text-3xl mb-8 text-gray-200 animate-slideUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 mt-50">
          <div className="text-white max-w-3xl">
            <p
              className="text-2xl mb-4 text-gray-200 italic animate-slideUp"
              style={{ animationDelay: "0.4s" }}
            >
              "Information sparks innovation, innovation drives impact."
            </p>
            <div
              className="flex flex-wrap gap-4 animate-slideUp"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => setPage("academics")}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                Explore Programs
              </button>
              <button
                onClick={() => setPage("admissions")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated Stats */}
      <div className="bg-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="h-10 w-10" />,
                value: 1000,
                label: "Students",
                suffix: "+",
              },
              {
                icon: <Users className="h-10 w-10" />,
                value: 50,
                label: "Faculty Members",
                suffix: "+",
              },
              {
                icon: <BookOpen className="h-10 w-10" />,
                value: 10,
                label: "Programs",
                suffix: "+",
              },
              {
                icon: <Award className="h-10 w-10" />,
                value: 5,
                label: "Research Centers",
                suffix: "+",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div
                  className="flex justify-center text-blue-600 mb-3 animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge education for tomorrow's leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12" />,
                title: "Computer Science",
                color: "blue",
                description: "Master algorithms, AI, and software development",
              },
              {
                icon: <Database className="h-12 w-12" />,
                title: "Information Systems",
                color: "green",
                description: "Bridge technology and business solutions",
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Cyber Security",
                color: "red",
                description: "Protect digital assets and infrastructure",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8  shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => setPage("academics")}
              >
                <div
                  className={`text-${program.color}-600 mb-4 transform group-hover:scale-110 transition-transform`}
                >
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Links
            </h2>
            {/* <p className="text-xl text-gray-600">
              Cutting-edge education for tomorrow's leaders
            </p> */}
          </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Events",
                page: "events",
                description: "Upcoming workshops and seminars",
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Research",
                page: "research",
                description: "Groundbreaking innovations",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "CISA",
                page: "cisa",
                description: "Join our student community",
              },
            ].map((item, index) => (
              <a href={`/${item.page}`}
                key={index}
                onClick={() => setPage(item.page)}
                className="bg-white/10 backdrop-blur-sm p-8  hover:bg-white/20 transition-all transform hover:scale-105 text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
