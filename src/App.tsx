import React from "react";
import { Users, Briefcase, Mail } from "lucide-react";
import AnimatedSection from "./components/AnimatedSection";
import Navbar from "./components/Navbar";

const HRLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection className="bg-blue-500 text-white py-32 mt-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Your Workforce
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Innovative HR solutions for modern businesses
          </p>
          <button className="bg-slate-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105  hover:shadow-lg">
            Get Started
          </button>
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
            <AnimatedSection className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-slate-600">
                We strive to revolutionize human resource management by
                providing innovative solutions that empower businesses to
                nurture their most valuable asset - their people.
              </p>
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading provider of HR solutions, fostering workplaces
                where employees thrive, and organizations achieve unprecedented
                success through their workforce.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Talent Acquisition",
                description:
                  "Find and attract top talent to drive your organization forward.",
              },
              {
                icon: Briefcase,
                title: "Employee Development",
                description:
                  "Nurture your workforce with tailored training and development programs.",
              },
              {
                icon: Mail,
                title: "HR Consulting",
                description:
                  "Expert advice to optimize your HR strategies and policies.",
              },
            ].map((service, index) => (
              <AnimatedSection
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
              >
                <service.icon className="text-blue-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection id="contact" className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">HR Solutions</h3>
              <p>Empowering your workforce since 2024</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p>Email: info@hrsolutions.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 HR Solutions. All rights reserved.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HRLandingPage;
