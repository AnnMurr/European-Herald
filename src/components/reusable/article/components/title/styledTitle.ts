import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const TitleInner = styled.div`
    padding: 10px 0 30px 0;
`

export const TitleText = styled.h2<ThemeStyledProps>`
    font-size: 35px;
    color:${({themestyles}) => themestyles.color}
`