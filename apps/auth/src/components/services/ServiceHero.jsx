export const ServiceHero = ({ data = {} }) => {
  const { title, subtitle, description } = data;
  return (
    <section className=" bg-slate-900 text-white w-full py-16 justify-center grid gap-6">
      <h1 className="text-4xl font-bold font-serif text-center">{title}</h1>
      <p className="text-xl   text-center">{subtitle}</p>
      <p className="max-w-2xl text-center">{description}</p>
    </section>
  );
};

export default ServiceHero;
