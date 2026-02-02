
import {SectionWrapper } from "@repo/ui"
const ServicesSection = ({services=[]}) => {

  return (
    <SectionWrapper >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <header className=" p-2 text-center mb-14">
          <h2 className="text-3xl font-serif md:text-4xl font-bold text-primary">
            Our Logistics Services
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            We provide complete transportation and logistics solutions tailored
            to your business needs.
          </p>
        </header>

        {/* Services Grid */}
        <div className=" p-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="group bg-warning border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
               
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl text-text-white font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-text-muted text-text-white text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
