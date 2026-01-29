import { SectionWrapper } from "@repo/ui";
export const Technology = ({ technologyData = {} }) => {
  const { title, subtitle, features } = technologyData;

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

        {/* Features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl bg-warning p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
