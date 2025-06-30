import Logo from "@/assets/logosaas.png";
import Nav from "@/components/Nav";
import { Dribbble, Instagram, Linkedin, Twitch, Youtube } from "lucide-react";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <Image src={Logo} alt="logo" width={40} height={40} />

          <Nav
            variant="footer"
            showButton={false}
            className="flex flex-col justify-center items-center gap-5 md:flex-row"
          />

          <div className="flex gap-6">
            <Linkedin className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            <Dribbble className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            <Twitch className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
            <Youtube className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MasudurSourav. All rights
              reserved.
            </p>
            <p className="text-sm text-gray-500">
              Made with ❤️ using Next.js and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
