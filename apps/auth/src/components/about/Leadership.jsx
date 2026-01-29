import {SectionWrapper}from "@repo/ui"
export const Leadership = ({ data = [] }) => {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl text-primary font-bold font-serif underline underline-offset-8 decoration-warning">
            Leadership Team
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experienced professionals driving operational excellence and
            innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {data.map((leader, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-warning">
                {leader.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{leader.role}</p>
              <p className="text-slate-600 leading-relaxed">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
