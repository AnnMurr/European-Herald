import { Link } from "react-router-dom"
import { Copyright, Wrapper, Span } from "./styledFooter"

export const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <div>
                    <Link style={{ fontSize: '13px', padding: '0 5px', color: 'black' }} to={'/contact'}>Contact Us</Link>
                    <Link style={{ fontSize: '13px', padding: '0 5px', color: 'black' }} to={'/privacy-policy'}>Privacy Policy</Link>
                    <Link style={{ fontSize: '13px', padding: '0 5px', color: 'black' }} to={'/about'}>About Us</Link>
                </div>
                <Copyright>
                    <Span>© 2023 European Herald. All Rights Reserved.</Span>
                </Copyright>
            </Wrapper>
        </footer>
    )
}