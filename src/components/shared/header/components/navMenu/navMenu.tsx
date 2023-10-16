import { Link } from "./components/link/link";
import { v4 as uuidv4 } from 'uuid';
import { List, Nav } from "./styledNavMenu";

export const NavMenu = () => {
    const links = ['Home', 'Sports', 'Health', 'Arts', 'Games', 'Business', 'Science', 'Shopping', 'Society', 'Computers']

    return (
        <Nav>
            <List>
               {links.map((item) => <Link key={uuidv4()} linkName={item} />)}
            </List>
        </Nav>
    )
}