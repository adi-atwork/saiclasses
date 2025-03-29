"use client";

import Navbar from "@/components/Navbar";
import { BookOpen, Users, Award, Clock } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative isolate">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold bg-gray-900 text-white mb-6">
                <span>Admissions Open 2025-26</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                Excellence in Education for &nbsp;
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  6th to 12th Standard
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join Govindpuram Ghaziabad premier coaching institute where we
                transform young minds through personalized attention, expert
                faculty, and proven teaching methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="rounded-full bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  Book Free Demo Class
                </Link>
                <Link
                  href="/courses"
                  className="rounded-full border-2 border-gray-900 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>

            {/* Right Column - Stats & Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <Users className="h-8 w-8 text-gray-900 mb-3" />
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-600">Successful Students</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <Award className="h-8 w-8 text-gray-900 mb-3" />
                <h3 className="text-2xl font-bold">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <BookOpen className="h-8 w-8 text-gray-900 mb-3" />
                <h3 className="text-2xl font-bold">All</h3>
                <p className="text-gray-600">Subjects Covered</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <Clock className="h-8 w-8 text-gray-900 mb-3" />
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 mb-4">
                TRUSTED BY PARENTS ACROSS GOVINDPURAM, GHAZIABAD
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="text-gray-500 font-semibold">
                  ★★★★★ 4.8/5 Parent Rating
                </div>
                <div className="text-gray-500 font-semibold">
                  Board Toppers Every Year
                </div>
                <div className="text-gray-500 font-semibold">
                  Expert Faculty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
