import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Nav = styled.nav<ThemeStyledProps>`
    padding: 30px;
    background-color: white;
    max-width: 300px;
    width: 100%;
    position: absolute;
    top: 7.8rem;
    left: 0;
    background-color:${({themestyles}) => themestyles.backgroundForm};
    height: 100vh;

    @media screen and (max-width: 520px) {
        max-width: 100%;
    }
`

export const BtnCloseWrapper = styled.div`
    margin-left: auto;
    width: fit-content; 
`