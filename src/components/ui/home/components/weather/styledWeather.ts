import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";
import { Link } from "react-router-dom";

export const Container = styled.div<ThemeStyledProps>`
    height: 106px;
    margin: 50px 0 100px 0;
    font-family: 'Lato';
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 520px) {
        margin: 0 0 50px 0;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const StyledLink = styled(Link)<ThemeStyledProps>`
    display: flex;
    width: 100%;
    color: ${({ themestyles }) => themestyles.color};
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.7;
    }
`