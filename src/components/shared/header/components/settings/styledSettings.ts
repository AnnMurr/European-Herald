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
`

export const BtnCloseWrapper = styled.div`
    margin-left: auto;
    width: fit-content; 
`