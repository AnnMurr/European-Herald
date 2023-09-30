import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Paragraph = styled.p<ThemeStyledProps>`
    color:${({themestyles}) => themestyles.color};
    font-size: 16px;
`

export const Wrapper = styled.div`
    @media screen and (max-width: 520px) {
        padding-top: 30px;
    }
`