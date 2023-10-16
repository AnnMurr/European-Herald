import { ThemeStyledProps } from "../../../../../../../../../contexts/themeContext/types";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`

export const Span = styled.span<ThemeStyledProps>`
    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;
    color:${({ themestyles }) => themestyles.color};
`