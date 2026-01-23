import { journey } from "@repo/ui";
export const Journey = ({ data = [] }) => {
  return (
    <section className="relative grid md:grid-cols-2">
      {/* <section className="relative grid  grid-rows-[auto_1fr]"> */}
      {/* Image Row */}
      <div className="relative md:h-full h-105">
        <img
          src={journey}
          alt="Company journey and growth"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif underline underline-offset-8 decoration-warning">
            Our Journey
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Milestones that define our growth and commitment to logistics
            excellence.
          </p>
        </div>
      </div>

      {/* Content Row */}
      <div className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {data.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <span className="text-primary font-bold text-xl">
                  {item.year}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-warning">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
