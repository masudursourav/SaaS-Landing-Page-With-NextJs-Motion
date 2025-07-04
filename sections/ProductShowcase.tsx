"use client";
import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-6">
            Streamline your workflow and boost your productivity with our
            comprehensive suite of tools designed to help you achieve more in
            less time.
          </p>
        </div>
        <div className="relative">
          <Image
            src={ProductImage}
            alt="Product Image"
            className="mt-10 rounded-lg shadow-lg"
          />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -top-32 -right-36"
            style={{ translateY }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
};
