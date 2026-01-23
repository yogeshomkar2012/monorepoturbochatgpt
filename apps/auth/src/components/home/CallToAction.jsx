import { NavLink } from "react-router-dom";
import { Button } from "@repo/ui";

export const CallToAction = ({ callToActionData = {} }) => {
  const { title, subtitle, primaryAction, secondaryAction } = callToActionData;

  return (
    <section className="bg-primary rounded-2xl py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold  md:text-4xl text-warning">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-white/80">{subtitle}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <NavLink to={primaryAction.path}>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold">
              {primaryAction.label}
            </Button>
          </NavLink>

          <NavLink to={secondaryAction.path}>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
            >
              {secondaryAction.label}
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
