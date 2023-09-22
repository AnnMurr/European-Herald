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

export const BtnShowPassword = styled.div`
    position: relative;
    bottom: 35px;
    width: fit-content;
    margin-left: auto;
    right: 20px;
    height: 0;
`