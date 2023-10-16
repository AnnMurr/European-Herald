import { useContext } from "react";

import { SocialMedia } from "./components/socialMedia/socialMedia";
import { NavMenu } from "./components/nav/nav";
import { Copyright } from "./components/copyright/copyright";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";

import { Wrapper } from "./styledFooter";

export const Footer = () => {
    const { hideContent }: LinkContextType = useContext(LinkContext)

    return (
        <>
            {!hideContent ?
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