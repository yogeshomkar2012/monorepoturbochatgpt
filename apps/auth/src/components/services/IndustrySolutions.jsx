const IndustrySolutions = ({ data = [] }) => {
  return (
    <section className=" px-6 bg-white py-4">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif text-primary underline decoration-warning underline-offset-8">
        Industries We Serve
      </h2>

      <div className="grid gap-6 md:grid-cols-3 text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-warning text-primary rounded-xl p-6 font-semibold  hover:bg-primary hover:text-white transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySolutions;
