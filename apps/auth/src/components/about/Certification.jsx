// packages
import { SectionWrapper } from "@repo/ui";
// packages

export const Certifications = ({ data = [] }) => {
  return (
    <SectionWrapper className="">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-primary font-serif underline underline-offset-8 decoration-warning">
            Certifications & Trust
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Recognized standards and partners that reinforce our reliability and
            compliance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 object-contain"
                />
              </div>

              <span className="text-sm font-medium text-slate-700 text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
