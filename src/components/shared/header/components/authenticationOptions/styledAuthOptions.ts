import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Container = styled.div<ThemeStyledProps>`
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background-color:${({ themestyles }) => themestyles.backgroundForm};
    position: absolute;
    top: 8.5rem;
    right: 2em;
    box-shadow:${({ theme }) => theme === 'light' ? '0px 0px 8px #534c4c' : '0px 0px 3px #918f8f'};

    @media screen and (max-width: 520px) {
        right: 15px;
    }

    @media screen and (max-width: 360px) {
        max-width: 92%;
    }
`