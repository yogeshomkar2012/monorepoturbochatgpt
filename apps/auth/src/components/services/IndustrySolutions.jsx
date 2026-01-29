import { SectionWrapper } from "@repo/ui";
const IndustrySolutions = ({ data = [] }) => {
  const gridLenght = data.length >= 5 ? 5 : 4;
  return (
    <SectionWrapper>
      <h2 className="text-3xl font-bold text-center mb-10 font-serif text-primary underline decoration-warning underline-offset-8">
        Industries We Serve
      </h2>

      <div className={`grid gap-6 md:grid-cols-5 text-center`}>
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-border text-primary rounded-xl p-6 font-semibold  hover:bg-primary hover:text-white transition"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IndustrySolutions;
