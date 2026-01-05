import NavItemProps from "../components/props/NavItemProps";
import { navigationItem } from "../data";
import Image from "../components/props/Image";
import { logoData, headerBgData } from "../data";
import MobileNav from "../components/MobileNav";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="header-container">
      <section className="header-logo">
        <NavLink to="/">
          <Image data={logoData} />
        </NavLink>
      </section>
      <section className="header-nav">
        <NavItemProps data={navigationItem} />
      </section>
      <section className="header-mobile-nav">
        <MobileNav />
      </section>
      <section className="header-bg">
        <Image data={headerBgData} />
      </section>
    </header>
  );
}

export default Navigation;
