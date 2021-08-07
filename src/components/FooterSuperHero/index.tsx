import React from "react";

import logoSuperHero from "../../assets/images/super-hero.svg";
import footerLogo from "../../assets/images/footer.svg";

const FooterSuperHero = () => {
  return (
    <div className=" d-flex flex-column w-100 h-25 align-items-center justify-content-center">
      <img src={logoSuperHero} alt="superHero" />
      <img src={footerLogo} alt="footer" className="mt-5 mb-5" />
    </div>
  );
};

export default FooterSuperHero;
