import { useContext, useRef, useState } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { AuthenticationOptions, Logo, NavMenu, UserIconBtn } from ".";
import { Container, HeaderMenuNav } from "./styledHeader";

export const Header = () => {
    const [isAuthOptionsActive, setIsAuthOptionsActive] = useState<boolean>(false)
    const { hideNavigation }: LinkContextType = useContext(LinkContext)
    const userIconBtnRef = useRef<HTMLDivElement>(null)

    return (
        <Container>
            <Logo />
            {!hideNavigation ?
                <HeaderMenuNav>
                    <NavMenu />
                    <UserIconBtn userIconBtnRef={userIconBtnRef} setIsAuthOptionsActive={setIsAuthOptionsActive} />
                    {isAuthOptionsActive ? <AuthenticationOptions userIconBtnRef={userIconBtnRef} closeModal={setIsAuthOptionsActive} /> : null}
                </HeaderMenuNav>
                : null}
        </Container >
    )
}