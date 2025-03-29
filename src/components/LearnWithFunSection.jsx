"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Educational topic cards data
const topics = [
  {
    id: 1,
    title: "Periodic Table",
    description:
      "Explore the elements and their properties in an interactive periodic table.",
    imageSrc: "/periodic-table.svg", // Placeholder - create or obtain this image
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    facts: [
      "There are 118 confirmed elements",
      "Hydrogen is the most abundant element in the universe",
      "Francium is the most reactive metal",
    ],
  },
  {
    id: 2,
    title: "Human Organ Systems",
    description: "Discover how different systems in our body work together.",
    imageSrc: "/human-body.svg", // Placeholder
    color: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-600",
    facts: [
      "Your body has 11 major organ systems",
      "Your skin is the largest organ",
      "Your heart beats about 100,000 times a day",
    ],
  },
  {
    id: 3,
    title: "Sound",
    description: "Understand sound waves, frequencies, and how we hear.",
    imageSrc: "/sound-waves.svg", // Placeholder
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    facts: [
      "Sound can't travel through a vacuum",
      "The speed of sound in air is about 343 m/s",
      "Humans can hear frequencies between 20Hz and 20,000Hz",
    ],
  },
  {
    id: 4,
    title: "Motion",
    description: "Learn about forces, energy, and the laws of motion.",
    imageSrc: "/motion.svg", // Placeholder
    color: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-600",
    facts: [
      "Newton's first law: An object in motion stays in motion",
      "Acceleration is the rate of change of velocity",
      "Gravity is the weakest of the four fundamental forces",
    ],
  },
  {
    id: 5,
    title: "Light & Colors",
    description: "Explore the science of light, reflection, and refraction.",
    imageSrc: "/light-spectrum.svg", // Placeholder
    color: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-600",
    facts: [
      "Light can behave as both a wave and a particle",
      "The visible spectrum is just a small part of the electromagnetic spectrum",
      "White light contains all colors of the spectrum",
    ],
  },
  {
    id: 6,
    title: "Chemical Reactions",
    description:
      "Discover how substances transform through chemical reactions.",
    imageSrc: "/chemical-reaction.svg", // Placeholder
    color: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-600",
    facts: [
      "Chemical reactions rearrange atoms but don't create or destroy them",
      "Exothermic reactions release energy as heat",
      "Catalysts speed up reactions without being consumed",
    ],
  },
];

export default function LearnWithFunSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeTopicId, setActiveTopicId] = useState(null);

  const displayedTopics = showAll ? topics : topics.slice(0, 4);

  const toggleTopic = (id) => {
    setActiveTopicId(activeTopicId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Learn With Fun</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore complex scientific concepts through interactive
            visualizations and fun facts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTopics.map((topic) => (
            <div
              key={topic.id}
              className={`${topic.color} border ${topic.borderColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer`}
              onClick={() => toggleTopic(topic.id)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Replace with your actual images */}
                  <div className="text-gray-400">
                    {/* This is where the topic image would go */}
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${topic.textColor} mb-2`}>
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>

                {/* Interactive content that appears when clicked */}
                {activeTopicId === topic.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Fun Facts:
                    </h4>
                    <ul className="space-y-2">
                      {topic.facts.map((fact, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-100 text-xs font-medium text-gray-800 mr-2 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-600">{fact}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`mt-4 px-4 py-2 rounded-full text-sm font-medium ${topic.textColor} border ${topic.borderColor} hover:bg-white transition-colors`}
                    >
                      Learn More
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              View All Topics
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
