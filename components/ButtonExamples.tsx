import Button from "./Button";

// Example usage of the Button component
export const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Button Component Examples</h2>

      {/* Different variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* With icons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Icons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button leftIcon="→">With Left Icon</Button>
          <Button rightIcon="↗">With Right Icon</Button>
          <Button leftIcon="💾" rightIcon="✓">
            Both Icons
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4 flex-wrap">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </div>

      {/* Full width */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Full Width</h3>
        <Button fullWidth variant="primary">
          Full Width Button
        </Button>
      </div>

      {/* Custom onClick */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Actions</h3>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          <Button
            variant="outline"
            onClick={() => console.log("Logged to console")}
          >
            Log to Console
          </Button>
        </div>
      </div>
    </div>
  );
};
