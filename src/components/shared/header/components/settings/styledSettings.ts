import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Container = styled.div<ThemeStyledProps>`
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background-color:${({themestyles}) => themestyles.backgroundForm};
    position: absolute;
    top: 8.5rem;
    left: 2em;
    box-shadow:${({ theme }) => theme === 'light' ? '0px 0px 8px #534c4c' : ''};

    @media screen and (max-width: 520px) {
        left: 15px;
    }

    @media screen and (max-width: 360px) {
        max-width: 92%;
    }
`

export const BtnCloseWrapper = styled.div`
    margin-left: auto;
    width: fit-content; 
`