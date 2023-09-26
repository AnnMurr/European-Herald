import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Item } from "./styledLink";
import { LinkProps } from "../../../../types";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

export const Link: React.FC<LinkProps> = ({ linkName, closeSubBar }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Item themestyles={themeContext.themeStyles}>
            <NavLink
                onClick={closeSubBar}
                className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                to={linkName === 'Home' ? '/' : `/category/${linkName.charAt(0).toLowerCase() + linkName.slice(1)}`}>
                {linkName}
            </NavLink>
        </Item>
    )
}