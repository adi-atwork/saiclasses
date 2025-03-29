import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About SAI Classes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering students with quality education and personalized
            attention since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              At SAI Classes, we believe in nurturing young minds through
              comprehensive education that goes beyond textbooks. Our mission is
              to provide quality education that helps students excel in their
              academics while developing critical thinking and problem-solving
              skills.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Personalized attention to every student
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Expert faculty with years of teaching experience
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Regular assessments and feedback
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {/* Add your about page image here */}
            <Image
              src="/class.jpg"
              alt="About SAI Classes"
              layout="fill"
              objectFit="cover"
            />
            {/* <div className="absolute inset-0 bg-gray-200" /> */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading educational institution that transforms students
              into successful learners and responsible citizens.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and student-centric approach
              form the cornerstone of our institution.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-600">
              We are committed to providing the best educational experience
              through continuous improvement and adaptation to modern teaching
              methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
