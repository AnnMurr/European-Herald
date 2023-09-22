import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const TitleText = styled.h4<ThemeStyledProps>`
    font-size: 20px;
    color:${({ themestyles }) => themestyles.color};
`

export const Block = styled.h4`
    padding: 10px 0 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
`