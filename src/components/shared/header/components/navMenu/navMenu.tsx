import { NavLink } from "react-router-dom";
import { Item, List, Nav } from "./styledNavMenu";

export const NavMenu = () => {
    return (
        <Nav>
            <List>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/'}>
                        Home
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/sports'}>
                        Sports
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/health'}>
                        Health
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/arts'}>
                        Arts
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/games'}>
                        Games
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/business'}>
                        Business
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/science'}>
                        Science
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/shopping'}>
                        Shopping
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/society'}>
                        Society
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                        to={'/category/computers'}>
                        Computers
                    </NavLink>
                </Item>
            </List>
        </Nav>
    )
}