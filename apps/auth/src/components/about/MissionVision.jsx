import { SectionWrapper } from "@repo/ui";
export const MissionVision = ({ data = [] }) => {
  return (
    <SectionWrapper >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className=" font-serif text-3xl font-bold text-primary  underline underline-offset-8 decoration-warning">
            What Drives Us
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our purpose, direction, and principles define how we move logistics
            forward.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
