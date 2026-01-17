import { ButtonFactory } from "@repo/factories";

export default function Hero({ branding }) {
  return (
    <section className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
      {/* LEFT CONTENT */}
      <div className="grid gap-6 bg-white p-2 rounded-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
          {branding.heroTitle}
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl">
          {branding.heroSubtitle}
        </p>

        <div className="grid grid-row-2 md:grid-cols-2 gap-4 mt-6">
          <ButtonFactory variant="primary" children="Get Started" size="lg" />
          <ButtonFactory variant="primary" children="Contact Sales" size="lg" />
        </div>
      </div>
      {/* RIGHT VISUAL */}
      <div className="bg-red-400 bg-white p-2 rounded-lg h-full">
        <img src={branding.heroImage} className="rounded-lg" />
      </div>
    </section>
  );
}
