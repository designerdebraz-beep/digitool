import React from 'react';
import { User,Box , Rocket } from 'lucide-react';

const HowItWorks = () => {
const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <User className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <Box  className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <Rocket  className="w-10 h-10 text-[#7C3AED]" />,
    },
  ];


    return (
        <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center text-center shadow-sm"
            >
              {/* Step Number Badge */}
              <div className="absolute top-5 right-5 bg-[#7C3AED] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="bg-[#F5F3FF] w-24 h-24 rounded-full flex items-center justify-center mb-8">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed
               max-w-62.5">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;