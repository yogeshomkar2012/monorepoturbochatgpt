const CoreServices = ({ data = [] }) => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif text-primary underline decoration-warning underline-offset-8">
          Our Core Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-warning hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
