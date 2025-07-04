import Logo from "@/assets/logosaas.png";
import Nav from "@/components/Nav";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-transparent">
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
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};
