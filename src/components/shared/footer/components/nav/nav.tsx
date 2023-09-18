import { List, StyledLink } from "./styledNav"

export const NavMenu = () => {
    return (
        <List>
            <li>
                <StyledLink to={'/contact'}>Contact Us</StyledLink>
            </li>
            <li>
                <StyledLink to={'/privacy-policy'}>Privacy Policy</StyledLink>
            </li>
            <li>
                <StyledLink to={'/about'}>About Us</StyledLink>
            </li>
        </List>
    )
}