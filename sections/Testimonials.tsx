"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  const renderTestimonials = (
    testimonialsToRender: typeof testimonials,
    startIndex = 0
  ) =>
    testimonialsToRender.map((testimonial, index) => (
      <TestimonialCard
        key={startIndex + index}
        text={testimonial.text}
        imageSrc={testimonial.imageSrc}
        name={testimonial.name}
        username={testimonial.username}
      />
    ));

  const renderColumn = (
    testimonialSlice: typeof testimonials,
    startIndex: number,
    key: string,
    duration: number = 25
  ) => (
    <div key={key} className="flex flex-col gap-6 overflow-hidden">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {renderTestimonials(testimonialSlice, startIndex)}
        {renderTestimonials(testimonialSlice, startIndex)}
      </motion.div>
    </div>
  );

  // Testimonial groups
  const testimonialGroups = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-[540px] mx-auto">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            What our users say
          </h2>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        <div className="mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] overflow-hidden">
          <div className="flex flex-col gap-6 md:hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={{
                translateY: "-50%",
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {renderTestimonials(testimonialGroups[0])}
              {renderTestimonials(testimonialGroups[0])}
            </motion.div>
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {testimonialGroups
              .slice(0, 2)
              .map((group, index) =>
                renderColumn(
                  group,
                  index * 3,
                  `tablet-col-${index}`,
                  45 + index * 8
                )
              )}
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {testimonialGroups.map((group, index) =>
              renderColumn(
                group,
                index * 3,
                `desktop-col-${index}`,
                50 + index * 10
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
