import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const Container = styled.div`
    max-width: 60%;
    margin: 0 auto;
    width: 100%;
`

export const Span = styled.span<ThemeStyledProps>`
    font-size: 18px;
    overflow-wrap: anywhere;
    color:${({themestyles}) => themestyles.color}
`