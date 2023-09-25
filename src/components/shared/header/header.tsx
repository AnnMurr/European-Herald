import { useContext, useRef, useState } from "react";
import { LinkContext, LinkContextType } from "../../../contexts/linkContext/linkContext";
import { AuthenticationOptions, Logo, NavMenu, Search, Settings, SettingsBtn, UserIconBtn } from ".";
import { Container, HeaderMenuNav, HeaderMenuNavInner, LeftContent, RightContent } from "./styledHeader";
import { ThemeContext } from "../../../contexts/themeContext/themeContext";
import { ThemeContextType } from "../../../contexts/themeContext/types";
import { Burger } from "./components/burger/burger";
import { SubBar } from "./components/subBar/subBar";

export const Header = () => {
    const [isAuthOptionsActive, setIsAuthOptionsActive] = useState<boolean>(false)
    const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false)
    const [isSubBarActive, setIsSubBarActive] = useState<boolean>(false)
    const { hideContent }: LinkContextType = useContext(LinkContext)
    const userIconBtnRef = useRef<HTMLDivElement>(null)
    const settingsIconBtnRef = useRef<HTMLDivElement>(null)
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Container themestyles={themeContext.themeStyles}>
            <Logo />
            {!hideContent ?
                <HeaderMenuNav>
                    <HeaderMenuNavInner>
                        <LeftContent>
                            <SettingsBtn settingsIconBtnRef={settingsIconBtnRef} setIsSettingsActive={setIsSettingsActive} />
                            {isSettingsActive ? <Settings settingsIconBtnRef={settingsIconBtnRef} closeModal={setIsSettingsActive} /> : null}

                            <Burger setIsSubBarActive={setIsSubBarActive} />
                            {isSubBarActive ? <SubBar setIsSubBarActive={setIsSubBarActive} /> : null}

                            <NavMenu />
                        </LeftContent>
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