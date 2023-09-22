import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Span = styled.span<ThemeStyledProps>`
    font-size: 12px;
    color:${({ themestyles }) => themestyles.color};
`