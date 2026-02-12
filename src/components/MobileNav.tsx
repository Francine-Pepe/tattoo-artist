import Icons from "./props/Icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavItemProps from "./props/NavItemProps";
import { navigationItem, headerBgData } from "../data";
import Image from "./props/Image";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 0);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <section className="mobile-nav-container">
      {!open && (
        <button
          onClick={toggleMenu}
          className={`open-menu-icon ${open ? "open" : ""}`}
        >
          <Icons name="menu" />
        </button>
      )}

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

          <NavItemProps data={navigationItem} onItemClick={handleClose} />

          <Image data={headerBgData} />
        </section>
      )}
    </section>
  );
}

export default MobileNav;
