import { SectionWrapper } from "@repo/ui";
export const HowItWorks = ({ HowItWorksData = {} }) => {
  const { title, subtitle, steps } = HowItWorksData;

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-primary font-serif md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">{subtitle}</p>
        </div>

        {/* Steps */}
        <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.id}
              className="bg-warning group relative rounded-2xl  p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Step Number */}
              <div className="mb-4 text-5xl font-bold text-primary group-hover:text-primary/40 transition">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
