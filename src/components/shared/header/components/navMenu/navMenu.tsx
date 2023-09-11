import { NavLink } from "react-router-dom";
import { Item, List } from "./styledNavMenu";

export const NavMenu = () => {
    return (
        <nav>
            <List>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/'}>
                        Home
                    </NavLink>
                </Item>
            </List>
        </nav>
    )
}