import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Span = styled.span<ThemeStyledProps>`
    font-size: 13px;
    color:${({ themestyles }) => themestyles.color};
`

export const StyledLink = styled(Link)<ThemeStyledProps>`
    color:${({ themestyles }) => themestyles.color};
    border-bottom:${({ themestyles }) => `1px solid ${themestyles.color}`};

    &:hover {
        border-bottom:${({ themestyles }) => `2px solid ${themestyles.color}`};
    }
`