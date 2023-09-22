import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const LogoContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 5px;
`

export const LogoText = styled.h2<ThemeStyledProps>`
    font-family: 'Staatliches';
    font-size: 30px;
    color: ${({ themestyles }) => themestyles.color};
`