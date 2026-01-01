import React from "react";
import { assets } from "../assets/assets";
import { footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 sm:px-30 bg-red-600 select-none">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/30 text-gray-500">
        <div>
          <img className="w-50" src={assets.logo} alt="La Económica" />
          <p className="max-w-102.5 mt-6 text-white">
            Proveemos mas de 60 marcas para todos nuestros colegas comerciantes
            a lo largo de todo zona sur
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:underline transition text-white/90"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-1 text-center text-sm md:text-base text-white">
        Copyright {new Date().getFullYear()} © MayoristaLaEconomica.com
      </p>
      <p className=" text-center text-sm md:text-base text-white/50 text-[13px]">
        Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;
