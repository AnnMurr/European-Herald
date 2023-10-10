import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Container = styled.div`
    max-width 200px;
    width: 100%;
`

export const Wrapper = styled.div<ThemeStyledProps>`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
       padding: 10px 0;
    }

    @media screen and (max-width: 576px) {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }   
`