import { NavLink } from "react-router-dom";
import { Button } from "@repo/ui";
import { ButtonFactory } from "@repo/factories";
import { SectionWrapper } from "@repo/ui";
export const CallToAction = ({ callToActionData = {} }) => {
  const { title, subtitle, primaryAction, secondaryAction } = callToActionData;

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold  md:text-4xl text-warning">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-white/80">{subtitle}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <NavLink to={primaryAction.path}>
            <Button className="cursor-pointer text-primary border border-primary hover:bg-primary hover:text-text-white bg-white capitalize px-4 py-2 font-medium transition rounded focus:outline-none focus:ring-1 ">
              {primaryAction.label}
            </Button>
          </NavLink>
          <NavLink to={secondaryAction.path}>
            <ButtonFactory variant="primary">
              {secondaryAction.label}
            </ButtonFactory>
          </NavLink>
        </div>
      </div>
    </SectionWrapper>
  );
};
