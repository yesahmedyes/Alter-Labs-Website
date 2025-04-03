import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (id: string) => {
    setIsMenuOpen(false);

    const contactSection = document.getElementById(id);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 lg:mt-10 bg-black/95 w-11/12 lg:w-2/3 mx-auto rounded-3xl z-50 relative">
      <div className="flex flex-row justify-between items-center px-8 py-3.5">
        <Image src="/logo.png" alt="logo" width={100} height={100} />

        <div className="hidden md:flex flex-row items-center justify-center gap-8">
          <button
            className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => handleContactClick("home")}
          >
            Home
          </button>
          <Link
            href="/case-studies"
            className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors"
          >
            Case Studies
          </Link>
          <button
            className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => handleContactClick("services")}
          >
            Services
          </button>
          <Link href="/contact" className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HambergerMenu className="w-6 h-6 stroke-white cursor-pointer" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-1 md:hidden bg-black/95 rounded-3xl py-4 px-8 absolute w-full">
          <div className="flex flex-col space-y-4">
            <button
              className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => handleContactClick("home")}
            >
              Home
            </button>
            <Link
              href="/case-studies"
              className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors"
            >
              Case Studies
            </Link>
            <button
              className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors"
              onClick={() => handleContactClick("services")}
            >
              Services
            </button>
            <Link
              href="/contact"
              className="text-white text-sm py-2 cursor-pointer hover:text-gray-300 transition-colors text-left"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
