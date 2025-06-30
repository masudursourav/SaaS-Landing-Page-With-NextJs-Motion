import SpringImage from "@/assets/spring.png";
import StarImage from "@/assets/star.png";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="relative">
          <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-6 max-w-[540px] mx-auto">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={StarImage}
            alt="Star Image"
            width={360}
            height={360}
            className="hidden md:block absolute md:-left-[250px] md:-top-[137px] lg:-left-[100px]"
          />
          <Image
            src={SpringImage}
            alt="Spring Image"
            width={360}
            height={360}
            className="hidden md:block absolute md:bottom-0 md:-right-[180px] lg:-right-[100px]"
          />
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <Button variant="primary" size="lg">
            Get For Free
          </Button>
          <Button variant="ghost" size="lg">
            <span>Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
