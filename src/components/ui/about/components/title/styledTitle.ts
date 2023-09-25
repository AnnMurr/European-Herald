import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const TitleInner = styled.div`
    padding: 40px 0 15px 0;
`

export const TitleText = styled.h4<ThemeStyledProps>`
    font-size: 23px;
    font-family: 'Jost';
    color:${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 520px) {
        font-size: 18px;
    }
`