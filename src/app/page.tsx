"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity, Bubble, Data, HambergerMenu, PathTool, PenTool2, People } from "iconsax-react";
import { useState } from "react";
import Navbar from "./navbar";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-screen bg-purple-50/30 w-full">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-green-300 opacity-50 blur-[100px] rounded-full -z-10"></div>

        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-300 opacity-50 blur-[100px] rounded-full -z-10"></div>

        <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-orange-300 opacity-50 blur-[100px] rounded-full -z-10"></div>

        <Navbar />

        <div className="flex flex-col items-center justify-center gap-8 text-center mx-auto h-[calc(100vh-25%)]">
          <div className="text-2xl lg:text-3xl font-bold w-full lg:w-1/3 leading-snug">
            Deep Learning, Machine Learning, and Reinforcement Learning
          </div>
          <div className="text-sm lg:text-lg leading-loose w-full lg:w-1/2">
            We work with 🏝️ independent creators, 🚀 tech startups and 💼 traditional businesses to create AI powered
            solutions that are tailored to their needs.
          </div>
          <div className="pt-8">
            <Link href="/contact" className="inline-block">
              <button className="bg-black text-white px-8 py-3 text-sm rounded-full">Get in touch</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bg-white w-full h-screen py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-16">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <People className="w-6 h-6 stroke-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Consultancy</h3>
              <p className="text-black text-sm leading-relaxed">
                We provide expert consultancy on AI trends across industries and help identify the right AI technology
                for your business.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Data className="w-6 h-6 stroke-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
              <p className="text-black text-sm leading-relaxed">
                We specialize in designing data management solutions for large-scale datasets and developing insightful
                analytics dashboards.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <PathTool className="w-6 h-6 stroke-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Models</h3>
              <p className="text-black text-sm leading-relaxed">
                We empower businesses by creating custom machine learning models tailored to your specific needs and
                trained on your data.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 stroke-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ML Operations</h3>
              <p className="text-black text-sm leading-relaxed">
                We design and maintain cost-effective, scalable production infrastructures for seamless ML model
                deployment.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
