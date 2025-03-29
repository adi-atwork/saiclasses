"use client";
import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    grade: "Class 10",
    image: "/images/girl3.jpg", // Add student images to public folder
    content:
      "SAI Classes helped me secure 95% in my board exams. The teachers are very supportive and their teaching methodology is excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Kumar",
    grade: "Class 9",
    image: "/images/boy1.jpg",
    content:
      "The personalized attention and regular practice tests really helped me improve my performance. Best coaching institute in the area!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    grade: "Class 9",
    image: "/images/girl2.jpg",
    content:
      "I was struggling with Mathematics, but after joining SAI Classes, I've seen a significant improvement in my understanding and scores.",
    rating: 5,
  },
  {
    id: 4,
    name: "Roshani Singh",
    grade: "Class 10",
    image: "/images/girl1.jpg",
    content:
      "Sai Classes specially Aditya Sir helped me to improved my overall performance in the board exam ",
    rating: 5,
  },
  // Add more reviews as needed
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our successful students and their experiences
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200" />
                {/* Add actual student image here */}
                <Image
                  src={reviews[activeIndex].image}
                  alt={reviews[activeIndex].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {reviews[activeIndex].name}
                </h3>
                <p className="text-gray-600">{reviews[activeIndex].grade}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 italic">
              "{reviews[activeIndex].content}"
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              onClick={prevReview}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transform -translate-x-1/2"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextReview}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none transform translate-x-1/2"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
