import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { LinkProps } from "../../../../types";
import { ThemeContextType } from "../../../../../../../contexts/themeContext/types";
import { ThemeContext } from "../../../../../../../contexts/themeContext/themeContext";

import { Item } from "./styledLink";

export const Link: React.FC<LinkProps> = ({ linkName }) => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)

    return (
        <Item themestyles={themeContext.themeStyles}>
            <NavLink
                className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                to={linkName === 'Home' ? '/European-Herald/dist/' : `/category/${linkName.charAt(0).toLowerCase() + linkName.slice(1)}`}>
                {linkName}
            </NavLink>
        </Item>
    )
}