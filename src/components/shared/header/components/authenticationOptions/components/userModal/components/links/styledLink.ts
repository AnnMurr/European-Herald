import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../../../contexts/themeContext/types";

export const Wrap = styled.div<ThemeStyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    transition: all 0.5s ease;
    
    &:last-child {
        border-top: 1px solid transparent;
    }

    &:hover {
        opacity:${({ theme }) => theme === 'dark' ? '0.5' : '0.7'};
    }
`

export const StyledLink = styled(Link)<ThemeStyledProps>`
    font-size: 16px;
    font-weight: 700;
    color:${({ themestyles }) => themestyles.color};
    padding: 10px;
    width: 100%;
    text-align: center;
`