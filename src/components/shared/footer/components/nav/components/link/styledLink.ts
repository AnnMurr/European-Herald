import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const StyledLink = styled(Link)<ThemeStyledProps>`
    font-size: 14px;
    margin: 0 5px;
    color:${({ themestyles }) => themestyles.color};
    transition: all 0.5s ease;

    &:hover {
        border-bottom: ${({ themestyles }) => `1px solid ${themestyles.color}`};
    }

    @media screen and (max-width: 520px) {
        font-size: 12px;
    }
`