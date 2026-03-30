import React from 'react';

const StatsSection = () => {
    const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];
    return (
       <section className="bg-linear-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center w-full">
            {/* Stat Content */}
            <div className="flex-1 text-center text-white">
              <h2 className="text-5xl font-bold mb-2 tracking-tight">
                {stat.value}
              </h2>
              <p className="text-purple-100 text-lg font-medium">
                {stat.label}
              </p>
            </div>

            {/* Vertical Divider (Hidden on last item and on mobile) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block h-16 w-px bg-white/30 mx-4" />
            )}
          </div>
        ))}
      </div>
    </section>
    );
};

export default StatsSection;