import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const ItemInner = styled.li`
    padding: 20px 0;
    justify-content: space-between;
    display: flex;
    border-top: 1px solid gray;

    &:last-child {
        border-bottom: 1px solid gray;
    }
`

export const Headline = styled.h5<ThemeStyledProps>`
   font-size: 18px;
   color:${({ themestyles }) => themestyles.color};

   @media screen and (max-width: 520px) {
        font-size: 16px;
    }
`

export const Span = styled.span<ThemeStyledProps>`
   font-size: 18px;
   color:${({ themestyles }) => themestyles.color};

   @media screen and (max-width: 520px) {
        font-size: 14px;
    }
`