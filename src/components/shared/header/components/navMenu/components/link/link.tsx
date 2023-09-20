import React from "react";
import { NavLink } from "react-router-dom";
import { Item } from "./styledLink";
import { LinkProps } from "../../../../types";

export const Link: React.FC<LinkProps> = ({ linkName }) => {
    return (
        <Item>
            <NavLink
                className={({ isActive }) => (isActive ? 'nav__link_active' : 'nav__link')}
                to={linkName === 'Home' ? '/' : `/category/${linkName.charAt(0).toLowerCase() + linkName.slice(1)}`}>
                {linkName}
            </NavLink>
        </Item>
    )
}