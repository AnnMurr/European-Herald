import { NavLink } from "react-router-dom";
import { Item, List } from "./styledNavMenu";

export const NavMenu = () => {
    return (
        <nav>
            <List>
                <NavLink
                    className={({ isActive }) => (isActive ? 'nav__link_active' : '')}
                    to={'/'}>
                    <Item>Home</Item>
                </NavLink>
            </List>
        </nav>
    )
}