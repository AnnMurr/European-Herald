import { List, Nav } from "./styledNavMenu";
import { Link } from "./components/link/link";
import { v4 as uuidv4 } from 'uuid';

export const NavMenu = () => {
    const links = ['Home', 'Sports', 'Health', 'Arts', 'Games', 'Business', 'Science', 'Shopping', 'Society', 'Computers']

    return (
        <Nav>
            <List>
               {links.map((item) => <Link key={uuidv4()} linkName={item} />)}
               
                {/* <Item>
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
                </Item> */}
            </List>
        </Nav>
    )
}