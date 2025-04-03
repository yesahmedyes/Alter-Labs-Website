import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-8 lg:mt-10 bg-black/95 w-11/12 lg:w-2/3 mx-auto rounded-3xl z-50 relative">
      <div className="flex flex-row justify-between items-center px-8 py-3.5">
        <Image src="/logo.png" alt="logo" width={100} height={100} />

        <div className="hidden md:flex flex-row items-center justify-center gap-8">
          <div className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">Home</div>
          <div className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">About</div>
          <div className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">Services</div>
          <div className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">Contact</div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HambergerMenu className="w-6 h-6 stroke-white cursor-pointer" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-1 md:hidden bg-black/95 rounded-3xl py-4 px-8 absolute w-full">
          <div className="flex flex-col space-y-4">
            <div className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors">Home</div>
            <div className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors">About</div>
            <div className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors">Services</div>
            <div className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors">Contact</div>
          </div>
        </div>
      )}
    </div>
  );
}
