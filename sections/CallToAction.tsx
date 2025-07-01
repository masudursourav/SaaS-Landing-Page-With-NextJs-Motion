"use client";
import SpringImage from "@/assets/spring.png";
import StarImage from "@/assets/star.png";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
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
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            height={360}
            className="hidden md:block absolute md:-left-[250px] md:-top-[137px] lg:-left-[100px]"
            style={{ translateY, rotateX, rotateZ: rotateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring Image"
            width={360}
            height={360}
            className="hidden md:block absolute md:bottom-0 md:-right-[180px] lg:-right-[100px]"
            style={{ translateY, rotateX: rotateY, rotateZ: rotateX }}
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
