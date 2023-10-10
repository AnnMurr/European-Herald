import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Country = styled.h3<ThemeStyledProps>`
    font-size: 30px;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }    
`

export const City = styled.h5<ThemeStyledProps>`
    font-size: 20px;
    font-weight: 500;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }   
`