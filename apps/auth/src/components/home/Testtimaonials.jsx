import { SectionWrapper } from "@repo/ui";
export const Testimonials = ({ testimonialsData = {} }) => {
  const { title, subtitle, testimonials } = testimonialsData;

  return (
    <SectionWrapper >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary font-serif md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">{subtitle}</p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-100 bg-green-background p-8 shadow-sm"
            >
              <p className="text-sm text-text-white leading-relaxed">
                “{item.message}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-text-white">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
