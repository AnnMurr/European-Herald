import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const TitleInner = styled.div`
    padding: 10px 0 30px 0;

    @media screen and (max-width: 840px) {
        padding: 30px 0 30px 0;
    }
`

export const TitleText = styled.h2<ThemeStyledProps>`
    font-size: 35px;
    color:${({themestyles}) => themestyles.color};

    @media screen and (max-width: 520px) {
        font-size: 25px;
    }
`