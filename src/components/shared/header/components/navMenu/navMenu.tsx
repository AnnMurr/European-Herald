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
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/sports'}>
                        Sports
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/health'}>
                        Health
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/arts'}>
                        Arts
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/games'}>
                        Games
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/business'}>
                        Business
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/science'}>
                        Science
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/shopping'}>
                        Shopping
                    </NavLink>
                </Item>
            </List>
        </nav>
    )
}