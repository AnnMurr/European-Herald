import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const TitleText = styled.h4<ThemeStyledProps>`
    font-size: 20px;
    color: ${({ themestyles }) => themestyles.color};
`