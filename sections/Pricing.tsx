"use client";
import PricingCard from "@/components/PricingCard";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  const handlePlanSelect = (planTitle: string) => {
    console.log(`Selected plan: ${planTitle}`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Pricing
        </h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-6 max-w-[540px] mx-auto">
          Free for limited features. Unlock more with our Pro and Business
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:justify-center lg:items-end lg:gap-12">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.title}
              title={tier.title}
              monthlyPrice={tier.monthlyPrice}
              buttonText={tier.buttonText}
              popular={tier.popular}
              inverse={tier.inverse}
              features={tier.features}
              onButtonClick={() => handlePlanSelect(tier.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
