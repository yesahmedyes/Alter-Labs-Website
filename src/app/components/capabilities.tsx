"use client";

import { useState } from "react";
import Image from "next/image";

const capabilities = [
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    description:
      "NLP empowers machines to understand, process, and generate human language, making communication with AI more natural and intuitive.",
    features: [
      "Sentiment analysis",
      "Text summarization and classification",
      "Named entity recognition (NER)",
      "Language translation and transcription",
      "Chatbot and virtual assistant development",
    ],
    image: "/images/nlp.png",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Generative AI uses advanced machine learning models to create new content, including text, images, music, and even code.",
    features: [
      "AI-generated text and content creation",
      "Image synthesis and style transfer",
      "AI-assisted code generation",
      "Music and video generation",
      "Personalized creative assistance",
    ],
    image: "/images/gen-ai.jpg",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Computer Vision enables machines to interpret and process visual data, allowing them to make data-driven decisions based on images and videos.",
    features: [
      "Automated quality inspection",
      "Real-time object detection and tracking",
      "Optical Character Recognition (OCR)",
      "Surveillance and anomaly detection",
      "Visual search and image classification",
    ],
    image: "/images/computer-vision.jpg",
  },
  {
    id: "predictive-forecasting",
    title: "Predictive Forecasting",
    description:
      "Leverage historical data and AI models to anticipate trends, optimize decision-making, and improve future planning.",
    features: [
      "Demand and sales forecasting",
      "Financial and stock market predictions",
      "Supply chain and inventory optimization",
      "Risk assessment and fraud detection",
      "Customer behavior analysis",
    ],
    image: "/images/predictive-forecasting.jpg",
  },
  {
    id: "recommender-engines",
    title: "Recommender Engines",
    description:
      "Enhance user engagement with AI-powered recommendation systems tailored to individual preferences and behaviors.",
    features: [
      "Personalized product recommendations",
      "Content and media recommendations",
      "User behavior analysis and segmentation",
      "Dynamic pricing and promotions",
      "Cross-selling and upselling strategies",
    ],
    image: "/images/recommender-engines.jpg",
  },
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState("nlp");

  return (
    <section className="py-8 md:py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Our AI Capabilities</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We take care of everything from data collection and pre-processing to building and deploying your AI
            solution.
          </p>
        </div>

        <div className="flex flex-col space-y-6 md:space-y-8 pt-6 md:pt-8">
          <div className="border-b border-gray-200 w-full">
            <div className="overflow-x-auto scrollbar-hide -mb-px">
              <nav className="flex space-x-4 md:space-x-8 min-w-max">
                {capabilities.map((cap) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(cap.id)}
                    className={`py-3 md:py-4 px-1 border-b-2 font-medium text-xs md:text-sm whitespace-nowrap transition-colors ${
                      activeTab === cap.id
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {cap.id === "nlp" ? "NLP" : cap.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className={`flex flex-col gap-5 md:gap-6 ${activeTab === cap.id ? "block lg:grid lg:grid-cols-2" : "hidden"}`}
            >
              <div className="bg-[#F8F9FF] p-6 md:p-8 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{cap.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{cap.description}</p>

                {cap.features.length > 0 && (
                  <ul className="space-y-2 md:space-y-3">
                    {cap.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button className="mt-6 md:mt-8 bg-black text-white px-4 md:px-6 py-2 text-sm md:text-base rounded-lg border hover:bg-transparent cursor-pointer hover:text-black transition-all">
                  Get Started Now
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64 md:h-auto overflow-hidden">
                <div className="w-full h-full relative">
                  {cap.image && (
                    <Image
                      src={cap.image}
                      alt={`${cap.title} illustration`}
                      fill
                      className="object-contain md:object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={activeTab === cap.id}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
