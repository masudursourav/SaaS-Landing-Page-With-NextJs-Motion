import Logo from "@/assets/logosaas.png";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center py-3 bg-gray-800 text-white text-sm gap-3">
        <p className="hidden md:block text-white/60">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex gap-1 items-center">
          Get Start for free
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <Menu className="w-6 h-6 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="hover:text-black">
                About
              </a>
              <a href="#" className="hover:text-black">
                Features
              </a>
              <a href="#" className="hover:text-black">
                Customers
              </a>
              <a href="#" className="hover:text-black">
                Updates
              </a>
              <a href="#" className="hover:text-black">
                Help
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight hover:bg-gray-800">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
