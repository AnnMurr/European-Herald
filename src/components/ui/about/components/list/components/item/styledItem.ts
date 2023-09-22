import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const ItemContainer = styled.li<ThemeStyledProps>`
    font-size: 16px;
    font-family: 'Jost';
    padding: 5px 0;
    color:${({ themestyles }) => themestyles.color};
`

export const Span = styled.span`
    font-weight: 600;
`