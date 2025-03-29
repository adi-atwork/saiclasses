const faqs = [
  {
    question: "What classes do you offer?",
    answer:
      "We offer coaching for students from 6th to 10th standard, covering all major subjects including Mathematics, Science, and English.",
  },
  {
    question: "How are the batches organized?",
    answer:
      "We maintain small batch sizes of 15-20 students to ensure personal attention. Batches are organized according to class levels and subject requirements.",
  },
  {
    question: "What is the duration of classes?",
    answer:
      "Regular classes are conducted for 2 hours per subject. The frequency depends on the class and subject requirements.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide comprehensive study materials, practice papers, and test series for all subjects.",
  },
  {
    question: "How do you track student progress?",
    answer:
      "We conduct regular assessments, maintain progress reports, and organize parent-teacher meetings to discuss student performance.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Our fee structure varies based on the class and number of subjects. Please contact us for detailed information about fees.",
  },
  {
    question: "Do you offer demo classes?",
    answer:
      "Yes, we offer free demo classes to help students and parents make an informed decision.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Fees once paid are non-refundable. However, we can adjust the fees for future months in special cases.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
