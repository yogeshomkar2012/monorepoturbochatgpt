import { SectionWrapper } from "@repo/ui";

const ServiceFeatures = ({ data }) => {
  console.log(data, "features");
  const grids = data.length > 5 ? 5 : data.length;
  return (
    <SectionWrapper>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-primary font-bold text-center mb-12 font-serif underline decoration-warning underline-offset-8">
          Features
        </h2>
        <div className={`grid gap-6 md:grid-cols-3 lg:grid-cols-${grids}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center"
            >
              <div className="text-primary text-2xl font-bold mb-2">
                {index + 1}
              </div>
              <p className="text-text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceFeatures;
