"use client";

import { Check } from "lucide-react";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular?: boolean;
  inverse?: boolean;
  features: string[];
  className?: string;
  onButtonClick?: () => void;
}

const PricingCard = ({
  title,
  monthlyPrice,
  buttonText,
  popular = false,
  inverse = false,
  features,
  className = "",
  onButtonClick,
}: PricingCardProps) => {
  const cardClasses = [
    "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
    inverse ? "bg-[#000000] border border-black text-white" : "bg-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleClasses = [
    "text-lg font-bold",
    inverse ? "text-white/70" : "text-black/50",
  ].join(" ");

  const priceSubtextClasses = [
    "tracking-tight font-bold",
    inverse ? "text-white/70" : "text-black/50",
  ].join(" ");

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-between">
        <h3 className={titleClasses}>{title}</h3>
        {popular && (
          <div className="text-sm inline-flex border border-white/40 px-4 py-1.5 rounded-xl">
            <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
              Most Popular
            </span>
          </div>
        )}
      </div>

      <div className="flex items-baseline gap-1 mt-6">
        <span className="text-4xl font-bold tracking-tighter leading-none">
          ${monthlyPrice}
        </span>
        <span className={priceSubtextClasses}>/month</span>
      </div>

      <Button
        className="w-full mt-6"
        variant={inverse ? "secondary" : "primary"}
        size="md"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>

      <ul className="flex flex-col gap-5 mt-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm flex items-center gap-4">
            <span className="text-green-500">
              <Check />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
