"use client";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:2-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Streamline your workflow and boost your productivity with our
              comprehensive suite of tools designed to help you achieve more in
              less time.
            </p>
            <div className="flex gap-1 items-center mt-6">
              <Button variant="primary" size="md">
                Get For Free
              </Button>
              <Button variant="ghost" size="md">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-10/12 relative">
            <motion.img
              alt="Cog Image"
              src={CogImage.src}
              className="md:absolute md:h-full md:w-auto md:max-w-none"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              alt="Cylinder Image"
              src={CylinderImage.src}
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              alt="Noodle Image"
              src={noodleImage.src}
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
