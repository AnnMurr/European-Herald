import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const TitleText = styled.h3<ThemeStyledProps>`
    font-size: 26px;
    color:${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 520px) {
        font-size: 20px;
    }
`