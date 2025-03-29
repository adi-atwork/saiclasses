import Image from "next/image";
import Link from "next/link";
import HeroSection from "./LandingPageComponent/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import LearnWithFunSection from "@/components/LearnWithFunSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              SAI Coaching Classes - Where Success Begins!
            </h1>
            <p className="text-xl mb-8">
              Nurturing young minds with quality education from 6th to 10th
              standard
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      </section> */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Benefits
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            At SAI Coaching Classes, we are dedicated to providing a nurturing
            and effective learning environment. Our experienced faculty,
            personalized approach, and innovative teaching methods ensure that
            every student receives the support they need to excel academically
            and develop essential life skills.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Faculty",
                description:
                  "Learn from qualified teachers with years of experience",
              },
              {
                title: "Personalized Learning",
                description: "Small batch sizes ensuring individual attention",
              },
              {
                title: "Interactive Learning",
                description: "Engaging teaching methods with modern tools",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Classes 6th to 10th
              </h3>
              <p className="text-gray-600">
                All subjects covered with comprehensive study material
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Classes 11th & 12th
              </h3>
              <p className="text-gray-600">
                Specialized coaching for Mathematics, Sociology and Political
                Science
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn With Fun Section */}
      {/* <LearnWithFunSection /> */}

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
