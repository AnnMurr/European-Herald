import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Label = styled.label<ThemeStyledProps>`
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color:${({ themestyles }) => themestyles.color};
`