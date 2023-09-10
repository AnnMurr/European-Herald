import { Link } from "react-router-dom"
import { Container, Wrapper } from "./styledFooter"

export const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <Link style={{fontSize: '13px', padding: '0 5px', color: 'black'}} to={'/contact'}>Contact Us</Link>
                <Link style={{fontSize: '13px', padding: '0 5px', color: 'black'}} to={'/privacy-policy'}>Privacy Policy</Link>  
            </Wrapper>
        </footer>
    )
}