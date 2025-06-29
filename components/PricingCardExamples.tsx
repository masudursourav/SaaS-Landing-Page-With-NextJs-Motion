import PricingCard from "./PricingCard";

// Example usage of the PricingCard component
export const PricingCardExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">
        PricingCard Component Examples
      </h2>

      {/* Basic usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard
            title="Basic"
            monthlyPrice={5}
            buttonText="Get Started"
            features={["5 projects", "10GB storage", "Email support"]}
          />
        </div>
      </div>

      {/* Different variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Variants</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard
            title="Standard"
            monthlyPrice={10}
            buttonText="Choose Standard"
            features={[
              "20 projects",
              "50GB storage",
              "Priority support",
              "Analytics dashboard",
            ]}
          />

          <PricingCard
            title="Premium"
            monthlyPrice={25}
            buttonText="Go Premium"
            popular={true}
            inverse={true}
            features={[
              "Unlimited projects",
              "500GB storage",
              "24/7 support",
              "Advanced analytics",
              "Custom integrations",
              "Team collaboration",
            ]}
          />

          <PricingCard
            title="Enterprise"
            monthlyPrice={50}
            buttonText="Contact Sales"
            features={[
              "Everything in Premium",
              "Unlimited storage",
              "Dedicated support",
              "Custom solutions",
              "SLA guarantee",
              "Security compliance",
            ]}
          />
        </div>
      </div>

      {/* Free tier */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Free Tier</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard
            title="Free"
            monthlyPrice={0}
            buttonText="Start Free"
            features={["1 project", "1GB storage", "Community support"]}
          />
        </div>
      </div>

      {/* With custom styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard
            title="Custom"
            monthlyPrice={15}
            buttonText="Try Custom"
            className="border-2 border-blue-500"
            features={[
              "Custom feature 1",
              "Custom feature 2",
              "Custom feature 3",
            ]}
          />
        </div>
      </div>

      {/* With click handlers */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Click Handlers</h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <PricingCard
            title="Starter"
            monthlyPrice={8}
            buttonText="Subscribe"
            onButtonClick={() => alert("Starter plan selected!")}
            features={["10 projects", "25GB storage", "Email support"]}
          />

          <PricingCard
            title="Pro"
            monthlyPrice={20}
            buttonText="Upgrade to Pro"
            popular={true}
            onButtonClick={() => console.log("Pro plan selected")}
            features={[
              "50 projects",
              "100GB storage",
              "Phone support",
              "Advanced features",
            ]}
          />
        </div>
      </div>

      {/* Annual pricing example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Annual Pricing (Custom Implementation)
        </h3>
        <div className="flex gap-6 flex-wrap justify-center">
          <div className="space-y-2">
            <PricingCard
              title="Monthly"
              monthlyPrice={12}
              buttonText="Bill Monthly"
              features={["All features", "Monthly billing", "Cancel anytime"]}
            />
            <p className="text-center text-sm text-gray-500">Billed monthly</p>
          </div>

          <div className="space-y-2">
            <PricingCard
              title="Annual"
              monthlyPrice={10}
              buttonText="Save 17%"
              popular={true}
              inverse={true}
              features={[
                "All features",
                "Annual billing",
                "2 months free",
                "Priority support",
              ]}
            />
            <p className="text-center text-sm text-gray-300">
              Billed annually ($120/year)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
