import { NavLink } from "react-router-dom";
import { ButtonFactory } from "@repo/factories";

const ServiceCTA = ({ data = {} }) => {
  return (
    <section className=" p-10 text-center  bg-text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 font-serif text-primary ">
        {data.title}
      </h1>

      <ButtonFactory className="mt-6">
        <NavLink to={`${data.path}`}>{data.buttonText}</NavLink>
      </ButtonFactory>
    </section>
  );
};

export default ServiceCTA;
