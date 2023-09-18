import { Wrapper } from "./styledFooter"
import { SocialMedia } from "./components/socialMedia/socialMedia"
import { NavMenu } from "./components/nav/nav"
import { Copyright } from "./components/copyright/copyright"


export const Footer = () => {
    return (
        <footer>
            <Wrapper>
                <SocialMedia />
                <NavMenu />
                <Copyright />
            </Wrapper>
        </footer>
    )
}