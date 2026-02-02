import { Link } from "react-router-dom";
// packages
import { SectionWrapper } from "@repo/ui";
// packages

const CoreServices = ({ data = [] }) => {
  
  return (
    <SectionWrapper>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary underline decoration-warning underline-offset-8">
          Our Core Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service, index) => (
            <Link to={service.slug} key={index}>
              <div
                key={index}
                className="bg-white p-6 group rounded-2xl shadow-sm border border-warning hover:shadow-md transition"
              >
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <service.icon
                      size="20"
                      className="text-warning group-hover:text-primary"
                    />
                  </div>
                </div>

                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CoreServices;
