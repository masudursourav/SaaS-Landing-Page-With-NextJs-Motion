"use client";
import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulseLogo from "@/assets/logo-pulse.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
import Image from "next/image";
export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto" />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />

            <Image src={AcmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="h-8 w-auto" />
            <Image src={EchoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image src={PulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
