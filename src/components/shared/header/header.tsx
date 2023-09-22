import { useContext, useRef, useState } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { AuthenticationOptions, Logo, NavMenu, UserIconBtn } from ".";
import { Container, HeaderMenuNav, HeaderMenuNavInner, RightContent } from "./styledHeader";
import { Search } from "./components/search/search";
import { SettingsBtn } from "./components/settingsBtn/settingsBtn";
import { Settings } from "./components/settings/settings";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";

export const Header = () => {
    const [isAuthOptionsActive, setIsAuthOptionsActive] = useState<boolean>(false)
    const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false)
    const { hideContent }: LinkContextType = useContext(LinkContext)
    const userIconBtnRef = useRef<HTMLDivElement>(null)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container themestyles={themeContext.themeStyles}>
            <Logo />
            {!hideContent ?
                <HeaderMenuNav>
                    <HeaderMenuNavInner>
                        <SettingsBtn setIsSettingsActive={setIsSettingsActive} />
                        {isSettingsActive ? <Settings closeModal={setIsSettingsActive} /> : null}
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