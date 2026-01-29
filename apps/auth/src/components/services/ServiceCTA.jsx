import { NavLink } from "react-router-dom";
import { ButtonFactory } from "@repo/factories";
// packages
import { SectionWrapper } from "@repo/ui";
// packages
const ServiceCTA = ({ data = {} }) => {
  return (
    <SectionWrapper className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 font-serif text-primary ">
          {data.title}
        </h1>
        <NavLink to={`${data.path}`}>
          <ButtonFactory className="mt-6">{data.buttonText}</ButtonFactory>
        </NavLink>
      </div>
    </SectionWrapper>
  );
};

export default ServiceCTA;
