import { Activity, PathTool } from "iconsax-react";
import { Data, People } from "iconsax-react";

export default function Services() {
  return (
    <div className="bg-white w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-50 p-8 rounded-lg">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <People className="w-6 h-6 stroke-black" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Consultancy</h3>
            <p className="text-black text-sm leading-relaxed">
              We provide expert consultancy on AI trends across industries and help identify the right AI technology for
              your business.
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
    </div>
  );
}
