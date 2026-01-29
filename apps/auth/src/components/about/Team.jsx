// packages
import { SectionWrapper } from "@repo/ui";
// packages
export const Team = ({ data = [] }) => {
  return (
    <SectionWrapper >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-primary font-serif underline underline-offset-8 decoration-warning">
            Leadership Team
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experienced professionals driving excellence in logistics and
            transportation.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {data.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-64 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mt-1">{member.role}</p>
                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
