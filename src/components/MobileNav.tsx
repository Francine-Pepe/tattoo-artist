import Icons from "./props/Icons";
import { useState } from "react";
import NavItemProps from "./props/NavItemProps";
import { navigationItem, headerBgData } from "../data";
import Image from "./props/Image";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleClose = () => setOpen(false);

  

  return (
    <section className="mobile-nav-container" >
      {!open &&  (
        <button onClick={toggleMenu} className={`open-menu-icon ${open ? "open" : ""}`} >
          <Icons name="menu"  />
        </button>
      )}

      {/* Background overlay */}
      <div
        className={`overlay ${open ? "overlay--visible" : ""}`}
        onClick={handleClose}
      />

      {open && (
        <section className="mobile-nav-open">
          <button className="mobile-close-btn" onClick={handleClose}>
            <Icons name="close" />
          </button>

          <section className="mobile-nav-image">
            <Image data={headerBgData} />
          </section>

          <NavItemProps data={navigationItem} />
          <Image data={headerBgData} />
        </section>
      )}
    </section>
  );
}

export default MobileNav;
