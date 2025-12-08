import { NavLink } from "react-router-dom";
import type { NavItem, NavigationItemProps } from "../../types";

function NavItemProps({ data }: NavigationItemProps) {
  return (
    <nav className="nav-item-props-container">
      <ul>
        {data.map((item: NavItem) => (
          <li key={item.id} className="nav-item">
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItemProps;
