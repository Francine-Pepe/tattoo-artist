import { NavLink } from "react-router-dom";
import type { NavItem } from "../../types";

interface NavItemProps {
  data: NavItem[];
  onItemClick?: () => void;
}

function NavItemProps({ data, onItemClick }: NavItemProps) {
  return (
    <nav className="nav-item-props-container">
      <ul>
        {data.map((item: NavItem) => (
          <li key={item.id} className="nav-item">
            <NavLink to={item.link} onClick={onItemClick}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItemProps;
