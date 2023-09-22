import { Link } from "./components/link/link";
import { List } from "./styledNav";

export const NavMenu = () => {
    return (
        <List>
            <Link link={'/contact'} text={'Contact Us'} />
            <Link link={'/privacy-policy'} text={'Privacy Policy'} />
            <Link link={'/about'} text={'About Us'} />
        </List>
    )
}