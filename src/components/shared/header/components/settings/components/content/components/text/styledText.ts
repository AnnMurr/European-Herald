import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../../../contexts/themeContext/types";

export const Span = styled.div<ThemeStyledProps>`
    font-weight: 600;
    font-size: 16px;
    color:${({themestyles}) => themestyles.color};
`