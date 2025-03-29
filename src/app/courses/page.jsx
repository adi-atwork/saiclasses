import Link from "next/link";

const courses = [
  {
    grade: "Class 6",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    features: [
      "Interactive Learning",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 7",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    features: [
      "Interactive Learning",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 8",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    features: [
      "Interactive Learning",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 9",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    features: [
      "Board Exam Preparation",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 10",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    features: [
      "Board Exam Preparation",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 11",
    subjects: ["Mathematics", "Sociology", "Political Science"],
    features: [
      "Board Exam Preparation",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
  {
    grade: "Class 12",
    subjects: ["Mathematics", "Sociology", "Political Science"],
    features: [
      "Board Exam Preparation",
      "Regular Tests",
      "Doubt Clearing Sessions",
    ],
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help students excel in
            their academics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.grade}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {course.grade}
                </h2>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Subjects Covered:
                  </h3>
                  <ul className="space-y-2">
                    {course.subjects.map((subject) => (
                      <li key={subject} className="text-gray-600">
                        • {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Features:
                  </h3>
                  <ul className="space-y-2">
                    {course.features.map((feature) => (
                      <li key={feature} className="text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
