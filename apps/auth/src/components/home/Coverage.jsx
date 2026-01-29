import { SectionWrapper } from "@repo/ui";
export const Coverage = ({ coverageData = {} }) => {
  const { title, subtitle, stats } = coverageData;

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold  text-primary font-serif md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">{subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-green-background  rounded-2xl border border-gray-100 p-8 text-center transition hover:shadow-md"
            >
              <div className="text-4xl font-bold text-primary">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-text-white">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
