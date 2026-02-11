import React from "react";
import { FaCheckCircle, FaRocket, FaShieldAlt } from "react-icons/fa";

export const SocialProof = () => {
  const stats = [
    {
      icon: FaCheckCircle,
      value: "100+",
      label: "Projects Completed",
      color: "text-green-400",
    },
    {
      icon: FaRocket,
      value: "3-4 Hari",
      label: "Average Delivery",
      color: "text-blue-400",
    },
    {
      icon: FaShieldAlt,
      value: "100%",
      label: "Confidential",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="w-full bg-slate-800/50 border-y border-slate-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                {/* Icon */}
                <div className={`${stat.color}`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
