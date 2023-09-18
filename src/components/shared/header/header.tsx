import { useContext, useRef, useState } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { AuthenticationOptions, Logo, NavMenu, UserIconBtn } from ".";
import { Container, HeaderMenuNav, HeaderMenuNavInner, RightContent } from "./styledHeader";
import { Search } from "./components/search/search";

export const Header = () => {
    const [isAuthOptionsActive, setIsAuthOptionsActive] = useState<boolean>(false)
    const { hideNavigation }: LinkContextType = useContext(LinkContext)
    const userIconBtnRef = useRef<HTMLDivElement>(null)

    return (
        <Container>
            <Logo />
            {!hideNavigation ?
                <HeaderMenuNav>
                    <HeaderMenuNavInner>
                        <NavMenu />
                        <RightContent>
                            <Search />
                            <UserIconBtn userIconBtnRef={userIconBtnRef} setIsAuthOptionsActive={setIsAuthOptionsActive} />
                            {isAuthOptionsActive ? <AuthenticationOptions userIconBtnRef={userIconBtnRef} closeModal={setIsAuthOptionsActive} /> : null}
                        </RightContent>
                    </HeaderMenuNavInner>
                </HeaderMenuNav>
                : null}
        </Container >
    )
}