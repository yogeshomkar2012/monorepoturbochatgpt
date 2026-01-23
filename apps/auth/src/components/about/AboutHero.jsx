const AboutHero = () => {
  return (
    <section className="w-full bg-text-white">
      <div className="container py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center p-4">
          <span className="inline-block text-sm font-medium font-serif text-green-background">
            About Our Company
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-serif  text-primary underline underline-offset-8 decoration-warning">
            <span className="">Delivering Logistics Excellence</span>
            <span className=""> Across Every Mile</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            We are a technology-driven logistics company committed to
            reliability, transparency, and speed. From local distribution to
            nationwide freight, we move businesses forward.
          </p>

          <div className="flex items-center justify-around gap-8">
            <div>
              <p className="text-2xl font-bold text-primary">10+ Years</p>
              <p className="text-sm text-muted-foreground">
                Industry Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground">
                Successful Deliveries
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square bg-background rounded-2xl shadow-soft flex items-center justify-center">
            <span className="text-muted-foreground">
              Illustration / Company Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
