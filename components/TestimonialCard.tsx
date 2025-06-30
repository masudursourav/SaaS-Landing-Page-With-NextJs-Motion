"use client";

import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
  className?: string;
}

const TestimonialCard = ({
  text,
  imageSrc,
  name,
  username,
  className = "",
}: TestimonialCardProps) => {
  const cardClasses = [
    "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses}>
      <div>
        <p className="text-lg text-[#010D3E] mt-2">{text}</p>
        <div className="flex items-center mt-6">
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="flex flex-col ml-4">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight text-gray-500">
              {username}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
