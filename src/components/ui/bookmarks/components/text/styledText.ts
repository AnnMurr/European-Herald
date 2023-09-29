import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Span = styled.span<ThemeStyledProps>`
    font-size: 22px;
    color:${({ themestyles }) => themestyles.color};
`

export const Container = styled.div`
    text-align: center;
    max-width: 60%;
    margin: 0 auto;
    width: 100%;
    margin-top: 60px;
`