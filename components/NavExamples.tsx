import Nav from "./Nav";

// Example usage of the Nav component
export const NavExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Nav Component Examples</h2>

      {/* Default usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Navigation</h3>
        <div className="border p-4 rounded-lg">
          <Nav />
        </div>
      </div>

      {/* Custom nav items */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Navigation Items</h3>
        <div className="border p-4 rounded-lg">
          <Nav
            items={[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ]}
          />
        </div>
      </div>

      {/* Without button */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Navigation Without Button</h3>
        <div className="border p-4 rounded-lg">
          <Nav showButton={false} />
        </div>
      </div>

      {/* Different button variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Button Variants</h3>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Primary Button (default)
            </p>
            <Nav buttonVariant="primary" />
          </div>

          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Secondary Button</p>
            <Nav buttonVariant="secondary" buttonText="Sign Up" />
          </div>

          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Outline Button</p>
            <Nav buttonVariant="outline" buttonText="Learn More" />
          </div>

          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Ghost Button</p>
            <Nav buttonVariant="ghost" buttonText="Try Free" />
          </div>
        </div>
      </div>

      {/* Mobile/responsive styles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mobile/Vertical Layout</h3>
        <div className="border p-4 rounded-lg">
          <Nav className="flex flex-col gap-4 text-black/60 items-start" />
        </div>
      </div>

      {/* Custom styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <div className="border p-4 rounded-lg bg-gray-900">
          <Nav className="flex gap-6 text-white/60 items-center" />
        </div>
      </div>

      {/* With click handler */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Button Click Handler</h3>
        <div className="border p-4 rounded-lg">
          <Nav
            buttonText="Subscribe"
            onButtonClick={() => alert("Subscribe button clicked!")}
          />
        </div>
      </div>

      {/* External links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Mixed Internal and External Links
        </h3>
        <div className="border p-4 rounded-lg">
          <Nav
            items={[
              { label: "About", href: "#about" },
              { label: "Blog", href: "/blog" },
              { label: "GitHub", href: "https://github.com" },
              { label: "Contact", href: "#contact" },
            ]}
          />
        </div>
      </div>

      {/* Footer navigation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Footer Navigation</h3>
        <div className="border p-4 rounded-lg">
          <Nav
            items={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Support", href: "/support" },
            ]}
            showButton={false}
            className="flex gap-6 text-gray-500 text-sm items-center"
          />
        </div>
      </div>

      {/* Variant examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Navigation Variants</h3>

        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Header Variant (default)
            </p>
            <Nav variant="header" />
          </div>

          <div className="border p-4 rounded-lg bg-black">
            <p className="text-sm text-gray-300 mb-2">Footer Variant</p>
            <Nav variant="footer" showButton={false} />
          </div>

          <div className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Custom Variant with Manual Styling
            </p>
            <Nav
              variant="custom"
              className="flex gap-8 text-blue-600 items-center justify-center"
              linkClassName="hover:text-blue-800 font-semibold transition-colors duration-300"
              showButton={false}
            />
          </div>
        </div>
      </div>

      {/* Custom link styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Link Styling</h3>
        <div className="border p-4 rounded-lg">
          <Nav
            variant="custom"
            className="flex gap-6 items-center"
            linkClassName="text-purple-600 hover:text-purple-800 hover:underline font-medium"
            buttonText="Join Now"
            buttonVariant="outline"
          />
        </div>
      </div>
    </div>
  );
};
