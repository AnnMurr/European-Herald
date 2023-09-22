import { Wrapper } from "./styledFooter";
import { SocialMedia } from "./components/socialMedia/socialMedia";
import { NavMenu } from "./components/nav/nav";
import { Copyright } from "./components/copyright/copyright";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { useContext } from "react";

export const Footer = () => {
    const { hideNavigation }: LinkContextType = useContext(LinkContext)

    return (
        <>
            {!hideNavigation ?
                <footer>
                    <Wrapper>
                        <SocialMedia />
                        <NavMenu />
                        <Copyright />
                    </Wrapper>
                </footer>
                : null}
        </>
    )
}