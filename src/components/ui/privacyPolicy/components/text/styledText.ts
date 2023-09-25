import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Paragraph = styled.p<ThemeStyledProps>`
    font-size: 16px;
    font-family: 'Jost';
    color:${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 520px) {
        font-size: 14px;
    }
`