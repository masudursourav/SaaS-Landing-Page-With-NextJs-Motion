import TestimonialCard from "./TestimonialCard";

export const TestimonialCardExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">
        TestimonialCard Component Examples
      </h2>

      {/* Basic usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            text="This product has completely transformed how we work. Highly recommended!"
            imageSrc="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
            name="Sarah Johnson"
            username="@sarah_j"
          />

          <TestimonialCard
            text="Amazing features and excellent support. Five stars!"
            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            name="Mike Chen"
            username="@mike_chen"
          />

          <TestimonialCard
            text="The user interface is intuitive and the performance is outstanding."
            imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            name="Emily Davis"
            username="@emily_dev"
          />
        </div>
      </div>

      {/* Different text lengths */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Text Lengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            text="Great!"
            imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            name="Tom Wilson"
            username="@tom_w"
          />

          <TestimonialCard
            text="This is a much longer testimonial that demonstrates how the component handles extended text content. It should wrap nicely and maintain proper spacing throughout the card layout, ensuring readability and visual appeal even with longer content."
            imageSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
            name="Jessica Rodriguez"
            username="@jess_codes"
          />
        </div>
      </div>

      {/* Custom styling */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            text="This testimonial has custom styling applied."
            imageSrc="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
            name="Alex Thompson"
            username="@alex_t"
            className="border-2 border-blue-500 bg-blue-50"
          />

          <TestimonialCard
            text="Another example with different custom styling."
            imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
            name="David Kim"
            username="@david_kim"
            className="border-2 border-green-500 bg-green-50"
          />
        </div>
      </div>

      {/* Responsive layout demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Responsive Layout Demo</h3>
        <p className="text-gray-600 mb-4">
          The cards below demonstrate responsive behavior:
          <br />
          • Mobile: 1 column
          <br />
          • Tablet: 2 columns
          <br />• Desktop: 3 columns
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <TestimonialCard
              key={i}
              text={`This is testimonial #${
                i + 1
              }. It shows how the component works in a responsive grid layout.`}
              imageSrc={`https://images.unsplash.com/photo-${
                1500000000000 + i * 100000
              }?w=150&h=150&fit=crop&crop=face`}
              name={`User ${i + 1}`}
              username={`@user${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Real-world examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Real-world Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            text="The analytics dashboard has helped us make data-driven decisions that increased our revenue by 40%."
            imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
            name="Lisa Chen"
            username="@lisa_data"
          />

          <TestimonialCard
            text="Customer support is phenomenal. They responded within minutes and solved our integration issue immediately."
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
            name="Marcus Johnson"
            username="@marcus_dev"
          />

          <TestimonialCard
            text="We migrated our entire workflow to this platform and haven't looked back. The time savings are incredible."
            imageSrc="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
            name="Anna Kowalski"
            username="@anna_pm"
          />
        </div>
      </div>
    </div>
  );
};
