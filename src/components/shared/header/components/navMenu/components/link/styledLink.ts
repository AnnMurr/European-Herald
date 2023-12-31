import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";

export const Item = styled.li<ThemeStyledProps>`
    font-weight: 700;
    padding: 0 5px;
    font-size: 16px;
    font-family: 'Lato';
    
    & a {
        color:${({ themestyles }) => themestyles.color};
    }
`