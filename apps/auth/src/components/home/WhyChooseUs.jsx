export const WhyChooseUs = ({ whyChooseusData }) => {
  const { title, subtitle, items } = whyChooseusData;

  return (
    <section className="bg-white py-20 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold font-serif text-primary md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* USP Grid */}
        <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-green-background rounded-2xl border border-gray-200 p-6 transition hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
