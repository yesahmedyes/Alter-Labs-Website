"use client";

import { ArrowDown, ArrowDown2 } from "iconsax-react";
import { useState } from "react";

const faqs = [
  {
    question: "What AI services do you provide?",
    answer:
      "We offer a comprehensive suite of AI services including Natural Language Processing, Generative AI, Computer Vision, Predictive Forecasting, and Recommender Engines. Our team can help with everything from data collection and preprocessing to model development, deployment, and ongoing maintenance.",
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer:
      "Implementation timelines vary based on the complexity of your project and specific requirements. Simple solutions can be deployed in 4-6 weeks, while more complex enterprise implementations may take 3-6 months. During our initial consultation, we'll provide a detailed timeline tailored to your project.",
  },
  {
    question: "Do I need large amounts of data to implement AI solutions?",
    answer:
      "Not necessarily. While having quality data is important, we can work with various data volumes. For organizations with limited data, we can leverage transfer learning, synthetic data generation, or pre-trained models. We'll assess your data situation and recommend the most effective approach.",
  },
  {
    question: "How do you ensure the security and privacy of our data?",
    answer:
      "Data security and privacy are our top priorities. We implement robust encryption, access controls, and compliance measures aligned with industry standards (GDPR, HIPAA, etc.). All client data is handled according to strict confidentiality agreements, and we can work within your existing security infrastructure.",
  },
  {
    question: "What's the typical return on investment for AI implementation?",
    answer:
      "ROI varies by industry and use case, but our clients typically see returns within 6-12 months of deployment. Benefits include increased operational efficiency (20-30% on average), enhanced customer experiences, reduced costs, and new revenue opportunities. We'll work with you to establish clear metrics for measuring success.",
  },
  {
    question: "Can you integrate AI solutions with our existing systems?",
    answer:
      "Yes, we specialize in seamless integration with your existing technology stack. Our solutions are designed to work with your current systems, whether they're legacy platforms or modern infrastructure. We provide APIs, webhooks, and custom connectors to ensure smooth integration with minimal disruption.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-6 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Get answers to common questions about our services and implementation process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-3 md:p-4 text-left font-medium text-gray-900"
              >
                <span className="text-sm md:text-base font-medium">{faq.question}</span>
                <ArrowDown2
                  className={`w-5 h-5 stroke-black transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-4 md:p-4 pt-0 md:pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm md:text-base leading-loose">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
