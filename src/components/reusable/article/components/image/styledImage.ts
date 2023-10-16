import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const ImageInner = styled.div`
    width: 100%;
    min-height: 40vh;

    @media screen and (max-width: 520px) {
        min-height: 30vh;
    }
`

export const Img = styled.img<ThemeStyledProps>`
    color: ${({ themestyles }) => themestyles.color};
`