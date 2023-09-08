import { Link } from "react-router-dom";
import { LogoContainer, LogoText } from "./styledLogo";

export const Logo = () => {
    return (
        <LogoContainer>
            <Link to={'/'}>
                <LogoText>European Herald</LogoText>
            </Link>
        </LogoContainer>
    )
}