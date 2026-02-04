import { NavLink } from "react-router-dom";

const Footer = ({ brand, links, copyright }) => {
  console.log(brand);
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">{brand.name}</h3>
            <p className="text-sm leading-relaxed">{brand.description}</p>
          </section>

          {/* Company */}
          <nav aria-label="Company">
            <h4 className="text-white font-semibold mb-4 ">Company</h4>
            <ul className="space-y-2">
              {links.company.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* branches */}
          <nav aria-label="Legal">
            <h4 className="text-white font-semibold mb-4">Branchs</h4>
            <ul className="space-y-2">
              {links.legal.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* branches */}
          {/* Legal */}
          <nav aria-label="Legal">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((item, index) => (
                <div key={index}>
                  <span></span>
                  <li>
                    <NavLink
                      to={item.path}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
