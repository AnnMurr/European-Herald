import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Inner = styled.div`
    padding: 15px 0;
`

export const Span = styled.span<ThemeStyledProps>`
    font-size: 15px;
    font-weight: 600;
    color:${({themestyles}) => themestyles.color}
`