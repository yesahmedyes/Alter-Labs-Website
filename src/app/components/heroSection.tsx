import Link from "next/link";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="h-screen bg-purple-50/30 w-full">
      <div className="absolute top-1/3 left-1/4 w-48 h-48 lg:w-100 lg:h-100 bg-green-300 opacity-50 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 lg:w-100 lg:h-100 bg-purple-300 opacity-50 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 left-1/2 w-48 h-48 lg:w-100 lg:h-100 bg-orange-300 opacity-50 blur-[100px] rounded-full -z-10"></div>

      <Navbar />

      <div className="flex flex-col items-center justify-center gap-8 text-center mx-auto h-[calc(100vh-20%)] lg:h-[calc(100vh-23%)] px-5">
        <div className="text-2xl lg:text-3xl font-bold w-full lg:w-2/5 leading-snug">
          Deep Learning, Machine Learning, and Reinforcement Learning
        </div>
        <div className="text-sm lg:text-lg leading-loose w-full lg:w-3/5">
          We work with 🏝️ independent creators, 🚀 tech startups and 💼 traditional businesses to create AI powered
          solutions that are tailored to their needs.
        </div>
        <div className="pt-8">
          <button className="bg-black text-white px-8 py-3 text-sm rounded-full border hover:bg-transparent cursor-pointer hover:text-black transition-all">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
